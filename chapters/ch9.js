document.write(String.raw`
<section class="sec" id="ch9" data-c="9">
  <div class="sec-head">
    <div class="sec-num">09</div>
    <div><span class="code">Глава 09</span><h2>Собираем всё вместе: вложенные конструкции</h2><p>Как из if, while и for собрать большую программу — например, чат-бота или игру с попытками — и не запутаться в отступах.</p></div>
  </div>
  <ul class="goals nos">
    <li>разбивать большую задачу на части</li>
    <li>выбирать подходящую конструкцию</li>
    <li>писать чат-бота с меню</li>
    <li>делать игру с попытками и break</li>
    <li>читать код с несколькими уровнями отступов</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Большая задача — это много маленьких</h3>
      <p>Допустим, нужен бот-помощник для игрового клуба: он советует игру, рассказывает шутку и продаёт стикеры за очки. Сразу писать код страшно — непонятно, с чего начать.</p>
      <p>Поэтому сначала составь <b>план</b>: что бот делает в целом, а что — в каждом разделе.</p>
      <div class="analogy"><span class="ico">🧩</span><div>Как сборка LEGO по инструкции: никто не собирает замок целиком сразу. Сначала башня, потом стена, потом ворота — и всё соединяется.</div></div>
      <ul>
        <li><b>Главное меню</b>: повторять, пока не выбрали «выход» → цикл <code>while</code>.</li>
        <li><b>Выбор раздела</b>: несколько вариантов → <code>if – elif – else</code>.</li>
        <li><b>Раздел «Совет игры»</b>: спросить жанр и ответить → ещё один <code>if</code> внутри.</li>
        <li><b>Раздел «Магазин»</b>: проверить, хватает ли очков → <code>if</code> с условием.</li>
      </ul>
      <div class="note tip"><b class="t">Лайфхак</b>Нарисуй блок-схему на листочке или напиши план комментариями <code>#</code> прямо в коде. Потом заменяй каждый комментарий на настоящие команды.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Шпаргалка: какую конструкцию выбрать</h3>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Если в задаче…</th><th>Бери</th></tr>
        <tr><td>«если …, то …, иначе …»</td><td><code>if – else</code></td></tr>
        <tr><td>три и больше вариантов ответа</td><td><code>if – elif – else</code></td></tr>
        <tr><td>второй вопрос нужен только в одном случае</td><td>вложенный <code>if</code></td></tr>
        <tr><td>«повторять, пока не…» (выход, правильный пароль)</td><td><code>while</code></td></tr>
        <tr><td>«ровно N раз», «3 попытки»</td><td><code>for … in range(N)</code></td></tr>
        <tr><td>проверить каждый символ строки</td><td><code>for символ in строка</code></td></tr>
        <tr><td>досрочно закончить цикл (угадал, ввёл верно)</td><td><code>break</code></td></tr>
        <tr><td>посчитать, сколько раз что-то случилось</td><td>счётчик <code>count += 1</code></td></tr>
      </table></div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Шаблон «чат-бот»</h3>
      <p>Почти любой текстовый бот устроен одинаково: <code>while</code> крутится, пока не введут слово выхода, а внутри <code>if – elif – else</code> выбирает ответ.</p>
      <div class="cb"><pre>
question = input('Спроси меня (стоп — выход): ').lower()
while question != 'стоп':
    if question == 'как дела?':
        print('Отлично, учу Python!')
    elif question == 'что ты умеешь?':
        print('Болтать и рассказывать шутки')
    else:
        print('Пока не знаю, что ответить')
    question = input('Спроси меня (стоп — выход): ').lower()
print('Пока!')
</pre></div>
      <p>Чтобы научить бота новому ответу, достаточно добавить ещё один <code>elif</code>. А <code>else</code> ловит всё, что бот не понял.</p>
      <div class="note warn"><b class="t">Осторожно</b>Последняя строка цикла — новый <code>input</code>. Без неё бот получит один вопрос и будет отвечать на него бесконечно.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>Бот понимает «Стоп», «СТОП» и «стоп»</h3>
      <p>Пользователи пишут как угодно: с большой буквы, капсом. Если сравнивать как есть, <code>'Стоп' != 'стоп'</code>, и бот не остановится.</p>
      <p>Решение — сразу делать ответ маленькими буквами, а в условиях писать слова тоже маленькими:</p>
      <div class="cb"><pre>
answer = input('Продолжить? ').lower()
</pre></div>
      <p>Можно разрешить несколько слов для выхода — через <code>and</code>:</p>
      <div class="cb"><pre>
while answer != 'стоп' and answer != 'выход':
</pre></div>
      <p>Читается так: «повторяй, пока ответ — <b>не</b> “стоп” <b>и</b> <b>не</b> “выход”». Как только введут любое из двух слов, условие станет ложным.</p>
      <div class="note warn"><b class="t">Частая ошибка</b>Написать здесь <code>or</code>. Условие <code>answer != 'стоп' or answer != 'выход'</code> верно всегда (ответ не может быть сразу обоими словами), и цикл станет бесконечным.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>Пустой ввод</h3>
      <p>Если пользователь просто нажал <kbd>Enter</kbd>, <code>input</code> вернёт пустую строку <code>''</code> — в ней ноль символов.</p>
      <div class="cb"><pre>
name = input('Как тебя зовут? ')
if name == '':
    print('Ты ничего не написал 🙂')
else:
    print('Привет,', name)
</pre></div>
      <div class="note tip"><b class="t">Лайфхак</b>В чат-боте проверку на пустую строку удобно поставить отдельным <code>elif question == '':</code> — так бот вежливо попросит написать хоть что-нибудь.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>Шаблон «N попыток»</h3>
      <p>Когда попыток ограниченное число, бери <code>for … in range(N)</code>. Угадал раньше — <code>break</code>, чтобы не спрашивать дальше.</p>
      <div class="cb"><pre>
secret = '7'
for attempt in range(3):
    guess = input('Твоё число: ')
    if guess == secret:
        print('Угадал с попытки', attempt + 1)
        break
    print('Не угадал')
print('Игра окончена')
</pre></div>
      <p>Если все 3 попытки неудачные, цикл закончится сам, и программа перейдёт к строке после него.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">7</span>Вложенный if или and?</h3>
      <p>Игра «Угадай два числа»: нужно сообщить, угаданы оба, только первое, только второе или ни одного. Это можно записать двумя способами — оба правильные.</p>
      <div class="vs">
        <div><p><b>Через and</b> — каждое условие описывает ситуацию целиком:</p><div class="cb"><pre>
if g1 == n1 and g2 == n2:
    print('Оба!')
elif g1 == n1 and g2 != n2:
    print('Первое!')
elif g1 != n1 and g2 == n2:
    print('Второе!')
else:
    print('Мимо!')
</pre></div></div>
        <div><p><b>Через вложенный if</b> — сначала первое число, потом второе:</p><div class="cb"><pre>
if g1 == n1:
    if g2 == n2:
        print('Оба!')
    else:
        print('Первое!')
else:
    if g2 == n2:
        print('Второе!')
    else:
        print('Мимо!')
</pre></div></div>
      </div>
      <div class="note tip"><b class="t">Как выбрать</b>Если условия короткие — удобнее <code>and</code>. Если внутри каждой ветки ещё много действий (например, <code>break</code> или новый вопрос) — удобнее вложенный <code>if</code>.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">8</span>Меню с разделами</h3>
      <p>Внутри раздела меню может быть своё маленькое меню. Пример — магазин очков:</p>
      <div class="cb"><pre>
points = 100
choice = input('1 — магазин, 2 — бонус, 3 — выход: ')
while choice != '3':
    if choice == '1':
        item = input('1 — стикер (50), 2 — скин (100): ')
        if item == '1' and points >= 50:
            points -= 50
            print('Куплен стикер!')
        elif item == '2' and points >= 100:
            points -= 100
            print('Куплен скин!')
        else:
            print('Не хватает очков или нет такого товара')
    elif choice == '2':
        points += 5
        print('Бонус +5!')
    print('Очков:', points)
    choice = input('1 — магазин, 2 — бонус, 3 — выход: ')
</pre></div>
      <p>Здесь три уровня: цикл меню → выбор раздела → выбор товара. Каждый уровень — ещё 4 пробела отступа.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">9</span>Как читать код с отступами</h3>
      <p>Отступ показывает, <b>внутри чего</b> стоит строка. Смотри на начало строки:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Отступ</th><th>Где находится строка</th></tr>
        <tr><td>0 пробелов</td><td>основная программа — выполняется всегда</td></tr>
        <tr><td>4 пробела</td><td>внутри первого <code>while</code> / <code>for</code> / <code>if</code></td></tr>
        <tr><td>8 пробелов</td><td>внутри второго уровня</td></tr>
        <tr><td>12 пробелов</td><td>внутри третьего уровня</td></tr>
      </table></div>
      <div class="note tip"><b class="t">Лайфхак</b>Чтобы понять, к какому <code>if</code> относится <code>else</code>, веди пальцем по экрану <b>строго вверх</b> от <code>else</code>: первый <code>if</code> на той же вертикали — его пара.</div>
      <div class="note warn"><b class="t">Осторожно</b>Больше 3–4 уровней — сигнал, что код трудно читать. Попробуй упростить условие через <code>and</code> или вынести часть в отдельную переменную.</div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Чат-бот по шагам</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["question = input('Спроси меня (стоп — выход): ').lower()","while question != 'стоп':","    if question == 'как дела?':","        print('Отлично, учу Python!')","    elif question == '':","        print('Ты ничего не написал 🙂')","    else:","        print('Пока не знаю, что ответить')","    question = input('Спроси меня (стоп — выход): ').lower()","print('Пока!')"],
        "start":"Пользователь напишет «Как дела?», потом просто нажмёт Enter, потом напишет «СТОП». Следи, как цикл возвращается к строке 2.",
        "steps":[
          {"line":1,"set":{"question":"'как дела?'"},"out":"⌨ Спроси меня (стоп — выход): Как дела?","note":"Ввели «Как дела?», <code>.lower()</code> сразу сделал все буквы маленькими."},
          {"line":2,"note":"<code>'как дела?' != 'стоп'</code>? Да — заходим в цикл."},
          {"line":3,"note":"Проверяем первый вариант: совпадает!"},
          {"line":4,"out":"Отлично, учу Python!","note":"Бот отвечает. Остальные <code>elif</code> и <code>else</code> пропускаются."},
          {"line":9,"set":{"question":"''"},"out":"⌨ Спроси меня (стоп — выход): ","note":"Последняя строка цикла: новый вопрос. Пользователь просто нажал Enter — получили пустую строку <code>''</code>."},
          {"line":2,"note":"Возвращаемся к условию: <code>'' != 'стоп'</code>? Да — ещё один шаг цикла."},
          {"line":3,"note":"<code>'' == 'как дела?'</code>? Нет, идём дальше."},
          {"line":5,"note":"<code>'' == ''</code>? Да! Это пустой ввод."},
          {"line":6,"out":"Ты ничего не написал 🙂","note":"Бот вежливо просит написать хоть что-нибудь."},
          {"line":9,"set":{"question":"'стоп'"},"out":"⌨ Спроси меня (стоп — выход): СТОП","note":"Пользователь написал «СТОП» капсом, а <code>.lower()</code> превратил его в <code>'стоп'</code>."},
          {"line":2,"note":"<code>'стоп' != 'стоп'</code>? Нет — условие ложно, выходим из цикла. Без <code>.lower()</code> бот бы не остановился!"},
          {"line":10,"out":"Пока!","note":"Первая строка после цикла. Программа завершена."}
        ]}</script>
      </div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Угадай два числа: три уровня вложенности</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["num1 = '3'","num2 = '8'","for attempt in range(3):","    guess1 = input('Первое число: ')","    guess2 = input('Второе число: ')","    if guess1 == num1:","        if guess2 == num2:","            print('Победа!')","            break","        else:","            print('Первое угадано!')","    else:","        if guess2 == num2:","            print('Второе угадано!')","        else:","            print('Мимо!')","print('Игра окончена')"],
        "start":"Загаданы числа 3 и 8. Игрок сначала введёт 3 и 5, потом 3 и 8. Смотри на отступы: for → if → if.",
        "steps":[
          {"line":1,"set":{"num1":"'3'"},"note":"Первое загаданное число. Храним как строку, потому что <code>input</code> тоже вернёт строку."},
          {"line":2,"set":{"num2":"'8'"},"note":"Второе загаданное число."},
          {"line":3,"set":{"attempt":"0"},"note":"Попытка 1 (<code>attempt</code> = 0). Дальше всё с отступом 4 — внутри цикла."},
          {"line":4,"set":{"guess1":"'3'"},"out":"⌨ Первое число: 3","note":"Игрок ввёл 3."},
          {"line":5,"set":{"guess2":"'5'"},"out":"⌨ Второе число: 5","note":"И 5."},
          {"line":6,"note":"Уровень 2: <code>'3' == '3'</code>? Да — заходим в ветку с отступом 8."},
          {"line":7,"note":"Уровень 3: <code>'5' == '8'</code>? Нет — пропускаем строки 8–9."},
          {"line":10,"note":"Срабатывает <code>else</code> на 8 пробелов — пара внутреннего <code>if</code> из строки 7."},
          {"line":11,"out":"Первое угадано!","note":"Подсказка игроку. Внешний <code>else</code> (строка 12) пропускаем — он пара <code>if</code> из строки 6, а тот уже сработал."},
          {"line":3,"set":{"attempt":"1"},"note":"Попытка 2 (<code>attempt</code> = 1)."},
          {"line":4,"set":{"guess1":"'3'"},"out":"⌨ Первое число: 3","note":"Снова 3."},
          {"line":5,"set":{"guess2":"'8'"},"out":"⌨ Второе число: 8","note":"И 8."},
          {"line":6,"note":"<code>'3' == '3'</code>? Да."},
          {"line":7,"note":"<code>'8' == '8'</code>? Да!"},
          {"line":8,"out":"Победа!","note":"Оба числа угаданы."},
          {"line":9,"note":"<code>break</code> — сразу выходим из цикла <code>for</code>. Третьей попытки не будет."},
          {"line":17,"out":"Игра окончена","note":"Строка без отступа — после цикла."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <div class="errs">
        <div class="err-item"><div class="msg">Бот отвечает на один вопрос бесконечно</div><div class="body"><p><b>Почему</b>Внутри <code>while</code> нет нового <code>input</code>, и переменная с вопросом не меняется.</p><p><b>Как исправить</b>Последней строкой тела цикла снова спроси пользователя — с тем же отступом, что и <code>if</code>.</p></div></div>
        <div class="err-item"><div class="msg">Бот не останавливается, хотя ввели «Стоп»</div><div class="body"><p><b>Почему</b>Сравнение чувствительно к большим буквам, или условие выхода записано через <code>or</code>.</p><p><b>Как исправить</b>Добавь <code>.lower()</code> к каждому <code>input</code>, а несколько слов выхода соединяй через <code>and</code>.</p></div></div>
        <div class="err-item"><div class="msg">Цикл сделал только один шаг</div><div class="body"><p><b>Код</b><code>break</code> стоит с отступом цикла, а не внутри <code>if</code></p><p><b>Почему</b>Тогда <code>break</code> срабатывает на каждом шаге, а не только при победе.</p><p><b>Как исправить</b>Сдвинь <code>break</code> на уровень вглубь — под <code>print('Победа!')</code>.</p></div></div>
        <div class="err-item"><div class="msg">Срабатывает не тот else</div><div class="body"><p><b>Почему</b><code>else</code> записан с неправильным отступом и стал парой другого <code>if</code>. Python не выдаёт ошибку — просто программа ведёт себя странно.</p><p><b>Как исправить</b>Проверь вертикаль: <code>else</code> должен стоять ровно под своим <code>if</code>.</p></div></div>
        <div class="err-item"><div class="msg">IndentationError: expected an indented block</div><div class="body"><p><b>Почему</b>После строки с двоеточием (<code>while</code>, <code>for</code>, <code>if</code>, <code>else</code>) следующая строка без дополнительного отступа.</p><p><b>Как исправить</b>Каждое двоеточие — это «дальше +4 пробела».</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
x = 12
if x > 10:
    if x % 2 == 0:
        print('A')
    else:
        print('B')
else:
    print('C')
</pre></div><div class="opts"><button data-k="a">A</button><button data-k="b">B</button><button data-k="c">C</button></div><div class="why"><b></b>12 &gt; 10 — заходим внутрь. 12 % 2 = 0 — число чётное, печатаем A.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
for i in range(3):
    print(i)
    break
</pre></div><div class="opts"><button data-k="a">0</button><button data-k="b">0 1 2</button><button data-k="c">ничего</button></div><div class="why"><b></b><code>break</code> стоит прямо в теле цикла, без <code>if</code>, поэтому цикл обрывается после первого же шага.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
for i in range(3):
    if i == 1:
        print('стоп')
    break
print('конец')
</pre></div><div class="opts"><button data-k="a">стоп конец</button><button data-k="b">стоп</button><button data-k="c">конец</button></div><div class="why"><b></b><code>break</code> стоит с отступом цикла, а не внутри <code>if</code>. На первом шаге <code>i</code> = 0, условие ложно, и сразу срабатывает <code>break</code>. До <code>i</code> = 1 дело не доходит.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
count = 0
for ch in 'кот и кит':
    if ch != ' ':
        if ch == 'к':
            count += 1
print(count)
</pre></div><div class="opts"><button data-k="a">1</button><button data-k="b">2</button><button data-k="c">9</button></div><div class="why"><b></b>Буква «к» встречается два раза: в «кот» и «кит».</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
answer = 'OFF'
print(answer.lower() == 'off')
</pre></div><div class="opts"><button data-k="a">True</button><button data-k="b">False</button><button data-k="c">off</button></div><div class="why"><b></b><code>'OFF'.lower()</code> — это <code>'off'</code>, а <code>'off' == 'off'</code> — True.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Нужно спрашивать пароль, пока не введут правильный. Какую конструкцию взять?</p><div class="opts"><button data-k="a">while</button><button data-k="b">for … in range(3)</button><button data-k="c">if – else</button></div><div class="why"><b></b>Сколько будет попыток — неизвестно, поэтому нужен <code>while</code>. Если бы попыток было ровно 3, подошёл бы <code>for</code>.</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li>Большую задачу сначала разбей на части: меню, разделы, действия. План можно написать комментариями.</li>
        <li>Чат-бот: <code>while</code> до слова выхода, внутри <code>if – elif – else</code>, в конце тела — новый <code>input</code>.</li>
        <li><code>.lower()</code> помогает понимать «Стоп» и «СТОП»; несколько слов выхода — через <code>and</code>.</li>
        <li>Ограниченное число попыток — <code>for … in range(N)</code> и <code>break</code> при успехе.</li>
        <li>Отступ показывает уровень вложенности; <code>else</code> стоит ровно под своим <code>if</code>.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="9" type="button"></button></div>
</section>
`);
