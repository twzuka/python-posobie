document.write(String.raw`
<section class="sec" id="ch12" data-c="12">
  <div class="sec-head">
    <div class="sec-num">12</div>
    <div><span class="code">Глава 12</span><h2>Модули random и time</h2><p>Где лежат готовые инструменты Python, как их подключить и как работать со случайными числами и временем.</p></div>
  </div>
  <ul class="goals nos">
    <li>знать, что такое стандартная библиотека и модуль</li>
    <li>подключать модуль тремя способами</li>
    <li>получать случайные числа</li>
    <li>засекать время и делать паузы</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Стандартная библиотека и модули</h3>
      <p>Вместе с Python устанавливается огромный набор готовых инструментов — <b>стандартная библиотека</b>.</p>
      <ul>
        <li>Самые нужные команды (<code>print</code>, <code>input</code>, <code>len</code>, <code>round</code>) — <b>встроенные</b>, они работают сразу.</li>
        <li>Остальные разложены по отдельным файлам — <b>модулям</b>. Их нужно подключить перед использованием.</li>
      </ul>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Модуль</th><th>Для чего</th></tr>
        <tr><td><code>random</code></td><td>случайные числа</td></tr>
        <tr><td><code>time</code></td><td>время, паузы, секундомер</td></tr>
        <tr><td><code>turtle</code></td><td>рисование черепашкой</td></tr>
        <tr><td><code>os</code></td><td>работа с файлами и системой компьютера</td></tr>
      </table></div>
      <div class="analogy"><span class="ico">🧰</span><div>Как ящик с инструментами: молоток всегда под рукой, а дрель лежит в отдельном чемоданчике — достаёшь, когда понадобится.</div></div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Как подключить модуль</h3>
      <p>Модули подключают в самом начале программы. Есть три способа:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Подключение</th><th>Вызов</th><th>Что значит</th></tr>
        <tr><td><code>import random</code></td><td><code>random.randint(1, 6)</code></td><td>весь модуль; перед функцией пишем имя модуля и точку</td></tr>
        <tr><td><code>from random import randint</code></td><td><code>randint(1, 6)</code></td><td>одна функция; вызываем просто по имени</td></tr>
        <tr><td><code>from random import *</code></td><td><code>randint(1, 6)</code></td><td>все функции модуля сразу</td></tr>
      </table></div>
      <div class="note tip"><b class="t">Какой выбрать</b><code>import random</code> — сразу видно, откуда функция. <code>from … import randint</code> — короче, если функция нужна часто. Способ со звёздочкой лучше не использовать: непонятно, откуда что взялось.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Случайные числа: random</h3>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Функция</th><th>Что возвращает</th></tr>
        <tr><td><code>randint(a, b)</code></td><td>случайное целое число от a до b <b>включительно</b></td></tr>
        <tr><td><code>random()</code></td><td>случайную дробь от 0 до 1 (1 не входит)</td></tr>
      </table></div>
      <div class="cb"><pre>
from random import randint

dice = randint(1, 6)
print('На кубике выпало:', dice)
</pre><div class="out">На кубике выпало: 4</div></div>
      <p>При каждом запуске число будет разным — у тебя может выпасть не 4.</p>
      <div class="note warn"><b class="t">Не перепутай</b>В <code>randint(1, 6)</code> число 6 <b>может</b> выпасть. А в <code>range(1, 6)</code> последнее число не входит. Это разные функции с разными правилами.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>Где пригодится random</h3>
      <p><b>Жеребьёвка</b> — случайная пара команд:</p>
      <div class="cb"><pre>
from random import randint

total = int(input('Сколько команд? '))
team1 = randint(1, total)
team2 = randint(1, total)
print('Играют команды', team1, 'и', team2)
</pre></div>
      <p><b>Распределение по командам</b> — каждому игроку случайная команда 1 или 2:</p>
      <div class="cb"><pre>
from random import randint

name = input('Имя игрока (off — стоп): ')
while name != 'off':
    print(name, '→ команда', randint(1, 2))
    name = input('Имя игрока (off — стоп): ')
</pre></div>
      <div class="note tip"><b class="t">Лайфхак</b>Случайное событие с шансом 30%: <code>if random() &lt; 0.3:</code> — условие будет верно примерно в 3 случаях из 10.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>Время: time</h3>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Функция</th><th>Что делает</th></tr>
        <tr><td><code>time()</code></td><td>сколько секунд прошло с 1 января 1970 года — огромное дробное число</td></tr>
        <tr><td><code>sleep(сек)</code></td><td>ставит программу на паузу на указанное число секунд</td></tr>
        <tr><td><code>round(x, n)</code></td><td>округляет до n знаков после точки (встроенная, подключать не нужно)</td></tr>
      </table></div>
      <p>Само число из <code>time()</code> бесполезно, но <b>разница</b> двух таких чисел — это сколько секунд прошло между ними:</p>
      <div class="cb"><pre>
from time import time, sleep

start = time()
sleep(2)
end = time()
print('Прошло:', round(end - start, 2), 'с')
</pre><div class="out">Прошло: 2.0 с</div></div>
      <div class="note tip"><b class="t">Лайфхак</b>Подключить сразу несколько функций можно через запятую: <code>from time import time, sleep</code>.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>Секундомер и обратный отсчёт</h3>
      <p><b>Секундомер:</b> засекаем время в момент старта и в момент остановки.</p>
      <div class="cb"><pre>
from time import time

input('Нажми Enter, чтобы начать')
start = time()
input('Нажми Enter, чтобы остановить')
end = time()
print('Время:', round(end - start, 1), 'с')
</pre></div>
      <p><b>Обратный отсчёт</b> с паузой в секунду:</p>
      <div class="cb"><pre>
from time import sleep

for i in range(3):
    print(3 - i)
    sleep(1)
print('Старт!')
</pre><div class="out">3
2
1
Старт!</div></div>
      <div class="note tip"><b class="t">Лайфхак</b>Перевести секунды в минуты — <code>seconds / 60</code>, а целые минуты — <code>int(seconds / 60)</code> или <code>seconds // 60</code>.</div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Игра «Угадай число» с randint</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["from random import randint","","secret = randint(1, 10)","guess = int(input('Угадай число от 1 до 10: '))","while guess != secret:","    if guess < secret:","        print('Больше!')","    else:","        print('Меньше!')","    guess = int(input('Ещё раз: '))","print('Угадал!')"],
        "start":"Компьютер загадывает случайное число. Допустим, выпало 7. Игрок пробует 5, потом 8, потом 7.",
        "steps":[
          {"line":1,"note":"Подключаем функцию <code>randint</code> из модуля <code>random</code>."},
          {"line":3,"set":{"secret":"7"},"note":"<code>randint(1, 10)</code> вернула случайное число — в этот раз 7. При другом запуске будет другое."},
          {"line":4,"set":{"guess":"5"},"out":"⌨ Угадай число от 1 до 10: 5","note":"Первая попытка — 5."},
          {"line":5,"note":"5 != 7? Да — в цикл."},
          {"line":6,"note":"5 &lt; 7? Да."},
          {"line":7,"out":"Больше!","note":"Подсказка: загаданное число больше."},
          {"line":10,"set":{"guess":"8"},"out":"⌨ Ещё раз: 8","note":"Новая попытка — 8."},
          {"line":5,"note":"8 != 7? Да — ещё шаг."},
          {"line":6,"note":"8 &lt; 7? Нет — идём в <code>else</code>."},
          {"line":9,"out":"Меньше!","note":"Подсказка: загаданное меньше."},
          {"line":10,"set":{"guess":"7"},"out":"⌨ Ещё раз: 7","note":"Третья попытка — 7."},
          {"line":5,"note":"7 != 7? Нет — выходим из цикла."},
          {"line":11,"out":"Угадал!","note":"Победа!"}
        ]}</script>
      </div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Секундомер с time()</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["from time import time","","command = input('1 — старт: ')","while command != '1':","    command = input('Ошибка! Введи 1: ')","start = time()","input('Enter — стоп')","end = time()","print('Время:', round(end - start, 2), 'с')"],
        "start":"Пловец стартует, а через 12,5 секунды тренер останавливает секундомер. Числа из time() огромные — для примера возьмём короткие.",
        "steps":[
          {"line":1,"note":"Подключаем функцию <code>time</code> из модуля <code>time</code>."},
          {"line":3,"set":{"command":"'2'"},"out":"⌨ 1 — старт: 2","note":"Тренер случайно ввёл 2."},
          {"line":4,"note":"'2' != '1'? Да — просим ещё раз."},
          {"line":5,"set":{"command":"'1'"},"out":"⌨ Ошибка! Введи 1: 1","note":"Теперь правильно."},
          {"line":4,"note":"'1' != '1'? Нет — выходим из цикла."},
          {"line":6,"set":{"start":"1000.25"},"note":"Засекаем момент старта. На самом деле <code>time()</code> вернёт что-то вроде 1761650000.25, но важна только разница."},
          {"line":7,"out":"⌨ Enter — стоп","note":"Программа ждёт, пока тренер нажмёт Enter. В это время пловец плывёт."},
          {"line":8,"set":{"end":"1012.75"},"note":"Засекаем момент остановки — на 12,5 секунды позже."},
          {"line":9,"out":"Время: 12.5 с","note":"1012.75 − 1000.25 = 12.5 секунды. <code>round</code> оставил 2 знака после точки."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <div class="errs">
        <div class="err-item"><div class="msg">NameError: name 'randint' is not defined</div><div class="body"><p><b>Почему</b>Модуль не подключили, или подключили через <code>import random</code>, а вызывают без имени модуля.</p><p><b>Как исправить</b>Добавь в начало <code>from random import randint</code> или пиши <code>random.randint(…)</code>.</p></div></div>
        <div class="err-item"><div class="msg">NameError: name 'random' is not defined</div><div class="body"><p><b>Почему</b>Подключили одну функцию (<code>from random import randint</code>), а вызывают через точку: <code>random.randint</code>.</p><p><b>Как исправить</b>Пиши просто <code>randint(…)</code> или подключи весь модуль: <code>import random</code>.</p></div></div>
        <div class="err-item"><div class="msg">AttributeError: module 'random' has no attribute 'randInt'</div><div class="body"><p><b>Почему</b>Опечатка в имени функции — большие и маленькие буквы важны.</p><p><b>Как исправить</b><code>randint</code> — все буквы маленькие.</p></div></div>
        <div class="err-item"><div class="msg">ModuleNotFoundError: No module named 'Random'</div><div class="body"><p><b>Почему</b>Опечатка в названии модуля.</p><p><b>Как исправить</b>Названия модулей пишутся маленькими буквами: <code>random</code>, <code>time</code>.</p></div></div>
        <div class="err-item"><div class="msg">AttributeError: module 'random' has no attribute 'randint'</div><div class="body"><p><b>Почему</b>Свой файл назвали <code>random.py</code> (или <code>time.py</code>). Python подключает его вместо настоящего модуля.</p><p><b>Как исправить</b>Переименуй файл, например в <code>dice_game.py</code>.</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="c"><p class="q">Какие числа может вернуть <code>randint(1, 3)</code>?</p><div class="opts"><button data-k="a">1, 2</button><button data-k="b">0, 1, 2</button><button data-k="c">1, 2, 3</button></div><div class="why"><b></b>У <code>randint</code> обе границы входят.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Подключили <code>import random</code>. Как правильно вызвать randint?</p><div class="opts"><button data-k="a">randint(1, 6)</button><button data-k="b">random.randint(1, 6)</button><button data-k="c">random(randint(1, 6))</button></div><div class="why"><b></b>При подключении всего модуля перед функцией пишут имя модуля и точку.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
print(round(3.14159, 2))
</pre></div><div class="opts"><button data-k="a">3.14</button><button data-k="b">3.1</button><button data-k="c">3</button></div><div class="why"><b></b>Второй аргумент — число знаков после точки: два.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Что делает <code>sleep(3)</code>?</p><div class="opts"><button data-k="a">возвращает 3</button><button data-k="b">выключает компьютер через 3 секунды</button><button data-k="c">ставит программу на паузу на 3 секунды</button></div><div class="why"><b></b>Программа «засыпает» на указанное число секунд, потом продолжает работу.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Как узнать, сколько секунд прошло между двумя моментами?</p><div class="opts"><button data-k="a">напечатать time()</button><button data-k="b">вычесть: end − start</button><button data-k="c">sleep(end)</button></div><div class="why"><b></b>Одно значение <code>time()</code> бесполезно, важна разница между концом и началом.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Свой файл назвали <code>random.py</code>. Что будет?</p><div class="opts"><button data-k="a">import random подключит твой файл вместо настоящего модуля</button><button data-k="b">ничего страшного</button><button data-k="c">Python переименует файл сам</button></div><div class="why"><b></b>Python сначала ищет модуль рядом с программой. Не называй файлы как модули стандартной библиотеки.</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li>Стандартная библиотека — встроенные команды плюс модули, которые нужно подключать.</li>
        <li><code>import random</code> → <code>random.randint()</code>; <code>from random import randint</code> → <code>randint()</code>.</li>
        <li><code>randint(a, b)</code> — случайное целое, обе границы включительно; <code>random()</code> — дробь от 0 до 1.</li>
        <li><code>time()</code> — текущее время в секундах; разница двух значений — сколько прошло. <code>sleep(сек)</code> — пауза.</li>
        <li><code>round(x, n)</code> — округление до n знаков после точки.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="12" type="button"></button></div>
</section>
`);
