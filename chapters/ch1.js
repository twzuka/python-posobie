document.write(String.raw`
<section class="sec" id="ch1" data-c="1">
  <div class="sec-head">
    <div class="sec-num">01</div>
    <div><span class="code">Глава 01</span><h2>Первые программы: print и вычисления</h2><p>Что такое программа, как Python читает код и как заставить компьютер что-то напечатать и посчитать.</p></div>
  </div>
  <ul class="goals nos">
    <li>понимать, что такое алгоритм и программа</li>
    <li>знать три правила записи кода</li>
    <li>печатать текст и числа через print()</li>
    <li>считать с + − * / // % **</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Алгоритм и программа</h3>
      <p><b>Алгоритм</b> — это точная последовательность действий, которая приводит к цели. Рецепт, инструкция к шкафу из ИКЕА, маршрут до школы — всё это алгоритмы.</p>
      <div class="analogy"><span class="ico">🤖</span><div>Представь робота, который делает <b>только</b> то, что ему сказали, и ничего не додумывает. Скажешь «намажь масло», не сказав «возьми нож», — он застрянет. Компьютер именно такой.</div></div>
      <p>Поэтому в хорошем алгоритме:</p>
      <ul>
        <li>есть <b>все</b> нужные шаги;</li>
        <li>шаги стоят в <b>правильном порядке</b>;</li>
        <li>каждый шаг понятен <b>только одним способом</b>.</li>
      </ul>
      <p><b>Язык программирования</b> — язык, на котором мы даём команды компьютеру. <b>Программа</b> — это алгоритм, записанный на таком языке.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Три правила Python</h3>
      <p>Python читает код очень строго. Запомни три правила — они спасут от половины ошибок.</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Правило</th><th>Что значит</th></tr>
        <tr><td><b>Сверху вниз</b></td><td>Команды выполняются по очереди, строка за строкой.</td></tr>
        <tr><td><b>С начала строки</b></td><td>Обычная команда пишется без пробелов в начале строки.</td></tr>
        <tr><td><b>Буква в букву</b></td><td><code>print</code> и <code>Print</code> — разные слова. Лишняя или пропущенная скобка, кавычка, запятая ломает программу.</td></tr>
      </table></div>
      <div class="note tip"><b class="t">Лайфхак</b>Сломалась программа — первым делом проверь пары: каждая открытая скобка <code>(</code> и кавычка <code>'</code> должна быть закрыта.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Функция print()</h3>
      <p><b>Функция</b> — это готовый алгоритм с именем. Не нужно объяснять компьютеру, <i>как</i> рисовать буквы на экране: за нас это уже сделали и назвали <code>print</code> («печатать»).</p>
      <p>То, что пишем в скобках, называется <b>аргументом</b>. Функция печатает аргумент и переходит на новую строку.</p>
      <div class="cb"><pre>
print('Привет, мир!')
print('Я учу Python')
</pre><div class="out">Привет, мир!
Я учу Python</div></div>
      <p>Каждый <code>print</code> печатает с новой строки. Пустой <code>print()</code> печатает пустую строку — удобно, чтобы сделать отступ.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>Текст в кавычках, числа — без</h3>
      <p>Текст (его называют <b>строкой</b>) пишется в кавычках. Числа и вычисления — без кавычек. Сравни:</p>
      <div class="cb"><pre>
print('2 + 3')
print(2 + 3)
</pre><div class="out">2 + 3
5</div></div>
      <p>В кавычках Python ничего не считает, а просто печатает символы как есть. Без кавычек — вычисляет.</p>
      <p>Кавычки можно ставить одинарные <code>'…'</code> или двойные <code>"…"</code> — главное, одинаковые с обеих сторон.</p>
      <div class="note tip"><b class="t">Лайфхак</b>Одинарная кавычка <code>'</code> находится на клавише <b>Э</b> в английской раскладке. Переключай раскладку перед тем, как писать код.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>Несколько аргументов через запятую</h3>
      <p>В <code>print</code> можно передать несколько аргументов через запятую. Python напечатает их в одну строку и сам поставит между ними <b>пробел</b>.</p>
      <div class="cb"><pre>
print('Мне', 14, 'лет')
print('Итого:', 150 * 3, 'рублей')
</pre><div class="out">Мне 14 лет
Итого: 450 рублей</div></div>
      <div class="note warn"><b class="t">Осторожно</b>Пробел внутри кавычек тоже печатается. <code>print('Мне ', 14)</code> даст два пробела подряд: <code>Мне  14</code>.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>Арифметика</h3>
      <p>Python — отличный калькулятор. Вот все знаки действий:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Знак</th><th>Действие</th><th>Пример</th><th>Ответ</th></tr>
        <tr><td><code>+</code></td><td>сложение</td><td><code>7 + 2</code></td><td>9</td></tr>
        <tr><td><code>-</code></td><td>вычитание</td><td><code>7 - 2</code></td><td>5</td></tr>
        <tr><td><code>*</code></td><td>умножение</td><td><code>7 * 2</code></td><td>14</td></tr>
        <tr><td><code>/</code></td><td>деление</td><td><code>7 / 2</code></td><td>3.5</td></tr>
        <tr><td><code>//</code></td><td>целая часть от деления</td><td><code>7 // 2</code></td><td>3</td></tr>
        <tr><td><code>%</code></td><td>остаток от деления</td><td><code>7 % 2</code></td><td>1</td></tr>
        <tr><td><code>**</code></td><td>степень</td><td><code>2 ** 10</code></td><td>1024</td></tr>
      </table></div>
      <div class="note warn"><b class="t">Осторожно</b>Обычное деление <code>/</code> всегда даёт дробь: <code>10 / 2</code> → <code>5.0</code>, а не <code>5</code>. Дробная часть в Python отделяется <b>точкой</b>, а не запятой.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">7</span>// и % — как это понять</h3>
      <p>Вспомни деление с остатком из младшей школы. Разделим 17 конфет на 5 друзей:</p>
      <div class="analogy"><span class="ico">🍬</span><div>Каждому достанется по <b>3</b> конфеты — это <code>17 // 5</code>. И <b>2</b> конфеты останутся лишними — это <code>17 % 5</code>.</div></div>
      <p>Эти два знака очень часто пригождаются:</p>
      <ul>
        <li><code>n % 2</code> равно 0 — число <b>чётное</b>, равно 1 — <b>нечётное</b>;</li>
        <li><code>n % 10</code> — <b>последняя цифра</b> числа: <code>1234 % 10</code> → 4;</li>
        <li><code>n // 10</code> — число <b>без последней цифры</b>: <code>1234 // 10</code> → 123;</li>
        <li>минуты в часы: <code>135 // 60</code> → 2 часа, <code>135 % 60</code> → 15 минут.</li>
      </ul>
    </div>

    <div class="card" data-s>
      <h3><span class="n">8</span>Порядок действий</h3>
      <p>Python считает по правилам математики: сначала <code>**</code>, потом <code>* / // %</code>, потом <code>+ -</code>. Скобки меняют порядок.</p>
      <div class="cb"><pre>
print(2 + 3 * 4)
print((2 + 3) * 4)
</pre><div class="out">14
20</div></div>
      <div class="note tip"><b class="t">Лайфхак</b>Не уверен в порядке — поставь скобки. Лишние скобки ничего не испортят, а код станет понятнее.</div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Как Python выполняет программу</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
            <div hidden class="st-vars-box"></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["print('Считаем покупку')","print('Тетради:', 4 * 35)","print('Ручки:', 3 * 20)","print('Всего:', 4 * 35 + 3 * 20)"],
        "start":"Нажми «Запустить», и Python выполнит первую строку. Следи, как появляется текст на экране.",
        "steps":[
          {"line":1,"out":"Считаем покупку","note":"Строка 1. Аргумент в кавычках — это текст, Python печатает его как есть."},
          {"line":2,"out":"Тетради: 140","note":"Строка 2. Два аргумента через запятую. Сначала Python считает <code>4 * 35</code> = 140, потом печатает текст и число через пробел."},
          {"line":3,"out":"Ручки: 60","note":"Строка 3. Так же: <code>3 * 20</code> = 60."},
          {"line":4,"out":"Всего: 200","note":"Строка 4. Сначала умножения (140 и 60), потом сложение: 200. Строки кончились — программа завершена."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <p>Когда Python не может выполнить строку, он печатает сообщение об ошибке. Не пугайся: читай <b>последнюю строку</b> сообщения — там написано, что не так. А <code>line 3</code> подскажет номер строки. В разных версиях Python текст сообщения может немного отличаться.</p>
      <div class="errs">
        <div class="err-item"><div class="msg">NameError: name 'Print' is not defined</div><div class="body"><p><b>Код</b><code>Print('Привет')</code></p><p><b>Почему</b>Python не знает слова <code>Print</code> с большой буквы.</p><p><b>Как исправить</b>Пиши имена функций маленькими буквами: <code>print</code>.</p></div></div>
        <div class="err-item"><div class="msg">SyntaxError: invalid character '‘' (U+2018)</div><div class="body"><p><b>Код</b><code>print(‘Привет’)</code></p><p><b>Почему</b>Кавычки «ёлочкой» или ‘типографские’ — не кавычки для Python. Так бывает, если скопировать код из презентации или Word.</p><p><b>Как исправить</b>Сотри и напечатай кавычки заново с клавиатуры: <code>'</code> или <code>"</code>.</p></div></div>
        <div class="err-item"><div class="msg">SyntaxError: unterminated string literal</div><div class="body"><p><b>Код</b><code>print('Привет)</code></p><p><b>Почему</b>Строку открыли кавычкой, но не закрыли.</p><p><b>Как исправить</b>Добавь закрывающую кавычку: <code>print('Привет')</code>.</p></div></div>
        <div class="err-item"><div class="msg">IndentationError: unexpected indent</div><div class="body"><p><b>Код</b><code>&nbsp;&nbsp;print(5)</code></p><p><b>Почему</b>В начале строки лишние пробелы — нарушено правило «с начала строки».</p><p><b>Как исправить</b>Убери пробелы перед командой.</p></div></div>
        <div class="err-item"><div class="msg">ZeroDivisionError: division by zero</div><div class="body"><p><b>Код</b><code>print(5 / 0)</code></p><p><b>Почему</b>На ноль делить нельзя — ни в математике, ни в Python.</p><p><b>Как исправить</b>Проверь, на что делишь.</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print(7 // 2)
</pre></div><div class="opts"><button data-k="a">3.5</button><button data-k="b">3</button><button data-k="c">1</button></div><div class="why"><b></b><code>//</code> — целая часть от деления. 7 = 2 · 3 + 1, целая часть — 3. Дробь 3.5 дал бы знак <code>/</code>, а 1 — это остаток <code>%</code>.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print('5 * 2', 5 * 2)
</pre></div><div class="opts"><button data-k="a">10 10</button><button data-k="b">5 * 2 10</button><button data-k="c">5 * 25 * 2</button></div><div class="why"><b></b>Первый аргумент в кавычках — это текст, он печатается как есть. Второй — вычисление, получается 10. Между ними пробел.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print(2 + 2 * 2)
</pre></div><div class="opts"><button data-k="a">6</button><button data-k="b">8</button><button data-k="c">2 + 2 * 2</button></div><div class="why"><b></b>Сначала умножение: 2 · 2 = 4, потом сложение: 2 + 4 = 6.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print(10 / 5)
</pre></div><div class="opts"><button data-k="a">2</button><button data-k="b">0</button><button data-k="c">2.0</button></div><div class="why"><b></b>Знак <code>/</code> всегда даёт дробное число, даже если делится нацело.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print(17 % 5)
</pre></div><div class="opts"><button data-k="a">2</button><button data-k="b">3</button><button data-k="c">3.4</button></div><div class="why"><b></b><code>%</code> — остаток. 17 = 5 · 3 + 2, остаток 2.</div></div>
        <div class="quiz" data-answer="b"><p class="q">В какой строке ошибка?</p><div class="opts"><button data-k="a">print("Привет")</button><button data-k="b">Print("Привет")</button><button data-k="c">print('Привет', 'мир')</button></div><div class="why"><b></b><code>Print</code> с большой буквы Python не знает — будет <code>NameError</code>. Двойные кавычки и несколько аргументов — это нормально.</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li>Программа — это алгоритм на языке программирования. Компьютер делает только то, что написано.</li>
        <li>Код выполняется сверху вниз, пишется с начала строки, буква в букву.</li>
        <li><code>print()</code> печатает аргументы; несколько аргументов разделяются запятой и печатаются через пробел.</li>
        <li>Текст — в кавычках, числа и вычисления — без.</li>
        <li><code>/</code> даёт дробь, <code>//</code> — целую часть, <code>%</code> — остаток, <code>**</code> — степень.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="1" type="button"></button></div>
</section>
`);
