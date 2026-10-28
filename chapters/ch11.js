document.write(String.raw`
<section class="sec" id="ch11" data-c="11">
  <div class="sec-head">
    <div class="sec-num">11</div>
    <div><span class="code">Глава 11</span><h2>Функции внутри функций и отладка</h2><p>Как разбить программу на маленькие функции, которые вызывают друг друга, и как искать ошибки, когда программа работает неправильно.</p></div>
  </div>
  <ul class="goals nos">
    <li>вызывать одну функцию из другой</li>
    <li>делить код по правилу «одна функция — одно дело»</li>
    <li>понимать порядок вложенных вызовов</li>
    <li>искать ошибки с помощью отладчика</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Функция может вызывать функцию</h3>
      <p>Внутри своей функции можно вызывать не только <code>print</code> и <code>input</code>, но и другие свои функции. Это та же вложенность, что и у <code>if</code> с циклами.</p>
      <div class="cb"><pre>
def get_average(a, b, c):
    return (a + b + c) / 3

def get_discount(a, b, c):
    avg = get_average(a, b, c)
    if avg >= 4.5:
        return 15
    return 0

print('Скидка:', get_discount(5, 4, 5), '%')
</pre><div class="out">Скидка: 15 %</div></div>
      <p><code>get_discount</code> не считает средний балл сама — она просит об этом <code>get_average</code>. А <code>get_average</code> теперь можно использовать и в других программах: для допуска к олимпиаде, для рейтинга и так далее.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Одна функция — одно дело</h3>
      <p>Можно засунуть всю программу в одну огромную функцию. Но лучше разделить её на маленькие, у каждой — своя задача:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Функция</th><th>Задача</th></tr>
        <tr><td><code>get_data()</code></td><td>спросить данные у пользователя и вернуть их</td></tr>
        <tr><td><code>calc_…()</code></td><td>посчитать результат и вернуть его</td></tr>
        <tr><td><code>print_result()</code></td><td>красиво показать результат</td></tr>
      </table></div>
      <div class="analogy"><span class="ico">👨‍🍳</span><div>Как на кухне ресторана: один повар режет, другой жарит, третий раскладывает по тарелкам. Если невкусно — сразу понятно, у кого спросить.</div></div>
      <p>Маленькие функции проще читать, проверять и переиспользовать. А в больших проектах над разными функциями работают разные программисты.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Пример: скорость бегуна</h3>
      <p>Программа спрашивает дистанцию и время, считает скорость и даёт оценку. Каждое действие — отдельная функция:</p>
      <div class="cb"><pre>
def calc_speed(distance, seconds):
    return distance / seconds

def rate_speed(distance, seconds):
    speed = calc_speed(distance, seconds)
    if speed < 3:
        return 'спокойный темп'
    elif speed < 6:
        return 'хороший темп'
    return 'спринтер!'

distance = float(input('Дистанция (м): '))
seconds = float(input('Время (с): '))
print('Скорость:', round(calc_speed(distance, seconds), 1), 'м/с')
print('Оценка:', rate_speed(distance, seconds))
</pre><div class="out">Дистанция (м): 100
Время (с): 16
Скорость: 6.2 м/с
Оценка: спринтер!</div></div>
      <div class="note tip"><b class="t">Лайфхак</b>Для дробных чисел (1.72, 9.5) используй <code>float(input())</code> вместо <code>int(input())</code>. А <code>round(x, 1)</code> оставит один знак после точки.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>Порядок вложенных вызовов</h3>
      <p>Когда одна функция вызывает другую, Python работает как с матрёшкой:</p>
      <ol>
        <li>основная программа вызывает <code>get_discount</code> и ждёт;</li>
        <li><code>get_discount</code> вызывает <code>get_average</code> и тоже ждёт;</li>
        <li><code>get_average</code> возвращает результат в <code>get_discount</code>;</li>
        <li><code>get_discount</code> досчитывает и возвращает результат в основную программу.</li>
      </ol>
      <p>Каждая функция возвращает ответ <b>тому, кто её вызвал</b>. И у каждой — свои локальные переменные, даже если имена совпадают.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>Функция с циклом внутри</h3>
      <p>Внутри функции может быть что угодно: циклы, условия, ввод. Например, функция, которая считает пятёрки, пока не введут 0:</p>
      <div class="cb"><pre>
def count_fives():
    count = 0
    grade = int(input('Оценка (0 — стоп): '))
    while grade != 0:
        if grade == 5:
            count += 1
        grade = int(input('Оценка (0 — стоп): '))
    return count

def get_bonus():
    fives = count_fives()
    if fives >= 5:
        return 10
    elif fives >= 1:
        return 3
    return 0

print('Бонус:', get_bonus(), '%')
</pre></div>
      <div class="note warn"><b class="t">Осторожно</b><code>return count</code> стоит <b>после</b> цикла, на уровне тела функции. Если сдвинуть его внутрь <code>while</code>, функция завершится уже после первой оценки.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>Ошибка, которую Python не видит</h3>
      <p>Python сообщает об ошибках в записи кода: забыли скобку, двоеточие, кавычку. Но если ошибка в <b>логике</b>, программа спокойно выдаст неправильный ответ.</p>
      <div class="cb"><pre>
def get_average(a, b):
    return a + b / 2

print(get_average(4, 5))
</pre><div class="out">6.5</div></div>
      <p>Среднее 4 и 5 — это 4.5, а не 6.5! Ошибок нет, но ответ неверный. Деление выполняется раньше сложения: <code>4 + 5 / 2 = 4 + 2.5</code>. Правильно — со скобками: <code>(a + b) / 2</code>.</p>
      <p>В большой программе такую ошибку найти трудно — для этого есть отладчик.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">7</span>Отладчик</h3>
      <p><b>Отладчик</b> (debugger) — инструмент, который выполняет программу по шагам и показывает значения всех переменных в каждый момент. Он есть почти в любом редакторе кода.</p>
      <ol>
        <li><b>Поставь точку остановки</b> — щёлкни рядом с номером «подозрительной» строки. Программа остановится на ней.</li>
        <li><b>Запусти отладку.</b></li>
        <li><b>Шагай по строкам</b> и смотри в окно переменных: где значение стало не таким, как ты ждал, — там и ошибка.</li>
      </ol>
      <div class="note tip"><b class="t">Это ты уже умеешь!</b>Блоки «Запусти по шагам» в этом пособии работают как настоящий отладчик: подсвечивают текущую строку и показывают переменные.</div>
      <div class="note tip"><b class="t">Лайфхак без отладчика</b>Временно добавь <code>print</code> с переменными в подозрительное место: <code>print('avg =', avg)</code>. Когда найдёшь ошибку — удали.</div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Функция вызывает функцию</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["def get_average(x, y):","    return (x + y) / 2","","def get_discount(a, b):","    avg = get_average(a, b)","    if avg >= 4.5:","        return 15","    return 0","","discount = get_discount(5, 4)","print('Скидка:', discount, '%')"],
        "start":"Оценки 5 и 4. Следи, кто кого вызывает и куда возвращается ответ.",
        "steps":[
          {"line":1,"note":"Запоминаем функцию <code>get_average</code>."},
          {"line":4,"note":"Запоминаем функцию <code>get_discount</code>. Тела функций пока не выполняются."},
          {"line":10,"note":"Основная программа вызывает <code>get_discount(5, 4)</code> и ставит себя на паузу."},
          {"line":4,"set":{"a":"5","b":"4"},"note":"Внутри <code>get_discount</code>: <code>a</code> = 5, <code>b</code> = 4."},
          {"line":5,"note":"<code>get_discount</code> вызывает <code>get_average(a, b)</code> и тоже ждёт."},
          {"line":1,"set":{"x":"5","y":"4"},"note":"Внутри <code>get_average</code>: свои параметры <code>x</code> = 5, <code>y</code> = 4."},
          {"line":2,"set":{"x":null,"y":null},"note":"(5 + 4) / 2 = 4.5. <code>return</code> отдаёт 4.5 <b>в get_discount</b> — тому, кто вызвал. <code>x</code> и <code>y</code> исчезли."},
          {"line":5,"set":{"avg":"4.5"},"note":"Вернулись в <code>get_discount</code>: в <code>avg</code> попадает 4.5."},
          {"line":6,"note":"4.5 &gt;= 4.5? Да."},
          {"line":7,"set":{"a":null,"b":null,"avg":null},"note":"<code>return 15</code> — отдаём 15 в основную программу. Локальные переменные <code>get_discount</code> исчезли."},
          {"line":10,"set":{"discount":"15"},"note":"Основная программа продолжила работу: <code>discount</code> = 15."},
          {"line":11,"out":"Скидка: 15 %","note":"Печатаем результат."}
        ]}</script>
      </div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Ищем ошибку как отладчик</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["def get_area(width, height):","    area = width + height","    return area","","def get_price(width, height):","    area = get_area(width, height)","    price = area * 500 + 1000","    return price","","total = get_price(3, 2)","print('Стоимость ремонта:', total)"],
        "start":"Комната 3 × 2 метра, метр пола стоит 500, работа — 1000. Вручную: 3 · 2 · 500 + 1000 = 4000. А программа печатает 3500! Найдём ошибку по шагам, как в отладчике.",
        "steps":[
          {"line":10,"note":"Пропускаем объявления функций и сразу идём к вызову <code>get_price(3, 2)</code>."},
          {"line":5,"set":{"width":"3","height":"2"},"note":"Остановились в <code>get_price</code>. Параметры правильные: 3 и 2."},
          {"line":6,"note":"Заходим внутрь <code>get_area</code>, чтобы проверить площадь."},
          {"line":2,"set":{"area":"5"},"note":"Стоп! Площадь должна быть 3 · 2 = 6, а в переменной <b>5</b>. Ошибка найдена: в строке 2 стоит <code>+</code> вместо <code>*</code>."},
          {"line":3,"note":"Функция возвращает неправильные 5 — дальше ошибка «поедет» по всей программе."},
          {"line":7,"set":{"price":"3500"},"note":"5 · 500 + 1000 = 3500. Формула в этой строке правильная, но на вход пришла неверная площадь."},
          {"line":8,"note":"Возвращаем 3500."},
          {"line":11,"set":{"width":null,"height":null,"area":null,"price":null,"total":"3500"},"out":"Стоимость ремонта: 3500","note":"Исправляем строку 2 на <code>area = width * height</code> — и программа напечатает 4000."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <div class="errs">
        <div class="err-item"><div class="msg">TypeError: '&gt;=' not supported between instances of 'NoneType' and 'float'</div><div class="body"><p><b>Почему</b>Вспомогательная функция ничего не возвращает (забыли <code>return</code>), и другая функция получает <code>None</code>.</p><p><b>Как исправить</b>Проверь, что в каждой функции, результат которой используют, есть <code>return</code>.</p></div></div>
        <div class="err-item"><div class="msg">Печатается &lt;function get_average at 0x…&gt;</div><div class="body"><p><b>Почему</b>Функцию написали без скобок: <code>print(get_average)</code>. Это не вызов, а сама функция.</p><p><b>Как исправить</b>Добавь скобки и аргументы: <code>print(get_average(4, 5))</code>.</p></div></div>
        <div class="err-item"><div class="msg">Ответ неправильный, но ошибок нет</div><div class="body"><p><b>Почему</b>Логическая ошибка: порядок действий, не тот знак сравнения, <code>return</code> не на том уровне отступа.</p><p><b>Как исправить</b>Посчитай ответ вручную и пройди программу отладчиком по шагам: найди строку, где значение стало не таким, как ты ждал.</p></div></div>
        <div class="err-item"><div class="msg">Функция завершилась слишком рано</div><div class="body"><p><b>Почему</b><code>return</code> оказался внутри цикла и сработал на первом шаге.</p><p><b>Как исправить</b>Поставь <code>return</code> после цикла — с отступом тела функции.</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
def double(n):
    return n * 2

def quadruple(n):
    return double(double(n))

print(quadruple(3))
</pre></div><div class="opts"><button data-k="a">6</button><button data-k="b">12</button><button data-k="c">9</button></div><div class="why"><b></b>Изнутри наружу: <code>double(3)</code> = 6, <code>double(6)</code> = 12.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
def get_average(a, b):
    return a + b / 2

print(get_average(2, 4))
</pre></div><div class="opts"><button data-k="a">4.0</button><button data-k="b">3.0</button><button data-k="c">ошибка</button></div><div class="why"><b></b>Деление раньше сложения: 2 + 4 / 2 = 2 + 2.0 = 4.0. Логическая ошибка: нужно <code>(a + b) / 2</code>.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
def is_even(n):
    return n % 2 == 0

def describe(n):
    if is_even(n):
        return 'чётное'
    return 'нечётное'

print(describe(7))
</pre></div><div class="opts"><button data-k="a">чётное</button><button data-k="b">False</button><button data-k="c">нечётное</button></div><div class="why"><b></b><code>is_even(7)</code> возвращает <code>False</code>, условие в <code>describe</code> ложно, поэтому возвращается «нечётное».</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
def count_to(n):
    for i in range(n):
        return i

print(count_to(5))
</pre></div><div class="opts"><button data-k="a">4</button><button data-k="b">0</button><button data-k="c">0 1 2 3 4</button></div><div class="why"><b></b><code>return</code> внутри цикла срабатывает на первом же шаге, когда <code>i</code> = 0, и сразу завершает функцию.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Для чего нужен отладчик?</p><div class="opts"><button data-k="a">выполнять программу по шагам и смотреть переменные</button><button data-k="b">автоматически исправлять ошибки</button><button data-k="c">ускорять программу</button></div><div class="why"><b></b>Отладчик ничего сам не исправляет — он помогает <b>найти</b>, в какой строке значения становятся неправильными.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Какое деление программы на функции лучше?</p><div class="opts"><button data-k="a">всё в одной большой функции</button><button data-k="b">каждая строка — отдельная функция</button><button data-k="c">по функции на каждое действие: ввод, расчёт, вывод</button></div><div class="why"><b></b>Правило «одна функция — одно дело»: функции получаются небольшими, понятными и пригодными для других программ.</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li>Свою функцию можно вызывать внутри другой своей функции.</li>
        <li>Каждая функция возвращает результат тому, кто её вызвал, и имеет свои локальные переменные.</li>
        <li>Одна функция — одно дело: ввод, расчёт и вывод лучше разнести по разным функциям.</li>
        <li>Логические ошибки Python не видит. Чтобы их найти, посчитай ответ вручную и пройди программу отладчиком.</li>
        <li><code>float(input())</code> — для дробных чисел, <code>round(x, n)</code> — округление до n знаков.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="11" type="button"></button></div>
</section>
`);
