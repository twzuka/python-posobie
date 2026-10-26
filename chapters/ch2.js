document.write(String.raw`
<section class="sec" id="ch2" data-c="2">
  <div class="sec-head">
    <div class="sec-num">02</div>
    <div><span class="code">Глава 02</span><h2>Переменные и ввод данных</h2><p>Как программа запоминает значения, какими бывают данные и как спросить что-то у пользователя.</p></div>
  </div>
  <ul class="goals nos">
    <li>создавать и менять переменные</li>
    <li>давать понятные имена</li>
    <li>различать int, float и str</li>
    <li>получать данные через input()</li>
    <li>переводить текст в число через int()</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Зачем нужны переменные</h3>
      <p>Допустим, нужно посчитать стоимость билетов в кино. Можно написать так:</p>
      <div class="cb"><pre>
print(350 * 4)
</pre></div>
      <p>Но такая программа работает только для одной цены и одного количества. Пойдут 5 друзей — придётся переписывать код. А через полгода никто не вспомнит, что такое 350 и 4.</p>
      <p><b>Переменная</b> — это имя, за которым хранится значение. С переменными код становится понятным и подходит для любых чисел:</p>
      <div class="cb"><pre>
ticket_price = 350
friends = 4
print(ticket_price * friends)
</pre><div class="out">1400</div></div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Как создать переменную</h3>
      <div class="analogy"><span class="ico">📦</span><div>Представь коробку с наклейкой. Наклейка — <b>имя</b> переменной, а то, что лежит внутри, — её <b>значение</b>.</div></div>
      <p>Переменная создаётся <b>присваиванием</b>: имя, знак <code>=</code>, значение.</p>
      <div class="cb"><pre>
age = 14
name = 'Аня'
height = 1.62
</pre></div>
      <div class="note warn"><b class="t">Осторожно</b>Знак <code>=</code> в Python — это <b>не</b> «равно» из математики. Он значит «положи значение справа в переменную слева». Поэтому <code>age = 14</code> — правильно, а <code>14 = age</code> — ошибка.</div>
      <p>Когда переменная создана, её имя можно использовать вместо значения: <code>print(age)</code> напечатает <code>14</code>.</p>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Переменная хранит значение, а не формулу</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["price = 120","count = 3","total = price * count","price = 100","print(total)"],
        "start":"Как думаешь, что напечатает программа: 360 или 300? Проверь по шагам.",
        "steps":[
          {"line":1,"set":{"price":"120"},"note":"Создаём переменную <code>price</code> и кладём в неё 120."},
          {"line":2,"set":{"count":"3"},"note":"Создаём <code>count</code> со значением 3."},
          {"line":3,"set":{"total":"360"},"note":"Сначала Python считает правую часть: 120 · 3 = 360. В <code>total</code> кладётся готовое <b>число</b> 360, а не формула."},
          {"line":4,"set":{"price":"100"},"note":"В <code>price</code> кладём новое значение 100, старое 120 пропадает. А <code>total</code> не меняется — его уже посчитали."},
          {"line":5,"out":"360","note":"Печатаем <code>total</code> — там по-прежнему 360. Чтобы пересчитать, строку 3 нужно выполнить ещё раз."}
        ]}</script>
      </div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Новое значение из старого</h3>
      <p>Значение переменной можно менять сколько угодно раз. Часто новое значение считают из старого:</p>
      <div class="cb"><pre>
score = 10
score = score + 5
</pre></div>
      <p>Читается так: «возьми, что лежит в <code>score</code> (10), прибавь 5 и положи результат (15) обратно в <code>score</code>». Python <b>всегда сначала считает правую часть</b>, а потом кладёт результат в переменную слева.</p>
      <div class="note tip"><b class="t">Лайфхак</b>Для этого есть короткая запись:
        <div class="tbl-wrap"><table class="tbl" style="margin-bottom:0">
          <tr><th>Коротко</th><th>То же самое</th></tr>
          <tr><td><code>x += 5</code></td><td><code>x = x + 5</code></td></tr>
          <tr><td><code>x -= 2</code></td><td><code>x = x - 2</code></td></tr>
          <tr><td><code>x *= 3</code></td><td><code>x = x * 3</code></td></tr>
        </table></div>
      </div>
    </div>

    <div class="stepper" data-s>
      <div class="st-top"><h3>Считаем очки</h3><span class="st-badge">Запусти по шагам</span></div>
      <div class="st-body" style="grid-template-columns:minmax(0,1fr)">
        <div class="st-code" style="border-right:0;border-bottom:1px solid var(--code-line)"></div>
        <div class="st-side">
          <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
          <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
          <div><h4>Экран</h4><div class="st-out"></div></div>
        </div>
      </div>
      <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
      <script type="application/json">{"code":["score = 10","score = score + 5","score = score * 2","score += 1","print('Очки:', score)"],
      "start":"Попробуй сначала сам посчитать, сколько будет очков в конце.",
      "steps":[
        {"line":1,"set":{"score":"10"},"note":"В <code>score</code> кладём 10."},
        {"line":2,"set":{"score":"15"},"note":"Правая часть: 10 + 5 = 15. Кладём 15 обратно в <code>score</code>."},
        {"line":3,"set":{"score":"30"},"note":"Правая часть: 15 · 2 = 30."},
        {"line":4,"set":{"score":"31"},"note":"<code>score += 1</code> — то же, что <code>score = score + 1</code>: 30 + 1 = 31."},
        {"line":5,"out":"Очки: 31","note":"Печатаем текст и значение переменной."}
      ]}</script>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>Как назвать переменную</h3>
      <p><b>Правила</b> — без них будет ошибка:</p>
      <ul>
        <li>можно использовать буквы, цифры и знак <code>_</code>;</li>
        <li>имя <b>не может начинаться с цифры</b>;</li>
        <li>пробелы нельзя — вместо них <code>_</code>;</li>
        <li>большие и маленькие буквы различаются: <code>Age</code> и <code>age</code> — две разные переменные.</li>
      </ul>
      <p><b>Советы</b> — чтобы код был понятным:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Имя</th><th>Оценка</th></tr>
        <tr><td><code>a</code>, <code>x1</code>, <code>www</code></td><td><span class="bad">плохо</span> — непонятно, что внутри</td></tr>
        <tr><td><code>number_of_students_in_our_school</code></td><td><span class="bad">плохо</span> — слишком длинно</td></tr>
        <tr><td><code>2place</code>, <code>my age</code></td><td><span class="bad">ошибка</span> — нарушены правила</td></tr>
        <tr><td><code>ticket_price</code>, <code>username</code>, <code>total</code></td><td><span class="ok">хорошо</span> — сразу ясно, что хранится</td></tr>
      </table></div>
      <div class="note tip"><b class="t">Лайфхак</b>Пиши имена английскими словами маленькими буквами через <code>_</code>: <code>book_title</code>, <code>max_score</code>. Так принято у программистов на Python.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>Типы данных</h3>
      <p>Данные бывают разных видов — <b>типов</b>. Пока нам нужны три:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Тип</th><th>Что это</th><th>Примеры</th></tr>
        <tr><td><code>int</code></td><td>целое число</td><td><code>14</code>, <code>-3</code>, <code>0</code></td></tr>
        <tr><td><code>float</code></td><td>дробное число</td><td><code>3.5</code>, <code>0.1</code>, <code>5.0</code></td></tr>
        <tr><td><code>str</code></td><td>строка, текст</td><td><code>'Аня'</code>, <code>'42'</code>, <code>''</code></td></tr>
      </table></div>
      <p>Обрати внимание: <code>'42'</code> в кавычках — это <b>текст</b> из двух символов, а не число. Узнать тип можно функцией <code>type()</code>:</p>
      <div class="cb"><pre>
print(type(42), type(4.2), type('42'))
</pre><div class="out">&lt;class 'int'&gt; &lt;class 'float'&gt; &lt;class 'str'&gt;</div></div>
      <div class="note warn"><b class="t">Осторожно</b>Дробь пишется через <b>точку</b>. <code>print(3,5)</code> напечатает <code>3 5</code> — для Python это два разных числа через запятую.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>Что умеют числа и строки</h3>
      <p>Одни и те же знаки работают по-разному в зависимости от типа:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Код</th><th>Результат</th><th>Почему</th></tr>
        <tr><td><code>3 + 4</code></td><td>7</td><td>числа складываются</td></tr>
        <tr><td><code>'3' + '4'</code></td><td>'34'</td><td>строки склеиваются</td></tr>
        <tr><td><code>'ха' * 3</code></td><td>'хахаха'</td><td>строка повторяется</td></tr>
        <tr><td><code>'3' + 4</code></td><td class="bad">ошибка</td><td>текст и число сложить нельзя</td></tr>
      </table></div>
      <p>Это очень важно для следующей темы — ввода.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">7</span>Функция input()</h3>
      <p><code>input()</code> останавливает программу и ждёт, пока пользователь что-то напечатает и нажмёт <b>Enter</b>. Введённое можно сохранить в переменную.</p>
      <div class="cb"><pre>
name = input('Как тебя зовут? ')
print('Привет,', name)
</pre><div class="out">Как тебя зовут? Аня
Привет, Аня</div></div>
      <p>Текст в скобках — <b>подсказка</b>: его увидит пользователь, чтобы понять, что вводить.</p>
      <div class="note tip"><b class="t">Лайфхак</b>Ставь пробел в конце подсказки: <code>'Имя: '</code>. Иначе ответ прилипнет к вопросу: <code>Имя:Аня</code>.</div>
      <div class="note warn"><b class="t">Главное правило</b><code>input()</code> <b>всегда</b> возвращает строку <code>str</code>, даже если ввели цифры. Ввели <code>14</code> — получили <code>'14'</code>.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">8</span>Из текста в число: int(), float(), str()</h3>
      <p>Чтобы считать с введёнными числами, строку нужно превратить в число:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Функция</th><th>Делает</th><th>Пример</th></tr>
        <tr><td><code>int()</code></td><td>в целое число</td><td><code>int('14')</code> → 14</td></tr>
        <tr><td><code>float()</code></td><td>в дробное число</td><td><code>float('2.5')</code> → 2.5</td></tr>
        <tr><td><code>str()</code></td><td>в строку</td><td><code>str(14)</code> → '14'</td></tr>
      </table></div>
      <div class="cb"><pre>
age = input('Сколько тебе лет? ')
age = int(age)
print('Через 5 лет тебе будет', age + 5)
</pre><div class="out">Сколько тебе лет? 14
Через 5 лет тебе будет 19</div></div>
      <div class="note tip"><b class="t">Лайфхак</b>Первые две строки можно объединить в одну: <code>age = int(input('Сколько тебе лет? '))</code>. Сначала выполняется <code>input</code>, его результат сразу попадает в <code>int</code>.</div>
      <p><code>str()</code> нужна, чтобы склеить текст с числом через <code>+</code>: <code>'Мне ' + str(14) + ' лет'</code>. Но проще передать их в <code>print</code> через запятую.</p>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Почему 3 + 4 = 34</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["a = input('Первое число: ')","b = input('Второе число: ')","print(a + b)","a = int(a)","b = int(b)","print(a + b)"],
        "start":"Пользователь введёт 3 и 4. Следи за столбиком «тип» у переменных.",
        "steps":[
          {"line":1,"set":{"a":"'3'"},"out":"⌨ Первое число: 3","note":"Пользователь ввёл 3. <code>input</code> вернул <b>строку</b> <code>'3'</code> — смотри, тип <code>str</code>."},
          {"line":2,"set":{"b":"'4'"},"out":"⌨ Второе число: 4","note":"В <code>b</code> тоже строка <code>'4'</code>."},
          {"line":3,"out":"34","note":"<code>+</code> между строками их <b>склеивает</b>: <code>'3' + '4'</code> = <code>'34'</code>. Ошибки нет, но ответ неправильный!"},
          {"line":4,"set":{"a":"3"},"note":"<code>int(a)</code> превращает строку <code>'3'</code> в число 3. Тип стал <code>int</code>."},
          {"line":5,"set":{"b":"4"},"note":"То же с <code>b</code>: теперь там число 4."},
          {"line":6,"out":"7","note":"Теперь <code>+</code> между числами складывает: 3 + 4 = 7. Вот так правильно."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <div class="errs">
        <div class="err-item"><div class="msg">NameError: name 'scor' is not defined</div><div class="body"><p><b>Почему</b>Опечатка в имени, или переменную используют раньше, чем создали. Python читает сверху вниз и про неё ещё не знает.</p><p><b>Как исправить</b>Проверь имя буква в букву и что присваивание стоит <b>выше</b>.</p></div></div>
        <div class="err-item"><div class="msg">NameError: name 'Привет' is not defined</div><div class="body"><p><b>Код</b><code>print(Привет)</code></p><p><b>Почему</b>Забыли кавычки — Python решил, что <code>Привет</code> это имя переменной.</p><p><b>Как исправить</b><code>print('Привет')</code>.</p></div></div>
        <div class="err-item"><div class="msg">TypeError: can only concatenate str (not "int") to str</div><div class="body"><p><b>Код</b><code>print('Итого: ' + 5)</code> или <code>input()</code> без <code>int()</code>, а потом <code>+ 1</code></p><p><b>Почему</b>Складывают строку и число.</p><p><b>Как исправить</b>Переведи строку в число через <code>int()</code> или число в строку через <code>str()</code>. Либо передай в <code>print</code> через запятую.</p></div></div>
        <div class="err-item"><div class="msg">ValueError: invalid literal for int() with base 10: '250 руб'</div><div class="body"><p><b>Почему</b><code>int()</code> умеет переводить только строку из цифр. Буквы, пробелы, дробь <code>'3.5'</code> или пустой ввод <code>''</code> дадут эту ошибку.</p><p><b>Как исправить</b>Вводи только цифры. Для дробей используй <code>float()</code>.</p></div></div>
        <div class="err-item"><div class="msg">SyntaxError: invalid decimal literal</div><div class="body"><p><b>Код</b><code>1st = 5</code></p><p><b>Почему</b>Имя переменной начинается с цифры.</p><p><b>Как исправить</b>Назови иначе: <code>first = 5</code>.</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
a = 5
a = a * 2
a = a + 1
print(a)
</pre></div><div class="opts"><button data-k="a">5</button><button data-k="b">10</button><button data-k="c">11</button></div><div class="why"><b></b>5 · 2 = 10, потом 10 + 1 = 11. Каждый раз новое значение считается из старого.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
a = 3
b = a
a = 10
print(b)
</pre></div><div class="opts"><button data-k="a">3</button><button data-k="b">10</button><button data-k="c">ошибка</button></div><div class="why"><b></b>В строке 2 в <code>b</code> положили значение 3. Потом <code>a</code> поменяли, но <code>b</code> от этого не меняется.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
x = '7'
print(x * 2)
</pre></div><div class="opts"><button data-k="a">14</button><button data-k="b">77</button><button data-k="c">ошибка</button></div><div class="why"><b></b><code>'7'</code> — строка, а строку <code>* 2</code> повторяет два раза.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Пользователь ввёл 4. Что будет?</p><div class="cb"><pre>
n = input('Число: ')
print(n + 1)
</pre></div><div class="opts"><button data-k="a">5</button><button data-k="b">41</button><button data-k="c">ошибка</button></div><div class="why"><b></b>В <code>n</code> лежит строка <code>'4'</code>, а к строке нельзя прибавить число — будет <code>TypeError</code>. Нужно <code>int(input(...))</code>.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print(int('12') + 3)
</pre></div><div class="opts"><button data-k="a">123</button><button data-k="b">15</button><button data-k="c">ошибка</button></div><div class="why"><b></b><code>int('12')</code> превращает строку в число 12, а 12 + 3 = 15.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Какое имя переменной допустимо?</p><div class="opts"><button data-k="a">2place</button><button data-k="b">my age</button><button data-k="c">my_age</button></div><div class="why"><b></b>Имя не может начинаться с цифры и не может содержать пробел. Вместо пробела — <code>_</code>.</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li>Переменная — имя, за которым хранится значение. Создаётся присваиванием: <code>имя = значение</code>.</li>
        <li>Python сначала считает правую часть, потом кладёт результат в переменную. В переменной хранится значение, а не формула.</li>
        <li><code>x += 1</code> — коротко от <code>x = x + 1</code>.</li>
        <li>Имя: буквы, цифры, <code>_</code>, не с цифры, без пробелов. Лучше понятные английские слова.</li>
        <li>Типы: <code>int</code> — целое, <code>float</code> — дробь, <code>str</code> — текст.</li>
        <li><code>input()</code> всегда возвращает строку. Для вычислений оборачивай в <code>int()</code>.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="2" type="button"></button></div>
</section>
`);
