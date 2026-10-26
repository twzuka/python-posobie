document.write(String.raw`
<section class="sec" id="ch4" data-c="4">
  <div class="sec-head">
    <div class="sec-num">04</div>
    <div><span class="code">Глава 04</span><h2>Короткий и понятный код</h2><p>Как вкладывать одну команду в другую, где остановиться и как оставлять в коде подсказки для себя и других.</p></div>
  </div>
  <ul class="goals nos">
    <li>писать вложенные команды вроде int(input())</li>
    <li>читать их изнутри наружу</li>
    <li>не перестараться с сокращением</li>
    <li>писать комментарии</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Команда внутри команды</h3>
      <p>Ты уже писал так:</p>
      <div class="cb"><pre>
mass = input('Вес чемодана: ')
mass = int(mass)
</pre></div>
      <p>Это можно записать в одну строку — вложить <code>input</code> внутрь <code>int</code>:</p>
      <div class="cb"><pre>
mass = int(input('Вес чемодана: '))
</pre></div>
      <p>Действия те же, а кода в два раза меньше.</p>
      <div class="analogy"><span class="ico">🪆</span><div>Как матрёшка: внутри одной команды лежит другая. Python раскрывает их <b>изнутри наружу</b>: сначала самую внутреннюю, потом ту, что снаружи.</div></div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Как читать вложенную строку</h3>
      <p>Разберём <code>print(len(input('Имя: ')))</code>, если ввели «Аня»:</p>
      <ol>
        <li><code>input('Имя: ')</code> → <code>'Аня'</code></li>
        <li><code>len('Аня')</code> → <code>3</code></li>
        <li><code>print(3)</code> → на экране <code>3</code></li>
      </ol>
      <div class="note tip"><b class="t">Лайфхак</b>Запутался — найди самые внутренние скобки, мысленно замени команду на её результат и двигайся наружу. И проверь, что скобок <code>(</code> столько же, сколько <code>)</code>.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Что можно вкладывать</h3>
      <p>Внутрь другой команды можно положить только ту, что <b>возвращает значение</b> — выдаёт результат, который можно использовать дальше.</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Возвращают значение</th><th>Не возвращают</th></tr>
        <tr><td><code>input()</code> — строку<br><code>int()</code>, <code>str()</code> — новое значение<br><code>len()</code>, <code>find()</code> — число<br><code>lower()</code> — строку<br><code>5 * 3</code> — число</td><td><code>print()</code> — просто печатает и ничего не отдаёт</td></tr>
      </table></div>
      <p>Если вложить <code>print</code>, получится странное: <code>print(print('a'))</code> напечатает <code>a</code>, а потом <code>None</code> — «ничего».</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>Было — стало</h3>
      <p>Программа считает, сколько стоят обеды за отпуск:</p>
      <div class="cb"><pre>
price = input('Цена обеда: ')
price = int(price)
days = input('Сколько дней: ')
days = int(days)
print(price * days)
</pre></div>
      <p>Короче и так же понятно:</p>
      <div class="cb"><pre>
price = int(input('Цена обеда: '))
days = int(input('Сколько дней: '))
print(price * days)
</pre></div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>Знай меру</h3>
      <p>Сокращать можно до бесконечности, но код станет нечитаемым:</p>
      <div class="cb"><pre>
print('Символов:', len(input('Что понравилось? ')) + len(input('Что не понравилось? ')) + len(input('Что улучшить? ')))
</pre></div>
      <p>Это работает, но разобраться трудно даже автору. Лучше так:</p>
      <div class="cb"><pre>
good = len(input('Что понравилось? '))
bad = len(input('Что не понравилось? '))
ideas = len(input('Что улучшить? '))
print('Символов:', good + bad + ideas)
</pre></div>
      <div class="note tip"><b class="t">Правило</b>Если строку приходится читать дважды, чтобы понять, — разбей её на несколько строк с понятными именами переменных.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>Комментарии</h3>
      <p><b>Комментарий</b> — пояснение в коде, которое Python пропускает. Он нужен людям, а не компьютеру.</p>
      <p>Однострочный комментарий начинается с <code>#</code>. Всё, что правее решётки, Python не выполняет:</p>
      <div class="cb"><pre>
price = int(input('Стоимость путёвки: '))
# кэшбэк — 5% от стоимости
print('Кэшбэк:', price * 0.05)  # 0.05 это 5%
</pre></div>
      <p>Длинное пояснение в начале программы пишут в тройных кавычках:</p>
      <div class="cb"><pre>
'''
Программа считает, сколько монет по 10 и по 1 рублю
нужно, чтобы выдать сдачу.
'''
change = int(input('Сдача: '))
print(change // 10, 'монет по 10 руб.')
print(change % 10, 'монет по 1 руб.')
</pre></div>
      <div class="note tip"><b class="t">Лайфхак</b>Комментарием удобно временно «выключить» строку, не удаляя её: просто поставь <code>#</code> в начале. Во многих редакторах это делает сочетание <kbd>Ctrl</kbd> + <kbd>/</kbd>.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">7</span>Три способа сделать код понятным</h3>
      <ol>
        <li><b>Понятные имена</b>: <code>ticket_price</code> лучше, чем <code>a</code>.</li>
        <li><b>Вложения в меру</b>: не больше двух-трёх команд в одной строке.</li>
        <li><b>Комментарии</b> там, где без них непонятно, <i>зачем</i> эта строка.</li>
      </ol>
      <div class="analogy"><span class="ico">👥</span><div>Программисты почти всегда работают в команде. Твой код будут читать другие люди — и ты сам через месяц. Понятный код экономит всем время.</div></div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">8</span>Шпаргалка: всё, что знаем</h3>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Команда</th><th>Что делает</th></tr>
        <tr><td><code>print(a, b)</code></td><td>печатает через пробел</td></tr>
        <tr><td><code>input('?')</code></td><td>спрашивает, возвращает строку</td></tr>
        <tr><td><code>int()</code> / <code>float()</code> / <code>str()</code></td><td>меняют тип</td></tr>
        <tr><td><code>+ - * / // % **</code></td><td>арифметика</td></tr>
        <tr><td><code>len(s)</code></td><td>длина строки</td></tr>
        <tr><td><code>s[i]</code>, <code>s[a:b]</code></td><td>символ, срез</td></tr>
        <tr><td><code>s.find('x')</code></td><td>номер или -1</td></tr>
        <tr><td><code>s.lower()</code></td><td>маленькие буквы</td></tr>
        <tr><td><code># текст</code></td><td>комментарий</td></tr>
      </table></div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Одна строка — несколько действий</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["# узнаём возраст и считаем будущий","age = int(input('Возраст: '))","print('Через 10 лет:', age + 10)","print('Букв в имени:', len(input('Имя: ')))"],
        "start":"Пользователь введёт 14 и «Максим». Обрати внимание: в одной строке Python делает несколько шагов.",
        "steps":[
          {"line":1,"note":"Это комментарий. Python его пропускает и сразу идёт дальше."},
          {"line":2,"out":"⌨ Возраст: 14","note":"Сначала внутренняя команда: <code>input</code> вернул строку <code>'14'</code>. Переменной ещё нет."},
          {"line":2,"set":{"age":"14"},"note":"Теперь внешняя: <code>int('14')</code> → число 14. Только после этого оно попадает в <code>age</code>."},
          {"line":3,"out":"Через 10 лет: 24","note":"14 + 10 = 24. Считать можно, потому что в <code>age</code> число."},
          {"line":4,"out":"⌨ Имя: Максим","note":"Самая внутренняя — <code>input</code>: получили <code>'Максим'</code>."},
          {"line":4,"out":"Букв в имени: 6","note":"Дальше <code>len('Максим')</code> = 6, и <code>print</code> печатает результат. Переменная не понадобилась."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <div class="errs">
        <div class="err-item"><div class="msg">SyntaxError: '(' was never closed</div><div class="body"><p><b>Код</b><code>age = int(input('Возраст: ')</code></p><p><b>Почему</b>Две скобки открыли, а закрыли одну.</p><p><b>Как исправить</b>Посчитай скобки: сколько <code>(</code>, столько и <code>)</code>. Здесь нужно <code>'))</code> в конце.</p></div></div>
        <div class="err-item"><div class="msg">ValueError: invalid literal for int() with base 10</div><div class="body"><p><b>Почему</b>В <code>int(input())</code> ввели не число, например «пять» или «5 кг».</p><p><b>Как исправить</b>Вводи только цифры.</p></div></div>
        <div class="err-item"><div class="msg">SyntaxError / NameError в строке с пояснением</div><div class="body"><p><b>Код</b><code>считаем сумму</code> без решётки</p><p><b>Почему</b>Забыли <code>#</code>, и Python пытается выполнить пояснение как команду.</p><p><b>Как исправить</b>Каждый однострочный комментарий начинай с <code>#</code>.</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="b"><p class="q">Пользователь ввёл «кот». Что напечатает программа?</p><div class="cb"><pre>
print(len(input('Слово: ')))
</pre></div><div class="opts"><button data-k="a">кот</button><button data-k="b">3</button><button data-k="c">ошибка</button></div><div class="why"><b></b>Изнутри наружу: <code>input</code> → <code>'кот'</code>, <code>len</code> → 3, <code>print</code> печатает 3.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Пользователь ввёл 5. Что напечатает программа?</p><div class="cb"><pre>
n = int(input('Число: '))
print(n * 2)
</pre></div><div class="opts"><button data-k="a">10</button><button data-k="b">55</button><button data-k="c">ошибка</button></div><div class="why"><b></b>Благодаря <code>int</code> в <code>n</code> число 5, а не строка, поэтому 5 · 2 = 10.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print(str(5) + str(5))
</pre></div><div class="opts"><button data-k="a">10</button><button data-k="b">5 5</button><button data-k="c">55</button></div><div class="why"><b></b><code>str</code> превращает числа в строки, а строки <code>+</code> склеивает.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print(len('abc' + 'de'))
</pre></div><div class="opts"><button data-k="a">2</button><button data-k="b">5</button><button data-k="c">3</button></div><div class="why"><b></b>Сначала склейка: <code>'abcde'</code>, потом длина — 5.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
# print('A')
print('B')  # print('C')
</pre></div><div class="opts"><button data-k="a">B</button><button data-k="b">A B C</button><button data-k="c">B C</button></div><div class="why"><b></b>Всё правее <code>#</code> — комментарий. Выполнится только <code>print('B')</code>.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Какую команду бессмысленно вкладывать в другую?</p><div class="opts"><button data-k="a">input()</button><button data-k="b">len()</button><button data-k="c">print()</button></div><div class="why"><b></b><code>print</code> ничего не возвращает, у него нет результата, который можно передать дальше.</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li>Одну команду можно вложить в другую: <code>int(input())</code>. Выполняются изнутри наружу.</li>
        <li>Вкладывать можно команды, которые возвращают значение. <code>print</code> — нельзя.</li>
        <li>Короткий код хорош, пока он понятный. Не больше двух-трёх вложений в строке.</li>
        <li><code>#</code> — комментарий на одну строку, <code>'''…'''</code> — длинное пояснение.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="4" type="button"></button></div>
</section>
`);
