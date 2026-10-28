document.write(String.raw`
<section class="sec" id="ch10" data-c="10">
  <div class="sec-head">
    <div class="sec-num">10</div>
    <div><span class="code">Глава 10</span><h2>Свои функции: def и return</h2><p>Как «упаковать» кусок программы под своим именем, передать ему данные и получить обратно результат.</p></div>
  </div>
  <ul class="goals nos">
    <li>объявлять функцию через def</li>
    <li>различать параметры и аргументы</li>
    <li>возвращать результат через return</li>
    <li>понимать, где «живут» переменные</li>
    <li>выбирать между print и return</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Зачем нужны свои функции</h3>
      <p>Ты уже пользовался готовыми функциями: <code>print()</code>, <code>input()</code>, <code>len()</code>. <b>Функция</b> — это кусок программы с именем, который можно вызвать сколько угодно раз.</p>
      <p>Допустим, нужно печатать карточки участников турнира. Без функции код карточки придётся копировать в каждое место, где она нужна. А если поменяется название турнира — исправлять во всех копиях.</p>
      <p>Своя функция решает это: код пишется <b>один раз</b>, а вызывается по имени.</p>
      <div class="cb"><pre>
def print_card():
    print('=== ТУРНИР ПО ШАХМАТАМ ===')
    print('Игрок: ____________')
    print('Класс: ____________')

for i in range(2):
    print_card()
</pre><div class="out">=== ТУРНИР ПО ШАХМАТАМ ===
Игрок: ____________
Класс: ____________
=== ТУРНИР ПО ШАХМАТАМ ===
Игрок: ____________
Класс: ____________</div></div>
      <div class="analogy"><span class="ico">📖</span><div>Функция — как рецепт в кулинарной книге. Написал его один раз, а потом просто говоришь «приготовь блины» — и не пересказываешь рецепт заново.</div></div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Как объявить функцию</h3>
      <p>Создание функции называется <b>объявлением</b>. Для этого нужно:</p>
      <ol>
        <li>написать слово <code>def</code> (от англ. define — «определить»);</li>
        <li>придумать имя, поставить скобки и двоеточие;</li>
        <li>с отступом в 4 пробела написать <b>тело функции</b> — команды, которые она выполняет.</li>
      </ol>
      <div class="cb"><pre>
def say_hello():
    print('Привет!')
    print('Рад тебя видеть')

say_hello()
</pre><div class="out">Привет!
Рад тебя видеть</div></div>
      <div class="note warn"><b class="t">Важно понять</b>Строки с <code>def</code> только <b>запоминают</b> рецепт, но ничего не выполняют. Команды внутри сработают, только когда функцию <b>вызовут</b>: <code>say_hello()</code>. Без скобок вызова не будет.</div>
      <div class="note tip"><b class="t">Лайфхак</b>Объявляй функции в начале программы. Python читает код сверху вниз и должен узнать о функции до того, как её вызовут.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Параметры и аргументы</h3>
      <p>Чаще всего функции нужны данные: кого поприветствовать, что посчитать. Для этого в скобках пишут <b>параметры</b> — переменные, которые получат значения при вызове.</p>
      <div class="cb"><pre>
def hello(name):
    print('Привет, ' + name + '!')

hello('Аня')
hello('Максим')
</pre><div class="out">Привет, Аня!
Привет, Максим!</div></div>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Слово</th><th>Где</th><th>Что это</th></tr>
        <tr><td><b>Параметр</b></td><td><code>def hello(name):</code></td><td>«пустая ячейка» с именем</td></tr>
        <tr><td><b>Аргумент</b></td><td><code>hello('Аня')</code></td><td>конкретное значение, которое кладут в ячейку</td></tr>
      </table></div>
      <p>Параметров может быть несколько — через запятую. Аргументы передаются <b>в том же порядке</b>:</p>
      <div class="cb"><pre>
def print_card(name, grade):
    print('Игрок:', name, '| Класс:', grade)

print_card('Аня', '7Б')
</pre><div class="out">Игрок: Аня | Класс: 7Б</div></div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>return — вернуть результат</h3>
      <p>Вспомни: <code>len('кот')</code> <b>возвращает</b> число 3, и его можно положить в переменную. Своя функция тоже так умеет — с помощью <code>return</code>.</p>
      <div class="cb"><pre>
def square(n):
    return n * n

area = square(5)
print('Площадь:', area)
print(square(3) + 1)
</pre><div class="out">Площадь: 25
10</div></div>
      <p>Вызов <code>square(5)</code> как будто превращается в значение 25. Его можно сохранить, напечатать, сложить, сравнить в <code>if</code>.</p>
      <div class="note tip"><b class="t">Лайфхак</b>Функция без <code>return</code> на самом деле тоже возвращает значение — специальное «ничего» <code>None</code>. Поэтому <code>print(print('a'))</code> печатает сначала <code>a</code>, а потом <code>None</code>.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>return сразу завершает функцию</h3>
      <p>Как только Python доходит до <code>return</code>, функция заканчивается, а строки ниже не выполняются. Поэтому <code>return</code> удобно ставить в разных ветках <code>if</code>:</p>
      <div class="cb"><pre>
def get_prize(score):
    if score >= 200:
        return 'диплом I степени'
    elif score >= 100:
        return 'диплом II степени'
    return 'грамота участника'

print(get_prize(250))
print(get_prize(150))
print(get_prize(40))
</pre><div class="out">диплом I степени
диплом II степени
грамота участника</div></div>
      <p>Последняя строка сработает, только если ни одно условие не подошло, — <code>else</code> здесь не нужен.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>Где «живут» переменные</h3>
      <p>Переменные, которые созданы <b>внутри</b> функции (и её параметры), — <b>локальные</b>. Они существуют, только пока функция работает, а снаружи их не видно.</p>
      <div class="cb"><pre>
def get_average(a, b):
    result = (a + b) / 2
    return result

avg = get_average(4, 5)
print(avg)
print(result)
</pre><div class="out">4.5</div><div class="out err">NameError: name 'result' is not defined</div></div>
      <div class="analogy"><span class="ico">📝</span><div>Функция решает задачу на своём черновике. Наружу она отдаёт только ответ через <code>return</code>, а черновик с переменными выбрасывает.</div></div>
      <p>Нужен результат снаружи — верни его через <code>return</code> и сохрани в переменную при вызове.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">7</span>print или return?</h3>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th></th><th><code>print</code> в функции</th><th><code>return</code></th></tr>
        <tr><td>Что делает</td><td>показывает на экране</td><td>отдаёт значение программе</td></tr>
        <tr><td>Можно сохранить в переменную</td><td class="bad">нет (будет None)</td><td class="ok">да</td></tr>
        <tr><td>Можно использовать в if и расчётах</td><td class="bad">нет</td><td class="ok">да</td></tr>
      </table></div>
      <p>Частая ошибка — функция печатает результат, но не возвращает его:</p>
      <div class="cb"><pre>
def double(n):
    print(n * 2)

x = double(3)
print(x)
</pre><div class="out">6
None</div></div>
      <div class="note tip"><b class="t">Правило</b>Если результат функции нужен дальше в программе — используй <code>return</code>. Печатай его уже снаружи.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">8</span>Как назвать функцию</h3>
      <p>Правила те же, что для переменных: латинские буквы, цифры, <code>_</code>, не с цифры. А чтобы код читался легко:</p>
      <ul>
        <li>называй по действию, глаголом: <code>print_card</code>, <code>get_average</code>, <code>check_password</code>;</li>
        <li><code>get_…</code> — обычно для функций, которые что-то возвращают, <code>print_…</code> — для тех, что печатают;</li>
        <li>не называй функции как встроенные: <code>print</code>, <code>input</code>, <code>len</code> — иначе сломаешь оригинал.</li>
      </ul>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Как Python выполняет вызов функции</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["def get_prize(score):","    if score >= 200:","        return 'диплом I степени'","    elif score >= 100:","        return 'диплом II степени'","    return 'грамота участника'","","name = input('Имя: ')","points = int(input('Баллы: '))","prize = get_prize(points)","print(name, '—', prize)"],
        "start":"Пользователь введёт «Аня» и 150. Следи, как Python «прыгает» в функцию и обратно, а переменная score появляется и исчезает.",
        "steps":[
          {"line":1,"note":"Python видит <code>def</code> и <b>запоминает</b> функцию <code>get_prize</code>. Строки 2–6 сейчас не выполняются!"},
          {"line":8,"set":{"name":"'Аня'"},"out":"⌨ Имя: Аня","note":"Первая команда основной программы."},
          {"line":9,"set":{"points":"150"},"out":"⌨ Баллы: 150","note":"Баллы — число 150."},
          {"line":10,"note":"Вызов <code>get_prize(points)</code>. Python <b>ставит основную программу на паузу</b> и прыгает в функцию."},
          {"line":1,"set":{"score":"150"},"note":"Значение аргумента <code>points</code> (150) кладётся в параметр <code>score</code>. Это локальная переменная функции."},
          {"line":2,"note":"150 &gt;= 200? Нет."},
          {"line":4,"note":"150 &gt;= 100? Да!"},
          {"line":5,"set":{"score":null},"note":"<code>return</code> отдаёт строку <code>'диплом II степени'</code> и завершает функцию. Локальная <code>score</code> исчезла — черновик выброшен."},
          {"line":10,"set":{"prize":"'диплом II степени'"},"note":"Вернулись в основную программу ровно туда, откуда ушли. Результат вызова сохраняется в <code>prize</code>."},
          {"line":11,"out":"Аня — диплом II степени","note":"Печатаем итог. Готово!"}
        ]}</script>
      </div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Локальная переменная исчезает после return</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["def get_average(a, b):","    result = (a + b) / 2","    return result","","avg = get_average(4, 5)","print(avg)","print(result)"],
        "start":"Почему последняя строка выдаст ошибку, хотя переменная result в программе есть? Проверь по шагам.",
        "steps":[
          {"line":1,"note":"Запоминаем функцию, тело пока не выполняем."},
          {"line":5,"note":"Вызов <code>get_average(4, 5)</code> — прыгаем в функцию."},
          {"line":1,"set":{"a":"4","b":"5"},"note":"Параметры получили значения аргументов: <code>a</code> = 4, <code>b</code> = 5."},
          {"line":2,"set":{"result":"4.5"},"note":"Внутри функции создаётся локальная переменная <code>result</code>."},
          {"line":3,"set":{"a":null,"b":null,"result":null},"note":"<code>return</code> отдаёт 4.5. Функция закончилась — <code>a</code>, <code>b</code> и <code>result</code> исчезли вместе с ней."},
          {"line":5,"set":{"avg":"4.5"},"note":"Ответ сохранили в <code>avg</code> — она живёт в основной программе."},
          {"line":6,"out":"4.5","note":"Печатаем <code>avg</code> — всё хорошо."},
          {"line":7,"out":"NameError: name 'result' is not defined","note":"Ошибка! В основной программе переменной <code>result</code> нет — посмотри в таблицу. Нужно пользоваться тем, что вернул <code>return</code>, то есть <code>avg</code>."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <div class="errs">
        <div class="err-item"><div class="msg">NameError: name 'hello' is not defined</div><div class="body"><p><b>Почему</b>Функцию вызвали раньше, чем объявили, или опечатались в имени.</p><p><b>Как исправить</b>Перенеси <code>def</code> выше вызова и проверь имя буква в букву.</p></div></div>
        <div class="err-item"><div class="msg">TypeError: get_prize() missing 1 required positional argument: 'score'</div><div class="body"><p><b>Почему</b>У функции есть параметр, а при вызове аргумент не передали: <code>get_prize()</code>.</p><p><b>Как исправить</b>Передай значение в скобках: <code>get_prize(150)</code>.</p></div></div>
        <div class="err-item"><div class="msg">TypeError: get_prize() takes 1 positional argument but 2 were given</div><div class="body"><p><b>Почему</b>Аргументов передали больше, чем параметров у функции.</p><p><b>Как исправить</b>Сверь число аргументов при вызове с числом параметров в <code>def</code>.</p></div></div>
        <div class="err-item"><div class="msg">NameError: name 'result' is not defined</div><div class="body"><p><b>Почему</b>Пытаются использовать локальную переменную функции в основной программе.</p><p><b>Как исправить</b>Верни значение через <code>return</code> и сохрани его: <code>avg = get_average(4, 5)</code>.</p></div></div>
        <div class="err-item"><div class="msg">TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'</div><div class="body"><p><b>Почему</b>В функции забыли <code>return</code> (или написали <code>print</code> вместо него), и она вернула <code>None</code>.</p><p><b>Как исправить</b>Замени <code>print(...)</code> внутри функции на <code>return ...</code>.</p></div></div>
        <div class="err-item"><div class="msg">IndentationError: expected an indented block after function definition</div><div class="body"><p><b>Почему</b>Тело функции написано без отступа.</p><p><b>Как исправить</b>Все команды функции — с отступом 4 пробела после строки с <code>def</code>.</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
def greet():
    print('Привет!')
</pre></div><div class="opts"><button data-k="a">Привет!</button><button data-k="b">greet</button><button data-k="c">ничего</button></div><div class="why"><b></b>Функцию объявили, но ни разу не вызвали. Нужна строка <code>greet()</code>.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
def triple(n):
    return n * 3

print(triple(4) + 1)
</pre></div><div class="opts"><button data-k="a">12</button><button data-k="b">13</button><button data-k="c">4 + 1</button></div><div class="why"><b></b><code>triple(4)</code> возвращает 12, а 12 + 1 = 13.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
def double(n):
    print(n * 2)

x = double(5)
print(x)
</pre></div><div class="opts"><button data-k="a">10, потом None</button><button data-k="b">10, потом 10</button><button data-k="c">ошибка</button></div><div class="why"><b></b>Функция печатает 10, но ничего не возвращает, поэтому в <code>x</code> попадает <code>None</code>.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
def check(age):
    if age >= 12:
        return 'можно'
    return 'нельзя'
    print('конец')

print(check(14))
</pre></div><div class="opts"><button data-k="a">можно, потом конец</button><button data-k="b">нельзя</button><button data-k="c">можно</button></div><div class="why"><b></b>14 &gt;= 12, срабатывает первый <code>return</code> и сразу завершает функцию. До <code>print('конец')</code> дело не доходит никогда.</div></div>
        <div class="quiz" data-answer="b"><p class="q">В строке <code>def hello(name):</code> слово <code>name</code> — это…</p><div class="opts"><button data-k="a">аргумент</button><button data-k="b">параметр</button><button data-k="c">возвращаемое значение</button></div><div class="why"><b></b>В <code>def</code> пишут параметры, а значения, которые передают при вызове, — аргументы.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
def add(a, b):
    total = a + b
    return total

add(2, 3)
print(total)
</pre></div><div class="opts"><button data-k="a">ошибка NameError</button><button data-k="b">5</button><button data-k="c">None</button></div><div class="why"><b></b><code>total</code> — локальная переменная функции, снаружи её нет. К тому же результат вызова никуда не сохранили. Правильно: <code>total = add(2, 3)</code>.</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li><code>def имя(параметры):</code> — объявление функции, тело пишется с отступом. Выполняется только при вызове: <code>имя(аргументы)</code>.</li>
        <li>Параметры — «ячейки» в <code>def</code>, аргументы — значения при вызове, в том же порядке.</li>
        <li><code>return</code> возвращает результат и сразу завершает функцию. Без него функция возвращает <code>None</code>.</li>
        <li>Переменные внутри функции локальные — снаружи их не видно.</li>
        <li>Нужен результат дальше — <code>return</code>; просто показать — <code>print</code>.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="10" type="button"></button></div>
</section>
`);
