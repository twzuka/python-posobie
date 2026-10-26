document.write(String.raw`
<section class="sec" id="ch6" data-c="6">
  <div class="sec-head">
    <div class="sec-num">06</div>
    <div><span class="code">Глава 06</span><h2>Сложные условия: вложенный if и elif</h2><p>Что делать, когда вариантов больше двух: условие внутри условия и цепочка if – elif – else.</p></div>
  </div>
  <ul class="goals nos">
    <li>писать if внутри if</li>
    <li>выбирать порядок проверок</li>
    <li>использовать elif для многих вариантов</li>
    <li>понимать разницу между if-if и if-elif</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Когда вариантов много</h3>
      <p>Магазин советует товар по категории и пожеланию покупателя:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Категория</th><th>Пожелание</th><th>Совет</th></tr>
        <tr><td>молоко</td><td>фермерское</td><td>«Луговое»</td></tr>
        <tr><td>молоко</td><td>любое другое</td><td>«Простоквашкино»</td></tr>
        <tr><td>хлеб</td><td>цельнозерновой</td><td>«Колосок»</td></tr>
        <tr><td>хлеб</td><td>любое другое</td><td>«Батон №1»</td></tr>
      </table></div>
      <p>Можно написать четыре <code>if</code> с <code>and</code>:</p>
      <div class="cb"><pre>
if category == 'молоко' and wish == 'фермерское':
    print('Луговое')
if category == 'молоко' and wish != 'фермерское':
    print('Простоквашкино')
# и ещё два таких же для хлеба...
</pre></div>
      <p>Работает, но категория проверяется снова и снова, и условия получаются длинными.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Условие внутри условия</h3>
      <p>Удобнее сначала проверить категорию, а <b>уже внутри</b> — пожелание. Это <b>вложенный условный оператор</b>:</p>
      <div class="cb"><pre>
category = input('Категория: ').lower()
wish = input('Пожелание: ').lower()
if category == 'молоко':
    if wish == 'фермерское':
        print('Луговое')
    else:
        print('Простоквашкино')
if category == 'хлеб':
    if wish == 'цельнозерновой':
        print('Колосок')
    else:
        print('Батон №1')
</pre></div>
      <p>Новых правил нет — просто внутренний <code>if</code> получает <b>ещё 4 пробела</b>, всего 8.</p>
      <div class="note tip"><b class="t">Лайфхак</b>Следи за отступами: по ним видно, какой <code>else</code> к какому <code>if</code> относится. <code>else</code> всегда стоит ровно под своим <code>if</code>.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Порядок проверок важен</h3>
      <p>Задача: на завтрак советуем кашу. Для других приёмов пищи спрашиваем, хочет ли человек поесть плотно: если да — плов, иначе — котлету.</p>
      <div class="cb"><pre>
meal = input('Приём пищи: ').lower()
if meal == 'завтрак':
    print('Каша')
else:
    wish = input('Поесть плотно? ').lower()
    if wish == 'да':
        print('Плов')
    else:
        print('Котлета с пюре')
</pre></div>
      <p>Обрати внимание: второй вопрос задаётся <b>только</b> если это не завтрак. Вложенность экономит лишние вопросы и проверки.</p>
      <div class="note tip"><b class="t">Как придумать порядок</b>Сначала проверяй то, что делит варианты на большие группы (категория, приём пищи), а внутри — детали.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>Цепочка if – elif – else</h3>
      <p><code>elif</code> — сокращение от «else if», «иначе если». Он нужен, когда вариантов больше двух:</p>
      <div class="cb"><pre>
meal = input('Приём пищи: ').lower()
if meal == 'завтрак':
    print('Каша')
elif meal == 'обед':
    print('Суп')
elif meal == 'ужин':
    print('Блины')
else:
    print('Перекус: яблоко')
</pre></div>
      <p>Как это работает:</p>
      <ol>
        <li>Python проверяет условия <b>по очереди сверху вниз</b>.</li>
        <li>Выполняет ветку <b>первого</b> верного условия.</li>
        <li>Остальные ветки <b>пропускает</b>, даже если они тоже верны.</li>
        <li>Если ни одно не подошло — выполняется <code>else</code>. Его можно и не писать.</li>
      </ol>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>Порядок в elif: от строгого к мягкому</h3>
      <p>Оценка по баллам. Найди ошибку:</p>
      <div class="cb"><pre>
score = int(input('Баллы: '))
if score >= 50:
    print('Нормально')
elif score >= 90:
    print('Отлично')
</pre></div>
      <p>При 95 баллах напечатается «Нормально»: условие <code>95 &gt;= 50</code> верно, и до проверки <code>&gt;= 90</code> дело не дойдёт.</p>
      <div class="note warn"><b class="t">Правило</b>В цепочке с <code>&gt;=</code> начинай с самого большого порога: сначала 90, потом 70, потом 50.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>Несколько if или elif?</h3>
      <div class="vs">
        <div><p><b>Отдельные if</b> — проверяются <b>все</b>, может сработать несколько:</p><div class="cb"><pre>
x = 10
if x > 5:
    print('больше 5')
if x > 0:
    print('больше 0')
</pre><div class="out">больше 5
больше 0</div></div></div>
        <div><p><b>if – elif</b> — сработает <b>только одна</b> ветка:</p><div class="cb"><pre>
x = 10
if x > 5:
    print('больше 5')
elif x > 0:
    print('больше 0')
</pre><div class="out">больше 5</div></div></div>
      </div>
      <div class="note tip"><b class="t">Как выбрать</b>Варианты исключают друг друга (завтрак / обед / ужин) — бери <code>elif</code>. Проверки независимые — отдельные <code>if</code>.</div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Цепочка elif по шагам</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["score = int(input('Баллы: '))","if score >= 90:","    print('Отлично')","elif score >= 70:","    print('Хорошо')","elif score >= 50:","    print('Нормально')","else:","    print('Попробуй ещё')","print('Проверка окончена')"],
        "start":"Ученик набрал 75 баллов. Следи, какие проверки Python сделает, а какие пропустит.",
        "steps":[
          {"line":1,"set":{"score":"75"},"out":"⌨ Баллы: 75","note":"В <code>score</code> число 75."},
          {"line":2,"note":"75 &gt;= 90? <b>Нет</b>. Ветку «Отлично» пропускаем, идём к следующему <code>elif</code>."},
          {"line":4,"note":"75 &gt;= 70? <b>Да!</b> Это первое верное условие — заходим в эту ветку."},
          {"line":5,"out":"Хорошо","note":"Печатаем «Хорошо»."},
          {"line":10,"out":"Проверка окончена","note":"Ветка выполнена, поэтому оставшиеся <code>elif</code> и <code>else</code> Python пропускает целиком, хотя 75 &gt;= 50 тоже верно. Переходим к строке без отступа."}
        ]}</script>
      </div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Вложенный if по шагам</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["drink = input('Напиток: ').lower()","if drink == 'чай':","    sugar = input('С сахаром? ').lower()","    if sugar == 'да':","        print('Чай с сахаром')","    else:","        print('Чай без сахара')","else:","    print('Есть только чай')"],
        "start":"Пользователь введёт «Чай», а потом «нет». Внутренний вопрос задаётся, только если выбран чай.",
        "steps":[
          {"line":1,"set":{"drink":"'чай'"},"out":"⌨ Напиток: Чай","note":"Ввели «Чай», <code>lower()</code> сделал «чай»."},
          {"line":2,"note":"<code>drink == 'чай'</code>? Да — заходим внутрь (строки с отступом 4)."},
          {"line":3,"set":{"sugar":"'нет'"},"out":"⌨ С сахаром? нет","note":"Этот вопрос появляется только для чая."},
          {"line":4,"note":"Внутренний <code>if</code>: <code>sugar == 'да'</code>? Нет. Пропускаем строку 5."},
          {"line":6,"note":"Внутренний <code>else</code> на 4 пробела стоит под внутренним <code>if</code> — он и срабатывает."},
          {"line":7,"out":"Чай без сахара","note":"Печатаем. Внешний <code>else</code> в строке 8 относится к внешнему <code>if</code>, а тот уже сработал, — его пропускаем. Программа окончена."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <div class="errs">
        <div class="err-item"><div class="msg">SyntaxError: invalid syntax</div><div class="body"><p><b>Код</b><code>elif</code> или <code>else</code> без <code>if</code> перед ними</p><p><b>Почему</b><code>elif</code> и <code>else</code> не могут стоять сами по себе — только сразу после ветки <code>if</code>. Часто причина в том, что между ними затесалась строка без отступа.</p><p><b>Как исправить</b>Проверь, что <code>if</code>, <code>elif</code> и <code>else</code> стоят на одном уровне и между ними нет «лишних» строк.</p></div></div>
        <div class="err-item"><div class="msg">IndentationError: unindent does not match any outer indentation level</div><div class="body"><p><b>Почему</b>Отступы сбились: например, 4 пробела, потом 8, потом 6.</p><p><b>Как исправить</b>Используй отступы, кратные 4: 4, 8, 12. Не смешивай пробелы и <kbd>Tab</kbd>.</p></div></div>
        <div class="err-item"><div class="msg">Ошибки нет, но срабатывает не та ветка</div><div class="body"><p><b>Почему</b>Неправильный порядок условий в <code>elif</code> (например, <code>&gt;= 50</code> раньше <code>&gt;= 90</code>) или <code>else</code> стоит не под тем <code>if</code>.</p><p><b>Как исправить</b>Проверь порядок от строгого к мягкому и выравнивание <code>else</code>.</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
t = 15
if t > 25:
    print('жарко')
elif t > 10:
    print('тепло')
else:
    print('холодно')
</pre></div><div class="opts"><button data-k="a">жарко</button><button data-k="b">тепло</button><button data-k="c">холодно</button></div><div class="why"><b></b>15 &gt; 25 — нет, 15 &gt; 10 — да. Срабатывает вторая ветка.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
x = 10
if x > 5:
    print('A')
if x > 0:
    print('B')
</pre></div><div class="opts"><button data-k="a">A</button><button data-k="b">B</button><button data-k="c">A и B</button></div><div class="why"><b></b>Это два отдельных <code>if</code>, оба проверяются, оба верны.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
x = 10
if x > 5:
    print('A')
elif x > 0:
    print('B')
</pre></div><div class="opts"><button data-k="a">A</button><button data-k="b">B</button><button data-k="c">A и B</button></div><div class="why"><b></b>В цепочке срабатывает только первая верная ветка.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
a = 3
if a > 0:
    if a > 5:
        print('большое')
    else:
        print('маленькое')
else:
    print('не положительное')
</pre></div><div class="opts"><button data-k="a">большое</button><button data-k="b">маленькое</button><button data-k="c">не положительное</button></div><div class="why"><b></b>3 &gt; 0 — заходим внутрь. 3 &gt; 5 — нет, срабатывает внутренний <code>else</code>.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа при 95 баллах?</p><div class="cb"><pre>
if score >= 50:
    print('3')
elif score >= 70:
    print('4')
elif score >= 90:
    print('5')
</pre></div><div class="opts"><button data-k="a">5</button><button data-k="b">3 4 5</button><button data-k="c">3</button></div><div class="why"><b></b>Первое же условие верно, остальные не проверяются. Порядок нужно перевернуть.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Сколько раз можно написать elif в одной цепочке?</p><div class="opts"><button data-k="a">сколько угодно</button><button data-k="b">только один</button><button data-k="c">не больше трёх</button></div><div class="why"><b></b><code>elif</code> может быть сколько угодно, <code>if</code> — один в начале, <code>else</code> — не больше одного в конце.</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li><code>if</code> можно вложить в <code>if</code>: внутренний получает ещё 4 пробела отступа.</li>
        <li>Сначала проверяй то, что делит варианты на большие группы, а внутри — детали.</li>
        <li><code>if – elif – else</code>: условия проверяются сверху вниз, срабатывает только первая верная ветка.</li>
        <li>С порогами <code>&gt;=</code> начинай с самого большого.</li>
        <li>Независимые проверки — отдельные <code>if</code>, взаимоисключающие — <code>elif</code>.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="6" type="button"></button></div>
</section>
`);
