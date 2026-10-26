document.write(String.raw`
<section class="sec" id="ch5" data-c="5">
  <div class="sec-head">
    <div class="sec-num">05</div>
    <div><span class="code">Глава 05</span><h2>Условия: if и else</h2><p>Как научить программу выбирать: делать одно, если условие выполнено, и другое — если нет.</p></div>
  </div>
  <ul class="goals nos">
    <li>знать тип bool: True и False</li>
    <li>сравнивать значения</li>
    <li>соединять условия через and и or</li>
    <li>читать блок-схемы</li>
    <li>писать if и else</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Правда или ложь: тип bool</h3>
      <p>Есть утверждения, которые могут быть только верными или неверными: «5 больше 2», «пароль правильный», «на складе меньше 50 кг».</p>
      <p>Для них в Python есть <b>логический тип</b> <code>bool</code> с двумя значениями: <code>True</code> (истина) и <code>False</code> (ложь).</p>
      <div class="cb"><pre>
print(5 > 2)
print(10 < 3)
is_online = True
print(is_online)
</pre><div class="out">True
False
True</div></div>
      <div class="note warn"><b class="t">Осторожно</b><code>True</code> и <code>False</code> пишутся с большой буквы и без кавычек.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Знаки сравнения</h3>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Знак</th><th>Значит</th><th>Пример</th><th>Ответ</th></tr>
        <tr><td><code>&gt;</code></td><td>больше</td><td><code>7 &gt; 3</code></td><td>True</td></tr>
        <tr><td><code>&lt;</code></td><td>меньше</td><td><code>7 &lt; 3</code></td><td>False</td></tr>
        <tr><td><code>&gt;=</code></td><td>больше или равно</td><td><code>5 &gt;= 5</code></td><td>True</td></tr>
        <tr><td><code>&lt;=</code></td><td>меньше или равно</td><td><code>4 &lt;= 3</code></td><td>False</td></tr>
        <tr><td><code>==</code></td><td>равно</td><td><code>2 == 1 + 1</code></td><td>True</td></tr>
        <tr><td><code>!=</code></td><td>не равно</td><td><code>'да' != 'нет'</code></td><td>True</td></tr>
      </table></div>
      <div class="note warn"><b class="t">Самая частая путаница</b><code>=</code> — положить значение в переменную. <code>==</code> — спросить «равны ли?». В условиях нужно <code>==</code>.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Сравнение строк</h3>
      <p>Строки равны, только если совпадают <b>все</b> символы, включая большие буквы и пробелы:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Выражение</th><th>Ответ</th><th>Почему</th></tr>
        <tr><td><code>'кот' == 'кот'</code></td><td>True</td><td>совпадает всё</td></tr>
        <tr><td><code>'Кот' == 'кот'</code></td><td>False</td><td>К и к — разные</td></tr>
        <tr><td><code>'кот ' == 'кот'</code></td><td>False</td><td>лишний пробел</td></tr>
        <tr><td><code>'15' == 15</code></td><td>False</td><td>строка не равна числу</td></tr>
      </table></div>
      <div class="note tip"><b class="t">Лайфхак</b>Сравниваешь ответ пользователя — сначала сделай его маленькими буквами: <code>answer = input().lower()</code>. Тогда «Да», «ДА» и «да» сработают одинаково.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>Сложные условия: and и or</h3>
      <p>Несколько условий можно соединить:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>Слово</th><th>Значит</th><th>True, когда…</th></tr>
        <tr><td><code>and</code></td><td>и</td><td>верны <b>оба</b> условия</td></tr>
        <tr><td><code>or</code></td><td>или</td><td>верно <b>хотя бы одно</b></td></tr>
      </table></div>
      <div class="cb"><pre>
weight = int(input('Товара на складе, кг: '))
error = weight < 50 or weight > 300
print('Ошибка хранения:', error)
</pre><div class="out">Товара на складе, кг: 320
Ошибка хранения: True</div></div>
      <p>Если в одном условии есть и <code>and</code>, и <code>or</code>, сначала выполняется <code>and</code>. Сомневаешься — ставь скобки.</p>
      <div class="note tip"><b class="t">Лайфхак</b>Проверить «число от 10 до 20» можно как в математике: <code>10 &lt;= x &lt;= 20</code>. Это то же, что <code>x &gt;= 10 and x &lt;= 20</code>.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>Блок-схемы</h3>
      <p>Алгоритм удобно нарисовать схемой. У каждой фигуры своё значение:</p>
      <svg class="flow" viewBox="0 0 420 210" role="img" aria-label="Фигуры блок-схемы">
        <rect x="10" y="12" width="120" height="40" rx="20" class="f-se"/><text x="70" y="37">Начало</text>
        <text x="150" y="37" class="lbl" text-anchor="start">начало или конец</text>
        <polygon points="25,68 135,68 120,108 10,108" class="f-io"/><text x="72" y="93">Ввод: x</text>
        <text x="150" y="93" class="lbl" text-anchor="start">ввод или вывод</text>
        <rect x="10" y="122" width="120" height="36" rx="4" class="f-act"/><text x="70" y="145">x = x + 1</text>
        <text x="150" y="145" class="lbl" text-anchor="start">действие</text>
        <polygon points="70,166 130,186 70,206 10,186" class="f-if"/><text x="70" y="190">x &gt; 5?</text>
        <text x="150" y="190" class="lbl" text-anchor="start">условие: выход «да» или «нет»</text>
      </svg>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>Условный оператор if</h3>
      <p><code>if</code> («если») выполняет команды, <b>только если</b> условие верно:</p>
      <div class="cb"><pre>
price = int(input('Сумма покупки: '))
balance = int(input('Деньги на карте: '))
if price > balance:
    print('Недостаточно средств')
print('Спасибо, что выбрали нас!')
</pre></div>
      <p>Правила записи:</p>
      <ul>
        <li>после условия ставится <b>двоеточие</b> <code>:</code>;</li>
        <li>команды внутри <code>if</code> пишутся с <b>отступом в 4 пробела</b> (или <kbd>Tab</kbd>);</li>
        <li>строка без отступа уже не относится к <code>if</code> и выполняется всегда.</li>
      </ul>
    </div>

    <div class="card" data-s>
      <h3><span class="n">7</span>if и else</h3>
      <p><code>else</code> («иначе») — что делать, если условие <b>неверно</b>. Выполнится ровно одна из двух веток.</p>
      <svg class="flow" viewBox="0 0 420 330" role="img" aria-label="Блок-схема выбора десерта">
        <rect x="150" y="6" width="120" height="36" rx="18" class="f-se"/><text x="210" y="29">Начало</text>
        <line x1="210" y1="42" x2="210" y2="58" class="arr"/>
        <polygon points="145,58 285,58 270,96 130,96" class="f-io"/><text x="208" y="82">Ввод: вкус</text>
        <line x1="210" y1="96" x2="210" y2="112" class="arr"/>
        <polygon points="210,112 300,145 210,178 120,145" class="f-if"/><text x="210" y="149">ванильный?</text>
        <polyline points="120,145 75,145 75,200" class="arr" fill="none"/><text x="96" y="137" class="yes">да</text>
        <polyline points="300,145 345,145 345,200" class="arr" fill="none"/><text x="324" y="137" class="no">нет</text>
        <polygon points="20,200 150,200 135,240 5,240" class="f-io"/><text x="77" y="224">«Чизкейк»</text>
        <polygon points="285,200 415,200 400,240 270,240" class="f-io"/><text x="342" y="224">«Ореховый торт»</text>
        <polyline points="75,240 75,268 210,268 210,284" class="arr" fill="none"/>
        <polyline points="345,240 345,268 210,268" class="arr nm" fill="none"/>
        <rect x="150" y="284" width="120" height="36" rx="18" class="f-se"/><text x="210" y="307">Конец</text>
      </svg>
      <div class="cb"><pre>
taste = input('Любимый вкус: ').lower()
if taste == 'ванильный':
    print('Попробуйте чизкейк!')
else:
    print('Попробуйте ореховый торт!')
</pre></div>
      <div class="note warn"><b class="t">Осторожно</b>У <code>else</code> не бывает условия: пишется просто <code>else:</code> с двоеточием, на одном уровне с <code>if</code>.</div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Хватит ли денег на карте</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["price = int(input('Сумма покупки: '))","balance = int(input('На карте: '))","enough = price <= balance","if enough:","    print('Покупка одобрена')","else:","    print('Недостаточно средств')","print('Спасибо!')"],
        "start":"Покупка стоит 500, а на карте 300. Посмотри, какие строки выполнятся, а какие Python перепрыгнет.",
        "steps":[
          {"line":1,"set":{"price":"500"},"out":"⌨ Сумма покупки: 500","note":"Ввели 500, <code>int</code> сделал из строки число."},
          {"line":2,"set":{"balance":"300"},"out":"⌨ На карте: 300","note":"На карте 300."},
          {"line":3,"set":{"enough":"False"},"note":"Вычисляем условие: 500 &lt;= 300? Нет. В <code>enough</code> кладётся <code>False</code> — тип <code>bool</code>."},
          {"line":4,"note":"Проверяем условие <code>if</code>: там <code>False</code>. Значит, строку 5 с отступом пропускаем."},
          {"line":6,"note":"Переходим к <code>else</code> — эта ветка выполняется, когда условие ложно."},
          {"line":7,"out":"Недостаточно средств","note":"Печатаем сообщение из ветки <code>else</code>."},
          {"line":8,"out":"Спасибо!","note":"Строка без отступа не относится ни к <code>if</code>, ни к <code>else</code>, поэтому выполняется в любом случае."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <div class="errs">
        <div class="err-item"><div class="msg">SyntaxError: invalid syntax. Maybe you meant '==' or ':=' instead of '='?</div><div class="body"><p><b>Код</b><code>if x = 5:</code></p><p><b>Почему</b>Для сравнения нужен двойной знак.</p><p><b>Как исправить</b><code>if x == 5:</code></p></div></div>
        <div class="err-item"><div class="msg">SyntaxError: expected ':'</div><div class="body"><p><b>Код</b><code>if x &gt; 5</code></p><p><b>Почему</b>Забыли двоеточие в конце строки с <code>if</code> или <code>else</code>.</p><p><b>Как исправить</b><code>if x &gt; 5:</code></p></div></div>
        <div class="err-item"><div class="msg">IndentationError: expected an indented block after 'if' statement</div><div class="body"><p><b>Почему</b>После <code>if</code> строка написана без отступа.</p><p><b>Как исправить</b>Добавь 4 пробела перед командами внутри <code>if</code>.</p></div></div>
        <div class="err-item"><div class="msg">TypeError: '&gt;' not supported between instances of 'str' and 'int'</div><div class="body"><p><b>Код</b><code>age = input()</code>, потом <code>if age &gt; 12:</code></p><p><b>Почему</b>Строку нельзя сравнивать с числом на больше-меньше.</p><p><b>Как исправить</b><code>age = int(input())</code>.</p></div></div>
        <div class="err-item"><div class="msg">Ошибки нет, но условие никогда не срабатывает</div><div class="body"><p><b>Код</b><code>if input() == 5:</code></p><p><b>Почему</b><code>input</code> возвращает строку <code>'5'</code>, а <code>'5' == 5</code> всегда False. Или ответ ввели с большой буквы.</p><p><b>Как исправить</b>Сравнивай строку со строкой (<code>== '5'</code>) или число с числом (<code>int(input()) == 5</code>). Для текста используй <code>.lower()</code>.</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="b"><p class="q">Чему равно выражение?</p><div class="cb"><pre>
3 > 2 and 1 > 2
</pre></div><div class="opts"><button data-k="a">True</button><button data-k="b">False</button></div><div class="why"><b></b>Для <code>and</code> нужны оба условия, а <code>1 &gt; 2</code> неверно.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Чему равно выражение?</p><div class="cb"><pre>
1 > 2 or 3 > 2
</pre></div><div class="opts"><button data-k="a">True</button><button data-k="b">False</button></div><div class="why"><b></b>Для <code>or</code> хватит одного верного: <code>3 &gt; 2</code>.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Чему равно выражение?</p><div class="cb"><pre>
'Да' == 'да'
</pre></div><div class="opts"><button data-k="a">True</button><button data-k="b">False</button></div><div class="why"><b></b>Большая и маленькая буквы — разные символы.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
x = 7
if x % 2 == 0:
    print('чётное')
else:
    print('нечётное')
</pre></div><div class="opts"><button data-k="a">чётное</button><button data-k="b">нечётное</button><button data-k="c">оба слова</button></div><div class="why"><b></b>7 % 2 = 1, условие ложно, работает ветка <code>else</code>.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
age = 10
if age >= 12:
    print('Можно')
print('Готово')
</pre></div><div class="opts"><button data-k="a">Можно Готово</button><button data-k="b">ничего</button><button data-k="c">Готово</button></div><div class="why"><b></b>Условие ложно, строку с отступом пропускаем. А <code>print('Готово')</code> без отступа выполняется всегда.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Пользователь ввёл 5. Что напечатает программа?</p><div class="cb"><pre>
n = input('Число: ')
if n == 5:
    print('пять')
else:
    print('не пять')
</pre></div><div class="opts"><button data-k="a">не пять</button><button data-k="b">пять</button><button data-k="c">ошибка</button></div><div class="why"><b></b>В <code>n</code> строка <code>'5'</code>, а сравниваем с числом 5 — они не равны. Ловушка!</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li>Тип <code>bool</code>: <code>True</code> или <code>False</code>. Его дают сравнения <code>&gt; &lt; &gt;= &lt;= == !=</code>.</li>
        <li><code>and</code> — нужны оба условия, <code>or</code> — хватит одного.</li>
        <li><code>if условие:</code> — команды с отступом выполнятся, только если условие верно.</li>
        <li><code>else:</code> — что делать, если неверно. Без условия, на уровне <code>if</code>.</li>
        <li><code>=</code> кладёт значение, <code>==</code> сравнивает.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="5" type="button"></button></div>
</section>
`);
