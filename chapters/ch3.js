document.write(String.raw`
<section class="sec" id="ch3" data-c="3">
  <div class="sec-head">
    <div class="sec-num">03</div>
    <div><span class="code">Глава 03</span><h2>Строки</h2><p>Как узнать длину текста, достать из него нужный символ или кусок и найти в нём слово.</p></div>
  </div>
  <ul class="goals nos">
    <li>находить длину строки через len()</li>
    <li>брать символ по номеру</li>
    <li>вырезать часть строки срезом</li>
    <li>искать слово через find()</li>
    <li>убирать большие буквы через lower()</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Длина строки: len()</h3>
      <p>Строка — это цепочка символов. Символ — это любая буква, цифра, знак препинания и даже <b>пробел</b>.</p>
      <p>Функция <code>len()</code> считает, сколько символов в строке, и возвращает число.</p>
      <div class="cb"><pre>
review = 'Привет, мир!'
length = len(review)
print(length)
</pre><div class="out">12</div></div>
      <p>Посчитай сам: 6 букв «Привет» + запятая + пробел + 3 буквы «мир» + «!» = 12.</p>
      <div class="note tip"><b class="t">Где пригодится</b>Проверить, что пароль не короче 8 символов, или что отзыв достаточно подробный.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Номера символов</h3>
      <p>У каждого символа в строке есть номер — <b>индекс</b>. Python считает <b>с нуля</b>:</p>
      <div class="idx" aria-label="Индексы строки Python">
        <div><b>P</b><span>0</span></div><div><b>y</b><span>1</span></div><div><b>t</b><span>2</span></div><div><b>h</b><span>3</span></div><div><b>o</b><span>4</span></div><div><b>n</b><span>5</span></div>
      </div>
      <p>Чтобы достать один символ, напиши его номер в квадратных скобках:</p>
      <div class="cb"><pre>
word = 'Python'
print(word[0])
print(word[3])
</pre><div class="out">P
h</div></div>
      <div class="note warn"><b class="t">Осторожно</b>В слове из 6 букв последний номер — <b>5</b>, а не 6. <code>word[6]</code> даст ошибку <code>IndexError</code>.</div>
      <div class="note tip"><b class="t">Лайфхак</b>Номера можно считать с конца: <code>word[-1]</code> — последний символ, <code>word[-2]</code> — предпоследний.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Часть строки: срез</h3>
      <p>Чтобы вырезать кусок, укажи в скобках два номера через двоеточие: <b>откуда</b> и <b>докуда</b>.</p>
      <div class="cb"><pre>
word = 'Python'
print(word[0:3])
print(word[2:6])
</pre><div class="out">Pyt
thon</div></div>
      <div class="note warn"><b class="t">Главное правило среза</b>Первый номер <b>входит</b>, второй — <b>нет</b>. <code>word[0:3]</code> — это символы 0, 1 и 2. Удобно: длина куска = второй номер − первый (3 − 0 = 3).</div>
      <div class="note tip"><b class="t">Лайфхак</b>Номер можно не писать: <code>word[:2]</code> — с начала, <code>word[2:]</code> — до конца.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>Поиск: find()</h3>
      <p><code>find()</code> ищет слово внутри строки и возвращает <b>номер</b>, с которого оно начинается. Если слова нет — возвращает <b>-1</b>.</p>
      <div class="cb"><pre>
review = 'Понравилась окрошка от шефа'
print(review.find('окрошка'))
print(review.find('пицца'))
</pre><div class="out">12
-1</div></div>
      <p>Обрати внимание на запись: <code>find</code> пишется <b>через точку</b> после строки. Такие функции «прикреплены» к строке, их называют <b>методами</b>.</p>
      <div class="note tip"><b class="t">Лайфхак</b>Если нужен просто ответ «есть или нет», проверь: <code>review.find('окрошка') != -1</code>. В главе про цикл for появится ещё проще: <code>'окрошка' in review</code>.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>Большие и маленькие буквы: lower()</h3>
      <p>Для Python <code>'У'</code> и <code>'у'</code> — разные символы. Поэтому <code>'Уютно'.find('уют')</code> вернёт -1: слово с маленькой буквы не найдено.</p>
      <p><code>lower()</code> делает все буквы маленькими, <code>upper()</code> — большими:</p>
      <div class="cb"><pre>
text = 'Уютно!'
text = text.lower()
print(text)
print(text.find('уют'))
</pre><div class="out">уютно!
0</div></div>
      <div class="note warn"><b class="t">Осторожно</b><code>lower()</code> не меняет саму строку, а создаёт новую. Строчка <code>text.lower()</code> без <code>text =</code> ничего не изменит. Посмотри в пошаговом разборе ниже.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>Как Python понимает команды</h3>
      <p>Компьютер понимает только сигналы: <b>1</b> — ток есть, <b>0</b> — тока нет. Писать программы нулями и единицами очень неудобно.</p>
      <p>Поэтому есть <b>интерпретатор</b> — программа, которая читает твой код на Python, переводит каждую команду на язык компьютера и выполняет её.</p>
      <p>Интерпретатор смотрит на <b>типы данных</b>. Видит <code>+</code> между числами — складывает. Видит <code>+</code> между строками — склеивает:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Код</th><th>Результат</th></tr>
        <tr><td><code>4 + 5</code></td><td>9</td></tr>
        <tr><td><code>'4' + '5'</code></td><td>'45'</td></tr>
        <tr><td><code>'Ура! ' * 3</code></td><td>'Ура! Ура! Ура! '</td></tr>
        <tr><td><code>len(12345)</code></td><td class="bad">ошибка: у числа нет длины</td></tr>
      </table></div>
      <div class="note tip"><b class="t">Лайфхак</b>Нужна длина числа (сколько в нём цифр)? Сначала сделай его строкой: <code>len(str(12345))</code> → 5.</div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Ищем слово «уют» в отзыве</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["review = 'Уютно и вкусно!'","print(len(review))","pos = review.find('уют')","print(pos)","review.lower()","pos = review.find('уют')","print(pos)","review = review.lower()","pos = review.find('уют')","print(pos)"],
        "start":"Отзыв начинается со слова «Уютно» с большой буквы. Найдёт ли программа «уют»?",
        "steps":[
          {"line":1,"set":{"review":"'Уютно и вкусно!'"},"note":"Сохраняем отзыв в переменную."},
          {"line":2,"out":"15","note":"<code>len</code> считает все символы, включая пробелы и «!»: 15."},
          {"line":3,"set":{"pos":"-1"},"note":"Ищем <code>'уют'</code> с маленькой буквы, а в отзыве <code>'Уют'</code> с большой. Не нашли — получаем -1."},
          {"line":4,"out":"-1","note":"Печатаем -1."},
          {"line":5,"note":"<code>lower()</code> создал строку <code>'уютно и вкусно!'</code>, но мы её никуда не сохранили. Смотри: <code>review</code> не изменился!"},
          {"line":6,"set":{"pos":"-1"},"note":"Поэтому поиск снова не находит слово: -1."},
          {"line":7,"out":"-1","note":"Опять -1. Вот частая ошибка: забыть <code>review =</code>."},
          {"line":8,"set":{"review":"'уютно и вкусно!'"},"note":"Теперь сохраняем результат <code>lower()</code> обратно в <code>review</code>. Все буквы маленькие."},
          {"line":9,"set":{"pos":"0"},"note":"«уют» найден в самом начале строки — номер 0."},
          {"line":10,"out":"0","note":"Печатаем 0. Ноль — это не «не нашли», а «нашли на нулевом месте»! «Не нашли» — это только -1."}
        ]}</script>
      </div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Вырезаем кусок отзыва</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["text = 'Ходили на бокс. Отличный пляж'","sport = text[0:14]","start = text.find('пляж')","beach = text[start:start + 4]","print(sport)","print(beach)"],
        "start":"Задача: достать из отзыва фразу про бокс и слово «пляж».",
        "steps":[
          {"line":1,"set":{"text":"'Ходили на бокс. Отличный пляж'"},"note":"В строке 29 символов, номера от 0 до 28."},
          {"line":2,"set":{"sport":"'Ходили на бокс'"},"note":"Срез с 0 по 14, причём 14-й символ (точка) <b>не входит</b>. Получаем 14 символов."},
          {"line":3,"set":{"start":"25"},"note":"Ищем, где начинается «пляж»: на месте 25."},
          {"line":4,"set":{"beach":"'пляж'"},"note":"Срез <code>text[25:29]</code>: 4 символа, ровно длина слова «пляж»."},
          {"line":5,"out":"Ходили на бокс","note":"Печатаем первый кусок."},
          {"line":6,"out":"пляж","note":"Печатаем второй. Связка <code>find</code> + срез помогает вырезать слово, даже если не знаешь заранее, где оно."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <div class="errs">
        <div class="err-item"><div class="msg">IndexError: string index out of range</div><div class="body"><p><b>Код</b><code>word = 'abc'</code>, потом <code>print(word[3])</code></p><p><b>Почему</b>Символа с таким номером нет: в строке из 3 символов номера 0, 1, 2.</p><p><b>Как исправить</b>Помни, что счёт с нуля. Последний символ — <code>word[len(word) - 1]</code> или просто <code>word[-1]</code>.</p></div></div>
        <div class="err-item"><div class="msg">TypeError: object of type 'int' has no len()</div><div class="body"><p><b>Код</b><code>len(12345)</code></p><p><b>Почему</b><code>len()</code> работает со строками, а у числа длины нет.</p><p><b>Как исправить</b><code>len(str(12345))</code>.</p></div></div>
        <div class="err-item"><div class="msg">AttributeError: 'int' object has no attribute 'lower'</div><div class="body"><p><b>Почему</b><code>lower()</code> и <code>find()</code> есть только у строк, а их вызвали у числа.</p><p><b>Как исправить</b>Проверь, что в переменной строка, а не число.</p></div></div>
        <div class="err-item"><div class="msg">Ошибки нет, но слово не находится</div><div class="body"><p><b>Почему</b>Чаще всего мешают большие буквы, или написали <code>text.lower()</code> без <code>text =</code>.</p><p><b>Как исправить</b><code>text = text.lower()</code> перед поиском, а слово для поиска пиши маленькими буквами.</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print(len('Кот и пёс'))
</pre></div><div class="opts"><button data-k="a">7</button><button data-k="b">3</button><button data-k="c">9</button></div><div class="why"><b></b>Пробелы тоже символы: 3 + 1 + 1 + 1 + 3 = 9.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
word = 'Python'
print(word[1])
</pre></div><div class="opts"><button data-k="a">P</button><button data-k="b">y</button><button data-k="c">t</button></div><div class="why"><b></b>Счёт с нуля: P — 0, y — 1.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
word = 'Python'
print(word[0:3])
</pre></div><div class="opts"><button data-k="a">Pyt</button><button data-k="b">Pyth</button><button data-k="c">yth</button></div><div class="why"><b></b>Берутся номера 0, 1, 2. Номер 3 в срез не входит.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print('Привет'.find('в'))
</pre></div><div class="opts"><button data-k="a">4</button><button data-k="b">3</button><button data-k="c">-1</button></div><div class="why"><b></b>П — 0, р — 1, и — 2, в — 3.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print('Мир'.find('мир'))
</pre></div><div class="opts"><button data-k="a">0</button><button data-k="b">1</button><button data-k="c">-1</button></div><div class="why"><b></b><code>'М'</code> и <code>'м'</code> — разные символы, поэтому не найдено.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
s = 'ABC'
s.lower()
print(s)
</pre></div><div class="opts"><button data-k="a">ABC</button><button data-k="b">abc</button><button data-k="c">ошибка</button></div><div class="why"><b></b>Результат <code>lower()</code> не сохранили, поэтому в <code>s</code> осталась старая строка. Нужно <code>s = s.lower()</code>.</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li><code>len(s)</code> — сколько символов в строке, пробелы тоже считаются.</li>
        <li>Символы нумеруются с нуля: <code>s[0]</code> — первый, <code>s[-1]</code> — последний.</li>
        <li>Срез <code>s[a:b]</code> — с номера a до b, сам b не входит.</li>
        <li><code>s.find('слово')</code> — номер начала слова или -1, если его нет.</li>
        <li><code>s = s.lower()</code> — все буквы маленькие. Не забывай сохранить результат.</li>
        <li>Интерпретатор переводит код в команды для компьютера и смотрит на типы данных.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="3" type="button"></button></div>
</section>
`);
