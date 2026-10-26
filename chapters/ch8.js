document.write(String.raw`
<section class="sec" id="ch8" data-c="8">
  <div class="sec-head">
    <div class="sec-num">08</div>
    <div><span class="code">Глава 08</span><h2>Цикл for</h2><p>Как перебрать все символы строки, повторить действие нужное число раз с range() и досрочно выйти из цикла через break.</p></div>
  </div>
  <ul class="goals nos">
    <li>перебирать строку через for</li>
    <li>проверять символ через in</li>
    <li>повторять n раз с range()</li>
    <li>выбирать между for и while</li>
    <li>прерывать цикл через break</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Перебор строки</h3>
      <p>Строка — это <b>последовательность</b> символов, которые стоят по порядку. Цикл <code>for</code> берёт их по одному, с первого до последнего:</p>
      <div class="cb"><pre>
password = 'kitty'
for symbol in password:
    print(symbol)
</pre><div class="out">k
i
t
t
y</div></div>
      <p>Читается так: «для каждого <code>symbol</code> в <code>password</code> сделай…». На каждом шаге в переменную <code>symbol</code> попадает следующий символ.</p>
      <div class="note tip"><b class="t">Почему это удобно</b>Не нужен счётчик и не нужно знать длину строки: Python сам знает, где начало и где конец. Сколько символов — столько и шагов.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Как записать for</h3>
      <div class="cb"><pre>
for переменная in последовательность:
    тело цикла
</pre></div>
      <ul>
        <li>после <code>for</code> — имя новой переменной (придумай понятное: <code>letter</code>, <code>symbol</code>);</li>
        <li>слово <code>in</code> («в»);</li>
        <li>что перебираем — строку или <code>range()</code>;</li>
        <li>двоеточие и тело с отступом, как в <code>while</code> и <code>if</code>.</li>
      </ul>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Оператор in</h3>
      <p><code>in</code> работает и без цикла: проверяет, есть ли символ или слово в строке. Ответ — <code>True</code> или <code>False</code>.</p>
      <div class="cb"><pre>
print('а' in 'мама')
print('x' in 'Python')
print('кот' in 'котлета')
</pre><div class="out">True
False
True</div></div>
      <p>Вместе с <code>for</code> получается проверка логина на запрещённые символы:</p>
      <div class="cb"><pre>
login = input('Логин: ')
bad = '=?*^$@,;:#%&amp; '
for symbol in login:
    if symbol in bad:
        print('Нельзя использовать:', symbol)
</pre></div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>Повторить n раз: range()</h3>
      <p><code>range()</code> создаёт последовательность чисел, а <code>for</code> перебирает её. Так удобно повторить действие нужное число раз:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Запись</th><th>Числа</th></tr>
        <tr><td><code>range(5)</code></td><td>0, 1, 2, 3, 4</td></tr>
        <tr><td><code>range(2, 6)</code></td><td>2, 3, 4, 5</td></tr>
        <tr><td><code>range(0, 10, 2)</code></td><td>0, 2, 4, 6, 8 — шаг 2</td></tr>
      </table></div>
      <div class="note warn"><b class="t">Как со срезами</b>Последнее число в <code>range</code> <b>не входит</b>. <code>range(5)</code> — это пять чисел, от 0 до 4.</div>
      <div class="cb"><pre>
for i in range(3):
    wish = input('Твоё желание: ')
    print('Желание', i + 1, 'записано')
print('Все желания учтены!')
</pre></div>
      <div class="note tip"><b class="t">Лайфхак</b>Люди считают с единицы, а <code>range</code> — с нуля. Для «человеческого» номера печатай <code>i + 1</code>.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>for или while?</h3>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Ситуация</th><th>Цикл</th></tr>
        <tr><td>Перебрать все символы строки</td><td><code>for</code></td></tr>
        <tr><td>Повторить известное число раз (5, n)</td><td><code>for … in range()</code></td></tr>
        <tr><td>Повторять, пока не введут «off» / правильный пароль</td><td><code>while</code></td></tr>
        <tr><td>Сколько будет шагов — заранее неизвестно</td><td><code>while</code></td></tr>
      </table></div>
      <p>Сравни два способа сделать одно и то же:</p>
      <div class="vs">
        <div class="cb"><pre>
i = 0
while i < 5:
    print(i)
    i += 1
</pre></div>
        <div class="cb"><pre>
for i in range(5):
    print(i)
</pre></div>
      </div>
      <p>С <code>for</code> короче, и нельзя забыть <code>i += 1</code>.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>break — выйти досрочно</h3>
      <p>Вход в аккаунт: даём 3 попытки. Но если пароль верный с первого раза, спрашивать ещё два раза глупо. <code>break</code> сразу <b>прерывает цикл</b>:</p>
      <div class="cb"><pre>
for attempt in range(3):
    password = input('Пароль: ')
    if password == 'kjf3g':
        print('Вход с попытки', attempt + 1)
        break
    print('Неверно')
</pre></div>
      <p>После <code>break</code> Python сразу переходит к первой строке <b>после</b> цикла. <code>break</code> работает и в <code>while</code>.</p>
      <div class="note warn"><b class="t">Осторожно</b><code>break</code> можно писать только внутри цикла. Обычно он стоит внутри <code>if</code>: «если случилось то-то — хватит».</div>
    </div>

    <div class="card wide" data-s>
      <h3><span class="n">7</span>Конструкции внутри друг друга</h3>
      <p>Циклы и условия можно вкладывать как угодно: <code>if</code> в <code>for</code>, <code>for</code> в <code>while</code>. Пример — меню с игрой «Угадай число»:</p>
      <div class="cb"><pre>
action = input('game — играть, off — выход: ')
while action != 'off':
    if action == 'game':
        for i in range(3):
            if input('Твоё число: ') == '5':
                print('Угадал! Ты выиграл билет на концерт!')
                break
    action = input('game — играть, off — выход: ')
</pre></div>
      <p>Читаем по отступам: <code>while</code> крутит меню, пока не введут «off». Внутри него <code>if</code> запускает игру, а в игре <code>for</code> даёт 3 попытки. <code>break</code> выходит только из <b>ближайшего</b> цикла — из <code>for</code>, а меню продолжает работать.</p>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>for перебирает строку</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["login = 'ax@b#'","bad = '@#$%'","count = 0","for symbol in login:","    if symbol in bad:","        count += 1","print('Запрещённых:', count)"],
        "start":"Считаем запрещённые символы в логине <code>'ax@b#'</code>. Следи за переменной <code>symbol</code> — она меняется сама.",
        "steps":[
          {"line":1,"set":{"login":"'ax@b#'"},"note":"Логин из 5 символов — значит, будет 5 шагов цикла."},
          {"line":2,"set":{"bad":"'@#$%'"},"note":"Строка с запрещёнными символами."},
          {"line":3,"set":{"count":"0"},"note":"Счётчик запрещённых."},
          {"line":4,"set":{"symbol":"'a'"},"note":"Шаг 1: <code>symbol</code> = первый символ <code>'a'</code>."},
          {"line":5,"note":"<code>'a' in '@#$%'</code>? Нет. Счётчик не трогаем."},
          {"line":4,"set":{"symbol":"'x'"},"note":"Шаг 2: следующий символ <code>'x'</code>."},
          {"line":5,"note":"<code>'x'</code> не запрещён."},
          {"line":4,"set":{"symbol":"'@'"},"note":"Шаг 3: <code>'@'</code>."},
          {"line":5,"note":"<code>'@' in '@#$%'</code>? Да!"},
          {"line":6,"set":{"count":"1"},"note":"Счётчик: 1."},
          {"line":4,"set":{"symbol":"'b'"},"note":"Шаг 4: <code>'b'</code>."},
          {"line":5,"note":"Не запрещён."},
          {"line":4,"set":{"symbol":"'#'"},"note":"Шаг 5: <code>'#'</code>."},
          {"line":5,"note":"Запрещён!"},
          {"line":6,"set":{"count":"2"},"note":"Счётчик: 2. Символы закончились — цикл завершён."},
          {"line":7,"out":"Запрещённых: 2","note":"Печатаем результат. Заметь: мы нигде не писали, сколько шагов делать, — <code>for</code> понял это сам по длине строки."}
        ]}</script>
      </div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>range() и break</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["for attempt in range(3):","    password = input('Пароль: ')","    if password == 'kitty':","        print('Вход с попытки', attempt + 1)","        break","    print('Неверно')","print('Конец программы')"],
        "start":"Три попытки ввести пароль. Пользователь введёт «cat», а потом «kitty».",
        "steps":[
          {"line":1,"set":{"attempt":"0"},"note":"<code>range(3)</code> — это 0, 1, 2. Первый шаг: <code>attempt</code> = 0."},
          {"line":2,"set":{"password":"'cat'"},"out":"⌨ Пароль: cat","note":"Первая попытка."},
          {"line":3,"note":"<code>'cat' == 'kitty'</code>? Нет — пропускаем строки 4 и 5."},
          {"line":6,"out":"Неверно","note":"Шаг цикла закончен."},
          {"line":1,"set":{"attempt":"1"},"note":"Второй шаг: <code>attempt</code> = 1."},
          {"line":2,"set":{"password":"'kitty'"},"out":"⌨ Пароль: kitty","note":"Вторая попытка."},
          {"line":3,"note":"<code>'kitty' == 'kitty'</code>? Да!"},
          {"line":4,"out":"Вход с попытки 2","note":"<code>attempt + 1</code> = 2 — «человеческий» номер попытки."},
          {"line":5,"note":"<code>break</code> — немедленно выходим из цикла. Третьей попытки (<code>attempt</code> = 2) не будет, строка 6 тоже пропускается."},
          {"line":7,"out":"Конец программы","note":"Первая строка после цикла."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <div class="errs">
        <div class="err-item"><div class="msg">TypeError: 'int' object is not iterable</div><div class="body"><p><b>Код</b><code>for i in 5:</code></p><p><b>Почему</b>Число нельзя перебирать — это не последовательность.</p><p><b>Как исправить</b><code>for i in range(5):</code></p></div></div>
        <div class="err-item"><div class="msg">SyntaxError: 'break' outside loop</div><div class="body"><p><b>Почему</b><code>break</code> стоит не внутри цикла — например, сбился отступ.</p><p><b>Как исправить</b>Сдвинь <code>break</code> внутрь <code>for</code> или <code>while</code>.</p></div></div>
        <div class="err-item"><div class="msg">Цикл сделал на один шаг меньше</div><div class="body"><p><b>Код</b><code>for i in range(1, 5):</code> — хотели 1…5</p><p><b>Почему</b>Последнее число в <code>range</code> не входит: получится 1, 2, 3, 4.</p><p><b>Как исправить</b><code>range(1, 6)</code>.</p></div></div>
        <div class="err-item"><div class="msg">Цикл не остановился после правильного ответа</div><div class="body"><p><b>Почему</b>Забыли <code>break</code>: <code>for … in range(3)</code> всегда делает все 3 шага.</p><p><b>Как исправить</b>Добавь <code>break</code> в ветку, где ответ верный.</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
for i in range(3):
    print(i)
</pre></div><div class="opts"><button data-k="a">0 1 2</button><button data-k="b">1 2 3</button><button data-k="c">0 1 2 3</button></div><div class="why"><b></b><code>range(3)</code> — это 0, 1, 2. Число 3 не входит.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Сколько раз выполнится тело цикла?</p><div class="cb"><pre>
for i in range(2, 5):
    print('шаг')
</pre></div><div class="opts"><button data-k="a">5</button><button data-k="b">3</button><button data-k="c">2</button></div><div class="why"><b></b>Числа 2, 3, 4 — три шага.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
for ch in 'abc':
    print(ch * 2)
</pre></div><div class="opts"><button data-k="a">abcabc</button><button data-k="b">a b c a b c</button><button data-k="c">aa bb cc</button></div><div class="why"><b></b>На каждом шаге берём один символ и повторяем его дважды.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
count = 0
for ch in 'banana':
    if ch == 'a':
        count += 1
print(count)
</pre></div><div class="opts"><button data-k="a">1</button><button data-k="b">3</button><button data-k="c">6</button></div><div class="why"><b></b>В «banana» три буквы <code>a</code>.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
for i in range(10):
    if i == 3:
        break
    print(i)
</pre></div><div class="opts"><button data-k="a">0 1 2</button><button data-k="b">0 1 2 3</button><button data-k="c">0 … 9</button></div><div class="why"><b></b>Когда <code>i</code> = 3, срабатывает <code>break</code> — ещё до <code>print</code>.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print('x' in 'Python')
</pre></div><div class="opts"><button data-k="a">True</button><button data-k="b">False</button><button data-k="c">-1</button></div><div class="why"><b></b>Буквы <code>x</code> в слове нет. <code>in</code> отвечает True/False, а -1 возвращает <code>find</code>.</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li><code>for x in строка:</code> — перебирает символы по одному, счётчик не нужен.</li>
        <li><code>'a' in s</code> — есть ли символ или слово в строке (True/False).</li>
        <li><code>range(n)</code> — числа 0…n-1, <code>range(a, b)</code> — a…b-1. Для повтора n раз: <code>for i in range(n):</code>.</li>
        <li>Число шагов известно — <code>for</code>; повторять, пока что-то не случится, — <code>while</code>.</li>
        <li><code>break</code> сразу выходит из ближайшего цикла.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="8" type="button"></button></div>
</section>
`);
