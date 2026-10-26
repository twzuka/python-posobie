/* ---------- подсветка кода ---------- */
const KW=/^(if|elif|else|while|for|in|and|or|not|True|False|None|break|continue)$/;
const FN=/^(print|input|int|float|str|len|type|range|round)$/;
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function hl(src){
  const re=/(#[^\n]*)|('(?:[^'\\\n]|\\.)*'?|"(?:[^"\\\n]|\\.)*"?)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][A-Za-z0-9_]*)/g;
  let out='',last=0,m;
  while((m=re.exec(src))){
    out+=esc(src.slice(last,m.index));
    const t=esc(m[0]);
    if(m[1])out+='<span class="s-com">'+t+'</span>';
    else if(m[2])out+='<span class="s-str">'+t+'</span>';
    else if(m[3])out+='<span class="s-num">'+t+'</span>';
    else if(KW.test(m[4]))out+='<span class="s-kw">'+t+'</span>';
    else if(FN.test(m[4]))out+='<span class="s-fn">'+t+'</span>';
    else out+=t;
    last=re.lastIndex;
  }
  return out+esc(src.slice(last));
}
document.querySelectorAll('.cb pre').forEach(pre=>{
  const src=pre.textContent.replace(/^\n/,'').replace(/\s+$/,'');
  pre.dataset.src=src; pre.innerHTML=hl(src);
  const b=document.createElement('button'); b.className='copy'; b.type='button'; b.textContent='Копировать';
  b.onclick=()=>{
    const done=()=>{b.textContent='Скопировано ✓';setTimeout(()=>b.textContent='Копировать',1400)};
    try{navigator.clipboard.writeText(src).then(done,()=>{})}catch(e){}
  };
  pre.parentNode.appendChild(b);
});

/* ---------- пошаговый разбор ---------- */
function typeOf(v){if(v==='True'||v==='False')return'bool';if(v.startsWith("'"))return'str';if(v.includes('.'))return'float';return'int'}
document.querySelectorAll('.stepper').forEach(box=>{
  const data=JSON.parse(box.querySelector('script').textContent);
  const codeEl=box.querySelector('.st-code'),varsEl=box.querySelector('.st-vars-box'),outEl=box.querySelector('.st-out'),noteEl=box.querySelector('.st-note'),cnt=box.querySelector('.st-count');
  const [bBack,bNext,bReset]=box.querySelectorAll('.st-ctrl .btn');
  codeEl.innerHTML=data.code.map((l,i)=>'<div class="st-line"><span class="ln">'+(i+1)+'</span><span>'+hl(l)+'</span></div>').join('');
  const lines=codeEl.querySelectorAll('.st-line');
  let k=-1;
  function render(){
    lines.forEach((el,i)=>{el.classList.remove('cur','done')});
    let vars={},prev={},out=[],changed=null;
    for(let i=0;i<=k;i++){
      const s=data.steps[i]; prev=Object.assign({},vars);
      if(s.set){for(const n in s.set)vars[n]=s.set[n]}
      if(s.out!==undefined)out.push(s.out);
      if(i===k)changed=s.set?Object.keys(s.set):[];
    }
    if(k>=0){
      const s=data.steps[k];
      lines[s.line-1].classList.add('cur');
      for(let i=0;i<k;i++){const L=data.steps[i].line;if(L!==s.line)lines[L-1].classList.add('done')}
      noteEl.innerHTML=s.note;
    }else noteEl.innerHTML=data.start||'Нажми «Шаг», и Python выполнит первую строку.';
    const names=Object.keys(vars);
    varsEl.innerHTML=names.length?'<table class="st-vars">'+names.map(n=>{const v=vars[n],t=typeOf(v);return'<tr class="'+((changed||[]).includes(n)?'chg':'')+'"><td>'+n+'</td><td class="v">'+esc(v)+'</td><td><span class="type '+t+'">'+t+'</span></td></tr>'}).join('')+'</table>':'<p class="st-empty">Пока ни одной переменной</p>';
    outEl.innerHTML=out.length?out.map(o=>o.startsWith('⌨')?'<span class="in">'+esc(o)+'</span>':esc(o)).join('\n'):'<span style="opacity:.5">экран пуст</span>';
    cnt.textContent=(k+1)+' / '+data.steps.length;
    bBack.disabled=k<0; bNext.disabled=k>=data.steps.length-1;
    bNext.textContent=k<0?'Запустить ▶':'Шаг ▶';
  }
  bNext.onclick=()=>{if(k<data.steps.length-1){k++;render()}};
  bBack.onclick=()=>{if(k>=0){k--;render()}};
  bReset.onclick=()=>{k=-1;render()};
  render();
});

/* ---------- вопросы ---------- */
document.querySelectorAll('[data-quizset]').forEach(set=>{
  const qs=set.querySelectorAll('.quiz'),bar=set.querySelector('.score i'),txt=set.querySelector('.score span');
  let ok=0,answered=0;
  function upd(){txt.textContent='Верно: '+ok+' из '+qs.length;bar.style.width=(ok/qs.length*100)+'%'}
  qs.forEach(q=>{
    const why=q.querySelector('.why'); why.hidden=true;
    q.querySelectorAll('.opts button').forEach(b=>{
      b.type='button';
      b.onclick=()=>{
        if(q.dataset.done)return; q.dataset.done=1; answered++;
        const right=b.dataset.k===q.dataset.answer;
        q.querySelectorAll('.opts button').forEach(x=>{if(x.dataset.k===q.dataset.answer)x.classList.add('right')});
        if(right){ok++}else{b.classList.add('wrong');q.classList.add('miss')}
        why.querySelector('b').textContent=right?'Верно! ':'Не совсем. ';
        why.hidden=false; upd();
      };
    });
  });
  const again=set.querySelector('.again');
  if(again)again.onclick=()=>{ok=0;answered=0;qs.forEach(q=>{delete q.dataset.done;q.classList.remove('miss');q.querySelector('.why').hidden=true;q.querySelectorAll('.opts button').forEach(x=>x.classList.remove('right','wrong'))});upd()};
  upd();
});

/* ---------- отметки «глава пройдена» ---------- */
function getDone(){try{return JSON.parse(localStorage.getItem('py-done')||'[]')}catch(e){return[]}}
function setDone(a){try{localStorage.setItem('py-done',JSON.stringify(a))}catch(e){}}
function paintDone(){
  const d=getDone();
  document.querySelectorAll('nav.tabs a[data-ch]').forEach(a=>a.classList.toggle('done',d.includes(a.dataset.ch)));
  document.querySelectorAll('.donebtn').forEach(b=>{const on=d.includes(b.dataset.ch);b.classList.toggle('on',on);b.textContent=on?'✓ Глава пройдена':'Отметить главу пройденной'});
}
document.querySelectorAll('.donebtn').forEach(b=>b.onclick=()=>{let d=getDone();d=d.includes(b.dataset.ch)?d.filter(x=>x!==b.dataset.ch):d.concat(b.dataset.ch);setDone(d);paintDone()});
paintDone();

/* ---------- активная вкладка ---------- */
const tabs=[...document.querySelectorAll('nav.tabs a[href^="#ch"]')];
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){tabs.forEach(t=>t.classList.toggle('on',t.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('section.sec[id^="ch"]').forEach(s=>io.observe(s));

/* ---------- поиск ---------- */
const q=document.getElementById('q'),clr=document.getElementById('clear'),toc=document.getElementById('toc'),nores=document.getElementById('nores');
function norm(s){return s.toLowerCase().replace(/ё/g,'е')}
document.querySelectorAll('[data-s]').forEach(el=>el.dataset.txt=norm(el.textContent));
function doSearch(){
  const v=norm(q.value.trim()); clr.hidden=!v; toc.hidden=!!v; let any=false;
  document.querySelectorAll('section.sec').forEach(sec=>{
    let vis=0;
    sec.querySelectorAll('[data-s]').forEach(el=>{const show=!v||el.dataset.txt.includes(v);el.hidden=!show;if(show)vis++});
    sec.querySelectorAll('.nos').forEach(el=>el.hidden=!!v);
    sec.hidden=v&&!vis; if(vis)any=true;
  });
  nores.hidden=!v||any;
}
q.addEventListener('input',doSearch);
clr.onclick=()=>{q.value='';doSearch();q.focus()};
