document.write(String.raw`
<section class="sec" id="ch13" data-c="13">
  <div class="sec-head">
    <div class="sec-num">13</div>
    <div><span class="code">Глава 13</span><h2>Свои модули</h2><p>Как разложить программу по файлам, подключить свои функции через import и спланировать проект с помощью mind map.</p></div>
  </div>
  <ul class="goals nos">
    <li>понимать, зачем выносить функции в отдельный файл</li>
    <li>создавать свой модуль и подключать его</li>
    <li>знать правила имён и где хранить модуль</li>
    <li>планировать проект с помощью mind map</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Зачем свои модули</h3>
      <p>Модули <code>random</code> и <code>time</code> кто-то написал заранее, а мы просто подключаем их. Свой модуль устроен так же: это <b>обычный файл .py с функциями</b>.</p>
      <ul>
        <li>Главная программа становится короче и понятнее.</li>
        <li>Готовые функции можно взять в <b>другой проект</b>, не копируя код.</li>
        <li>Над разными файлами могут работать разные люди.</li>
      </ul>
      <div class="analogy"><span class="ico">🗂️</span><div>Как папки в шкафу: не держишь все тетради в одной куче, а раскладываешь по предметам. Нужна математика — берёшь папку «математика».</div></div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Создаём модуль</h3>
      <p><b>Шаг 1.</b> Создай файл <code>tools.py</code> и положи в него функции:</p>
      <div class="cb"><div class="fname">tools.py</div><pre>
def greet(name):
    return 'Привет, ' + name + '!'

def square(n):
    return n * n
</pre></div>
      <p><b>Шаг 2.</b> В той же папке создай главную программу и подключи модуль по имени файла <b>без .py</b>:</p>
      <div class="cb"><div class="fname">main.py</div><pre>
import tools

print(tools.greet('Маша'))
print(tools.square(7))
</pre><div class="out">Привет, Маша!
49</div></div>
      <p>Запускаем <code>main.py</code>, а функции берутся из <code>tools.py</code>.</p>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Правила для модуля</h3>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Правило</th><th>Пример</th></tr>
        <tr><td>Файл модуля лежит <b>в той же папке</b>, что и главная программа</td><td><code>project/main.py</code><br><code>project/tools.py</code></td></tr>
        <tr><td>В <code>import</code> пишем имя файла <b>без .py</b></td><td><code>import tools</code>, а не <code>import tools.py</code></td></tr>
        <tr><td>Имя — латиницей, без пробелов и дефисов, можно <code>_</code></td><td><code>bot_answers.py</code> ✅<br><code>bot-answers.py</code> ❌</td></tr>
        <tr><td>Имя понятное — по нему видно, что внутри</td><td><code>sport_rules.py</code>, <code>shop_prices.py</code></td></tr>
        <tr><td>Не называй файл как стандартный модуль</td><td><code>random.py</code>, <code>time.py</code> ❌</td></tr>
      </table></div>
      <div class="note tip"><b class="t">На учебной платформе</b>Модуль — это сохранённый проект: нажми «Сохранить» и дай ему понятное латинское имя. Потом подключай его по этому имени.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>import или from?</h3>
      <p>Свой модуль подключается теми же способами, что и <code>random</code>:</p>
      <div class="vs">
        <div><div class="cb"><pre>
import tools

tools.greet('Маша')
</pre></div><p>Сразу видно: функция живёт в другом файле.</p></div>
        <div><div class="cb"><pre>
from tools import greet

greet('Маша')  # из модуля tools
</pre></div><p>Короче, но откуда функция — не видно. Помогает комментарий.</p></div>
      </div>
      <div class="note tip"><b class="t">Совет программистов</b>Для своих модулей лучше <code>import имя_модуля</code>. Если выбрал <code>from</code> — оставь комментарий, откуда функция.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>В модуле — только функции</h3>
      <p>При <code>import</code> Python <b>выполняет весь файл модуля</b>. Команды <code>def</code> просто запоминают функции, а вот <code>print</code> или <code>input</code> вне функций сработают сразу.</p>
      <div class="cb"><div class="fname">tools.py</div><pre>
def greet(name):
    return 'Привет, ' + name + '!'

print('Проверка:', greet('тест'))  # лишнее!
</pre></div>
      <p>Теперь любая программа с <code>import tools</code> первым делом напечатает «Проверка: Привет, тест!». Проверочный код удаляй из модуля или пиши его в главной программе.</p>
      <div class="analogy"><span class="ico">📦</span><div>Модуль — как коробка с инструментами. Открыл коробку — инструменты лежат и ждут. Странно, если при открытии дрель сама начинает сверлить.</div></div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Как работают два файла</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["# ── файл tools.py ──","def greet(name):","    return 'Привет, ' + name + '!'","","# ── файл main.py ──","import tools","","user = input('Как тебя зовут? ')","text = tools.greet(user)","print(text)"],
        "start":"Сверху — модуль, снизу — главная программа. Запускаем main.py. Пользователь введёт «Маша».",
        "steps":[
          {"line":6,"note":"Python ищет файл <code>tools.py</code> в папке программы и выполняет его."},
          {"line":2,"note":"В модуле только <code>def</code>: функция <code>greet</code> запоминается, но пока не выполняется. Модуль подключён — возвращаемся в main.py."},
          {"line":8,"set":{"user":"'Маша'"},"out":"⌨ Как тебя зовут? Маша","note":"Пользователь ввёл имя."},
          {"line":9,"note":"<code>tools.greet(user)</code> — «возьми функцию greet из модуля tools». Переходим в другой файл."},
          {"line":2,"set":{"name":"'Маша'"},"note":"Параметр <code>name</code> получил значение аргумента."},
          {"line":3,"note":"Склеиваем строку и возвращаем её: <code>'Привет, Маша!'</code>."},
          {"line":9,"set":{"name":null,"text":"'Привет, Маша!'"},"note":"Вернулись в main.py. Локальная <code>name</code> исчезла, результат записан в <code>text</code>."},
          {"line":10,"out":"Привет, Маша!","note":"Печатаем. Готово!"}
        ]}</script>
      </div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>Планируем проект: mind map</h3>
      <p><b>Mind map</b> (ментальная карта) — схема, где в центре главная идея, а от неё расходятся части. Каждую часть можно делить дальше. Это помогает понять, какие функции нужны и куда их положить.</p>
      <svg class="flow" viewBox="0 0 420 250" role="img" aria-label="Mind map проекта автоответчик">
        <line class="arr nm" x1="210" y1="125" x2="95" y2="45"/>
        <line class="arr nm" x1="210" y1="125" x2="325" y2="45"/>
        <line class="arr nm" x1="210" y1="125" x2="95" y2="205"/>
        <line class="arr nm" x1="210" y1="125" x2="325" y2="205"/>
        <rect class="f-se" x="135" y="103" width="150" height="44" rx="22"/>
        <text x="210" y="130">Автоответчик</text>
        <rect class="f-act" x="20" y="22" width="150" height="44" rx="10"/>
        <text x="95" y="49">Получить вопрос</text>
        <rect class="f-act" x="250" y="22" width="150" height="44" rx="10"/>
        <text x="325" y="49">Понять тему</text>
        <rect class="f-io" x="20" y="183" width="150" height="44" rx="10"/>
        <text x="95" y="210">Ответы</text>
        <rect class="f-io" x="250" y="183" width="150" height="44" rx="10"/>
        <text x="325" y="210">Модуль replies</text>
      </svg>
      <p>Дальше каждую ветку раскрываем: «Ответы» → расписание, контакты, сумма к оплате… Правильного ответа нет — карта у каждого своя.</p>
    </div>

    <div class="card wide" data-s>
      <h3><span class="n">7</span>Проект: автоответчик кружка робототехники</h3>
      <p>Программа принимает вопрос, понимает, о чём он, и печатает ответ. Всё, что работает с вопросами, выносим в модуль <code>replies</code>.</p>
      <div class="vs">
        <div><div class="cb"><div class="fname">replies.py</div><pre>
def get_topic(text):
    text = text.lower()
    if 'расписан' in text:
        return 'расписание'
    elif 'телефон' in text or 'контакт' in text:
        return 'контакты'
    elif 'оплат' in text or 'стоит' in text:
        return 'оплата'
    return 'неизвестно'

def print_schedule():
    print('Пн и Чт в 16:00, Сб в 12:00')

def print_contacts():
    print('Тренер Ольга: 8-900-123-45-67')

def print_price(lessons):
    print('К оплате:', lessons * 500, 'руб.')
</pre></div></div>
        <div><div class="cb"><div class="fname">main.py</div><pre>
import replies

question = input('Ваш вопрос: ')
topic = replies.get_topic(question)

if topic == 'расписание':
    replies.print_schedule()
elif topic == 'контакты':
    replies.print_contacts()
elif topic == 'оплата':
    count = int(input('Сколько занятий? '))
    replies.print_price(count)
else:
    print('Не понял. Спросите про расписание, контакты или оплату.')
</pre><div class="out">Ваш вопрос: Сколько СТОИТ кружок?
Сколько занятий? 8
К оплате: 4000 руб.</div></div></div>
      </div>
      <div class="note tip"><b class="t">Почему кусочки слов</b>Ищем <code>'расписан'</code>, а не «расписание», — тогда подойдут и «расписание», и «расписания», и «расписанием». А <code>lower()</code> делает так, что «СТОИТ» и «стоит» распознаются одинаково.</div>
      <div class="note tip"><b class="t">Попробуй сам</b>Добавь в модуль ещё две темы: например, «адрес» и «что взять с собой». Нужна новая ветка в <code>get_topic</code>, новая функция-ответ и новый <code>elif</code> в main.py.</div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Ловушка: лишний код в модуле</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["# ── файл tools.py ──","def greet(name):","    return 'Привет, ' + name + '!'","","print('Проверка:', greet('тест'))","","# ── файл main.py ──","import tools","","print(tools.greet('Маша'))"],
        "start":"Автор модуля забыл удалить строчку для проверки. Запускаем main.py и смотрим, что окажется на экране.",
        "steps":[
          {"line":8,"note":"<code>import tools</code> — Python выполняет файл модуля от начала до конца."},
          {"line":2,"note":"<code>def</code> только запоминает функцию <code>greet</code>."},
          {"line":5,"note":"А это обычная команда вне функции — она выполнится прямо сейчас! Сначала вызывается <code>greet('тест')</code>."},
          {"line":2,"set":{"name":"'тест'"},"note":"Функция получила <code>name = 'тест'</code>."},
          {"line":3,"note":"Возвращает <code>'Привет, тест!'</code>."},
          {"line":5,"set":{"name":null},"out":"Проверка: Привет, тест!","note":"Лишняя строка попала на экран, хотя main.py её не просил."},
          {"line":10,"note":"Модуль подключён, продолжаем main.py. Вызываем <code>tools.greet('Маша')</code>."},
          {"line":2,"set":{"name":"'Маша'"},"note":"Снова в функции, теперь <code>name = 'Маша'</code>."},
          {"line":3,"note":"Возвращает <code>'Привет, Маша!'</code>."},
          {"line":10,"set":{"name":null},"out":"Привет, Маша!","note":"Вот что мы хотели. Вывод: в модуле держим только функции."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <div class="errs">
        <div class="err-item"><div class="msg">ModuleNotFoundError: No module named 'replies'</div><div class="body"><p><b>Почему</b>Python не нашёл файл <code>replies.py</code>: он лежит в другой папке, ещё не сохранён или имя написано иначе (например, <code>Replies.py</code>).</p><p><b>Как исправить</b>Сохрани модуль в ту же папку, что и главную программу, и проверь, что имя в <code>import</code> совпадает с именем файла буква в букву.</p></div></div>
        <div class="err-item"><div class="msg">AttributeError: module 'replies' has no attribute 'get_topik'</div><div class="body"><p><b>Почему</b>Модуль нашёлся, а функции с таким именем в нём нет: опечатка или функцию добавили, но не сохранили файл.</p><p><b>Как исправить</b>Сравни имя в вызове и в <code>def</code>, сохрани модуль.</p></div></div>
        <div class="err-item"><div class="msg">NameError: name 'get_topic' is not defined</div><div class="body"><p><b>Почему</b>Подключили <code>import replies</code>, а функцию вызывают без имени модуля.</p><p><b>Как исправить</b>Пиши <code>replies.get_topic(…)</code> или подключай так: <code>from replies import get_topic</code>.</p></div></div>
        <div class="err-item"><div class="msg">SyntaxError: invalid syntax  (import bot-answers)</div><div class="body"><p><b>Почему</b>В имени модуля дефис: Python читает его как минус.</p><p><b>Как исправить</b>Переименуй файл в <code>bot_answers.py</code> и пиши <code>import bot_answers</code>.</p></div></div>
        <div class="err-item"><div class="msg">ModuleNotFoundError: No module named 'tools.py'; 'tools' is not a package</div><div class="body"><p><b>Почему</b>Написали <code>import tools.py</code> — с расширением.</p><p><b>Как исправить</b>В <code>import</code> имя пишется без <code>.py</code>: <code>import tools</code>.</p></div></div>
        <div class="err-item"><div class="msg">При запуске печатается что-то лишнее</div><div class="body"><p><b>Почему</b>В модуле остались команды вне функций — они выполняются при <code>import</code>.</p><p><b>Как исправить</b>Оставь в модуле только <code>def</code>, а проверочные вызовы перенеси в главную программу.</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="b"><p class="q">Что такое свой модуль?</p><div class="opts"><button data-k="a">специальная команда Python</button><button data-k="b">обычный файл .py с функциями</button><button data-k="c">папка с картинками</button></div><div class="why"><b></b>Модуль — просто файл с кодом, который можно подключить к другой программе.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Модуль сохранён в файле <code>shop_prices.py</code>. Как его подключить?</p><div class="opts"><button data-k="a">import shop_prices.py</button><button data-k="b">import "shop_prices"</button><button data-k="c">import shop_prices</button></div><div class="why"><b></b>В <code>import</code> пишем имя файла без расширения и без кавычек.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Подключили <code>import tools</code>. Как вызвать из него функцию <code>square</code>?</p><div class="opts"><button data-k="a">tools.square(5)</button><button data-k="b">square(5)</button><button data-k="c">square.tools(5)</button></div><div class="why"><b></b>Сначала имя модуля, потом точка и имя функции.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Какое имя подходит для модуля?</p><div class="opts"><button data-k="a">мои функции.py</button><button data-k="b">my_functions.py</button><button data-k="c">my-functions.py</button></div><div class="why"><b></b>Латиница, без пробелов и дефисов. Подчёркивание можно.</div></div>
        <div class="quiz" data-answer="c"><p class="q">В модуле есть строка <code>print('Привет')</code> вне функций. Что будет при <code>import</code>?</p><div class="opts"><button data-k="a">ничего, print в модулях не работает</button><button data-k="b">ошибка</button><button data-k="c">«Привет» напечатается сразу при подключении</button></div><div class="why"><b></b>При <code>import</code> выполняется весь файл модуля. Поэтому в модуле держат только функции.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Для чего нужна mind map?</p><div class="opts"><button data-k="a">разбить идею проекта на части и спланировать работу</button><button data-k="b">ускорить программу</button><button data-k="c">найти ошибки в коде</button></div><div class="why"><b></b>Ментальная карта помогает увидеть, из каких частей состоит проект и какие функции нужны.</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li>Свой модуль — файл .py с функциями. Его подключают через <code>import имя_файла</code> (без .py).</li>
        <li>Модуль и главная программа лежат в одной папке.</li>
        <li>Вызов: <code>модуль.функция()</code>. С <code>from модуль import функция</code> — просто <code>функция()</code>, лучше с комментарием.</li>
        <li>Имя модуля — латиницей, через <code>_</code>, не как у стандартных модулей.</li>
        <li>При <code>import</code> выполняется весь модуль, поэтому в нём — только функции.</li>
        <li>Mind map помогает разбить проект на части до того, как писать код.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="13" type="button"></button></div>
</section>
`);
