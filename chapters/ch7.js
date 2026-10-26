document.write(String.raw`
<section class="sec" id="ch7" data-c="7">
  <div class="sec-head">
    <div class="sec-num">07</div>
    <div><span class="code">Глава 07</span><h2>Цикл while</h2><p>Как повторять действия, пока выполняется условие: запрашивать пароль до правильного, считать попытки и складывать покупки.</p></div>
  </div>
  <ul class="goals nos">
    <li>понимать, что такое цикл</li>
    <li>писать while</li>
    <li>заводить счётчик</li>
    <li>считать сумму в цикле</li>
    <li>не попадать в бесконечный цикл</li>
  </ul>

  <div class="grid">
    <div class="card" data-s>
      <h3><span class="n">1</span>Зачем нужен цикл</h3>
      <p>Задача: спрашивать промокод, пока не введут правильный («лето»). С одним <code>if</code> получится только одна проверка:</p>
      <div class="cb"><pre>
promo = input('Промокод: ')
if promo != 'лето':
    print('Ошибка!')
    promo = input('Промокод: ')
# а если снова ошибся? Писать ещё if? А 100 раз?
</pre></div>
      <p>Сколько раз ошибётся покупатель, заранее неизвестно. Нужна команда «повторяй, пока…» — это и есть <b>цикл</b>.</p>
      <div class="analogy"><span class="ico">🔁</span><div>Как в жизни: «<b>пока</b> суп горячий — дуй на ложку». Ты не знаешь заранее, сколько раз подуть, а просто проверяешь условие перед каждым разом.</div></div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">2</span>Как записать while</h3>
      <p><code>while</code> по-английски — «пока». Цикл выполняет команды с отступом снова и снова, <b>пока условие верно</b>:</p>
      <div class="cb"><pre>
promo = input('Промокод: ')
while promo != 'лето':
    print('Ошибка!')
    promo = input('Промокод: ')
print('Промокод активирован!')
</pre></div>
      <svg class="flow" viewBox="0 0 420 226" role="img" aria-label="Блок-схема цикла while">
        <polygon points="130,6 280,6 268,40 118,40" class="f-io"/><text x="199" y="28">Ввод промокода</text>
        <line x1="200" y1="40" x2="200" y2="64" class="arr"/>
        <polygon points="200,66 290,100 200,134 110,100" class="f-if"/><text x="200" y="104">не «лето»?</text>
        <polyline points="290,100 339,100 339,126" class="arr" fill="none"/><text x="312" y="92" class="yes">да</text>
        <polygon points="288,128 400,128 390,162 278,162" class="f-io"/><text x="339" y="150">«Ошибка!»</text>
        <line x1="339" y1="162" x2="339" y2="178" class="arr"/>
        <polygon points="288,180 400,180 390,214 278,214" class="f-io"/><text x="339" y="202">Ввод заново</text>
        <polyline points="395,197 414,197 414,52 206,52" class="arr" fill="none"/>
        <polyline points="110,100 74,100 74,138" class="arr" fill="none"/><text x="88" y="92" class="no">нет</text>
        <polygon points="22,140 140,140 128,176 10,176" class="f-io"/><text x="75" y="163">«Активирован!»</text>
      </svg>
      <ul>
        <li>после условия — <b>двоеточие</b>;</li>
        <li>тело цикла — с <b>отступом</b> 4 пробела;</li>
        <li>условие проверяется <b>перед каждым</b> повтором. Один такой повтор называют <b>шагом</b> (или итерацией).</li>
      </ul>
    </div>

    <div class="card" data-s>
      <h3><span class="n">3</span>Шаблон «спрашивать, пока не…»</h3>
      <p>Почти все такие задачи решаются по одной схеме:</p>
      <ol>
        <li>спросить <b>до</b> цикла;</li>
        <li>в условии проверить ответ;</li>
        <li>в теле что-то сделать и спросить <b>снова</b> — последней строкой.</li>
      </ol>
      <div class="cb"><pre>
feedback = input('Отзыв (off — выход): ')
while feedback != 'off':
    print('Спасибо за отзыв!')
    feedback = input('Отзыв (off — выход): ')
</pre></div>
      <div class="note tip"><b class="t">Лайфхак</b>Когда ответ нужен только для проверки, <code>input</code> можно вложить прямо в условие:<br><code>while input('Отзыв (off — выход): ') != 'off':</code></div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">4</span>Счётчик</h3>
      <p><b>Счётчик</b> — переменная, которая считает шаги цикла. Три правила:</p>
      <ol>
        <li>создать <b>до цикла</b>: <code>count = 0</code>;</li>
        <li>увеличивать <b>внутри цикла</b>: <code>count += 1</code>;</li>
        <li>использовать <b>после цикла</b>.</li>
      </ol>
      <p>Счётчик может считать все шаги или только те, где выполнилось условие:</p>
      <div class="cb"><pre>
count_even = 0
n = int(input('Число (0 — стоп): '))
while n != 0:
    if n % 2 == 0:
        count_even += 1
    n = int(input('Число (0 — стоп): '))
print('Чётных чисел:', count_even)
</pre></div>
      <div class="note tip"><b class="t">Лайфхак</b>Чтобы повторить что-то ровно 5 раз, тоже нужен счётчик: <code>i = 0</code>, <code>while i &lt; 5:</code>, внутри <code>i += 1</code>. В следующей главе это можно будет сделать проще.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">5</span>Сумма в цикле</h3>
      <p>Чтобы сложить много чисел, заводим переменную-«копилку» <code>total = 0</code> и на каждом шаге добавляем к ней новое число:</p>
      <div class="cb"><pre>
total = 0
price = int(input('Цена (0 — стоп): '))
while price != 0:
    total += price
    price = int(input('Цена (0 — стоп): '))
print('Без скидки:', total)
print('Со скидкой 10%:', total * 0.9)
</pre></div>
      <div class="note warn"><b class="t">Осторожно</b><code>total = 0</code> пиши <b>до</b> цикла. Если внутри — копилка будет обнуляться на каждом шаге.</div>
    </div>

    <div class="card" data-s>
      <h3><span class="n">6</span>Бесконечный цикл</h3>
      <p>Если условие никогда не станет ложным, цикл будет крутиться вечно:</p>
      <div class="cb"><pre>
i = 0
while i < 3:
    print('Привет')
# забыли i += 1 — i всегда 0
</pre></div>
      <p>Программа «зависнет» и будет бесконечно печатать «Привет».</p>
      <div class="note tip"><b class="t">Как остановить</b>Нажми кнопку остановки в редакторе или <kbd>Ctrl</kbd> + <kbd>C</kbd> в консоли.</div>
      <div class="note warn"><b class="t">Проверь себя</b>Внутри цикла должно меняться что-то, от чего зависит условие: переменная увеличивается, или пользователь вводит новое значение.</div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Промокод и счётчик попыток</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["promo = input('Промокод: ')","attempts = 1","while promo != 'лето':","    print('Ошибка!')","    promo = input('Промокод: ')","    attempts += 1","print('Принят с попытки', attempts)"],
        "start":"Покупатель введёт «зима», потом «Лето», потом «лето». Сколько раз прокрутится цикл?",
        "steps":[
          {"line":1,"set":{"promo":"'зима'"},"out":"⌨ Промокод: зима","note":"Первый ввод — до цикла."},
          {"line":2,"set":{"attempts":"1"},"note":"Счётчик попыток. Уже одна попытка была, поэтому 1."},
          {"line":3,"note":"<code>'зима' != 'лето'</code>? Да, не равно — заходим в цикл."},
          {"line":4,"out":"Ошибка!","note":"Шаг 1 цикла."},
          {"line":5,"set":{"promo":"'Лето'"},"out":"⌨ Промокод: Лето","note":"Спрашиваем снова."},
          {"line":6,"set":{"attempts":"2"},"note":"Попыток стало 2. Тело цикла закончилось — возвращаемся к условию."},
          {"line":3,"note":"<code>'Лето' != 'лето'</code>? Да! Большая буква «Л» — другой символ. Снова в цикл."},
          {"line":4,"out":"Ошибка!","note":"Шаг 2 цикла."},
          {"line":5,"set":{"promo":"'лето'"},"out":"⌨ Промокод: лето","note":"Теперь ввели правильно."},
          {"line":6,"set":{"attempts":"3"},"note":"Попыток 3. Возвращаемся к условию."},
          {"line":3,"note":"<code>'лето' != 'лето'</code>? Нет, они равны — условие ложно. Выходим из цикла."},
          {"line":7,"out":"Принят с попытки 3","note":"Строка после цикла. Цикл прокрутился 2 раза. Как сделать, чтобы «Лето» тоже подошло? Добавь <code>.lower()</code> к каждому <code>input</code>."}
        ]}</script>
      </div>
    </div>

    <div class="wide" data-s>
      <div class="stepper">
        <div class="st-top"><h3>Считаем покупки и их сумму</h3><span class="st-badge">Запусти по шагам</span></div>
        <div class="st-body">
          <div class="st-code"></div>
          <div class="st-side">
            <div><h4>Переменные</h4><div class="st-vars-box"></div></div>
            <div><h4>Что сейчас происходит</h4><p class="st-note"></p></div>
            <div><h4>Экран</h4><div class="st-out"></div></div>
          </div>
        </div>
        <div class="st-ctrl"><button class="btn" type="button">◀ Назад</button><button class="btn main" type="button">Шаг ▶</button><button class="btn" type="button">↺ Сначала</button><span class="st-count"></span></div>
        <script type="application/json">{"code":["total = 0","count = 0","price = int(input('Цена (0 — стоп): '))","while price != 0:","    total += price","    count += 1","    price = int(input('Цена (0 — стоп): '))","print('Товаров:', count, 'Сумма:', total)"],
        "start":"Введём цены 100 и 250, а потом 0, чтобы закончить. Следи за копилкой <code>total</code> и счётчиком <code>count</code>.",
        "steps":[
          {"line":1,"set":{"total":"0"},"note":"Копилка для суммы — пустая."},
          {"line":2,"set":{"count":"0"},"note":"Счётчик товаров — пока ноль."},
          {"line":3,"set":{"price":"100"},"out":"⌨ Цена (0 — стоп): 100","note":"Первая цена — до цикла."},
          {"line":4,"note":"100 != 0? Да — в цикл."},
          {"line":5,"set":{"total":"100"},"note":"0 + 100 = 100."},
          {"line":6,"set":{"count":"1"},"note":"Один товар."},
          {"line":7,"set":{"price":"250"},"out":"⌨ Цена (0 — стоп): 250","note":"Следующая цена. Возвращаемся к условию."},
          {"line":4,"note":"250 != 0? Да — ещё шаг."},
          {"line":5,"set":{"total":"350"},"note":"100 + 250 = 350."},
          {"line":6,"set":{"count":"2"},"note":"Два товара."},
          {"line":7,"set":{"price":"0"},"out":"⌨ Цена (0 — стоп): 0","note":"Ввели 0 — сигнал остановки."},
          {"line":4,"note":"0 != 0? Нет — выходим из цикла. Ноль в сумму не попал."},
          {"line":8,"out":"Товаров: 2 Сумма: 350","note":"Печатаем итог."}
        ]}</script>
      </div>
    </div>

    <div class="card wide" data-s>
      <h3>Частые ошибки</h3>
      <div class="errs">
        <div class="err-item"><div class="msg">Программа зависла и печатает одно и то же</div><div class="body"><p><b>Почему</b>Бесконечный цикл: внутри не меняется то, от чего зависит условие. Часто забывают <code>i += 1</code> или повторный <code>input</code>.</p><p><b>Как исправить</b>Останови программу и добавь в тело цикла изменение переменной из условия.</p></div></div>
        <div class="err-item"><div class="msg">NameError: name 'count' is not defined</div><div class="body"><p><b>Почему</b>Счётчик не создали до цикла, а сразу написали <code>count += 1</code>. Python не знает, к чему прибавлять.</p><p><b>Как исправить</b>Перед циклом: <code>count = 0</code>.</p></div></div>
        <div class="err-item"><div class="msg">Сумма всегда равна последнему числу</div><div class="body"><p><b>Почему</b><code>total = 0</code> написали внутри цикла, и копилка обнуляется каждый шаг.</p><p><b>Как исправить</b>Перенеси <code>total = 0</code> выше <code>while</code>.</p></div></div>
        <div class="err-item"><div class="msg">Цикл не выполнился ни разу</div><div class="body"><p><b>Почему</b>Условие ложно уже при первой проверке. Например, сразу ввели 0, или забыли спросить значение до цикла.</p><p><b>Как исправить</b>Проверь, что лежит в переменной перед строкой с <code>while</code>.</p></div></div>
      </div>
    </div>

    <div class="wide" data-quizset data-s>
      <div class="card" style="margin-bottom:12px"><h3>Проверь себя</h3><div class="score"><span></span><div class="bar-p"><i></i></div><button class="btn again" type="button">Пройти заново</button></div></div>
      <div class="grid">
        <div class="quiz" data-answer="a"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
i = 0
while i < 3:
    print(i)
    i += 1
</pre></div><div class="opts"><button data-k="a">0 1 2</button><button data-k="b">1 2 3</button><button data-k="c">0 1 2 3</button></div><div class="why"><b></b>Печатаем 0, 1, 2. Когда <code>i</code> становится 3, условие <code>3 &lt; 3</code> ложно, и цикл заканчивается.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Сколько раз выполнится тело цикла?</p><div class="cb"><pre>
x = 10
while x > 0:
    x -= 3
</pre></div><div class="opts"><button data-k="a">3</button><button data-k="b">4</button><button data-k="c">бесконечно</button></div><div class="why"><b></b><code>x</code>: 10 → 7 → 4 → 1 → -2. Четыре шага, потом -2 &gt; 0 ложно.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
x = 1
while x < 20:
    x *= 2
print(x)
</pre></div><div class="opts"><button data-k="a">16</button><button data-k="b">20</button><button data-k="c">32</button></div><div class="why"><b></b>1 → 2 → 4 → 8 → 16 → 32. При 16 условие ещё верно, поэтому удваиваем до 32.</div></div>
        <div class="quiz" data-answer="a"><p class="q">Какой цикл будет бесконечным?</p><div class="opts"><button data-k="a">i = 0; while i &lt; 5: print(i)</button><button data-k="b">i = 0; while i &lt; 5: i += 1</button><button data-k="c">i = 9; while i &lt; 5: print(i)</button></div><div class="why"><b></b>В первом <code>i</code> не меняется. Третий не выполнится ни разу: 9 &lt; 5 сразу ложно.</div></div>
        <div class="quiz" data-answer="b"><p class="q">Что напечатает программа?</p><div class="cb"><pre>
total = 0
n = 1
while n <= 4:
    total += n
    n += 1
print(total)
</pre></div><div class="opts"><button data-k="a">4</button><button data-k="b">10</button><button data-k="c">5</button></div><div class="why"><b></b>1 + 2 + 3 + 4 = 10.</div></div>
        <div class="quiz" data-answer="c"><p class="q">Где создавать счётчик?</p><div class="opts"><button data-k="a">внутри цикла</button><button data-k="b">после цикла</button><button data-k="c">перед циклом</button></div><div class="why"><b></b>Перед циклом создаём, внутри увеличиваем, после цикла используем.</div></div>
      </div>
    </div>

    <div class="card sum wide" data-s>
      <h3>Коротко о главе</h3>
      <ul>
        <li><code>while условие:</code> повторяет тело с отступом, пока условие верно. Условие проверяется перед каждым шагом.</li>
        <li>Шаблон: спросить до цикла → проверить в условии → спросить снова в конце тела.</li>
        <li>Счётчик: <code>count = 0</code> перед циклом, <code>count += 1</code> внутри.</li>
        <li>Сумма: <code>total = 0</code> перед циклом, <code>total += число</code> внутри.</li>
        <li>Внутри цикла должно меняться то, от чего зависит условие, иначе цикл станет бесконечным.</li>
      </ul>
    </div>
  </div>
  <div class="end nos"><p>Разобрался со всем в этой главе?</p><button class="btn donebtn" data-ch="7" type="button"></button></div>
</section>
`);
