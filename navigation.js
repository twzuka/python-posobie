/* Navigation shared by the two independently hosted learning sites. */
(() => {
  const sidebar = document.getElementById('topics-panel');
  const toggle = document.querySelector('.topics-toggle');
  const close = document.querySelector('.topics-close');
  const backdrop = document.querySelector('.menu-backdrop');
  const reading = document.querySelector('.reading-pane');
  const header = document.querySelector('.site-header');
  const list = document.querySelector('.chapter-list');
  const links = [...list.querySelectorAll('a[href^="#"]')];
  const sections = [...document.querySelectorAll('main section.sec')];
  const toc = document.getElementById('toc');
  const search = document.getElementById('q');
  const status = document.getElementById('search-status');
  const resultsButton = document.querySelector('.search-results-button');
  const current = document.querySelector('[data-current-topic]');
  const mobile = window.matchMedia('(max-width: 900px)');
  const main = document.getElementById('main');
  const intro = document.querySelector('.hero');
  const empty = document.querySelector('#nores, #empty');
  const baseTitle = document.title;
  const results = document.createElement('section');
  results.className = 'search-results';
  results.setAttribute('aria-labelledby', 'results-heading');
  results.hidden = true;
  const resultsHeading = document.createElement('h2');
  resultsHeading.id = 'results-heading';
  resultsHeading.textContent = 'Результаты поиска';
  const resultList = document.createElement('div');
  resultList.className = 'search-result-list';
  results.append(resultsHeading, resultList);
  toc.before(results);
  let selectedPage = toc;
  let activeId = '';
  let open = false;

  function revealCurrent() {
    const active = links.find(link => link.classList.contains('on'));
    if (!active) return;
    const item = active.getBoundingClientRect();
    const viewport = list.getBoundingClientRect();
    if (item.top < viewport.top) list.scrollTop += item.top - viewport.top - 8;
    else if (item.bottom > viewport.bottom) list.scrollTop += item.bottom - viewport.bottom + 8;
  }

  function mark(id) {
    if (activeId === id) return;
    activeId = id;
    links.forEach(link => {
      const selected = link.hash === '#' + id;
      link.classList.toggle('on', selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const active = links.find(link => link.hash === '#' + id);
    current.textContent = active
      ? [...active.childNodes].map(node => node.textContent.trim()).filter(Boolean).join(' · ')
      : 'Оглавление';
    if (!mobile.matches || open) revealCurrent();
  }

  function setOpen(value, restoreFocus = true) {
    open = value && mobile.matches;
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    backdrop.hidden = !open;
    sidebar.inert = mobile.matches && !open;
    reading.inert = open;
    header.inert = open;
    if (open) {
      sidebar.setAttribute('role', 'dialog');
      sidebar.setAttribute('aria-modal', 'true');
      close.focus();
      revealCurrent();
    } else {
      sidebar.removeAttribute('role');
      sidebar.removeAttribute('aria-modal');
      if (restoreFocus) toggle.focus();
    }
  }

  toggle.addEventListener('click', () => setOpen(!open));
  close.addEventListener('click', () => setOpen(false));
  backdrop.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', event => {
    if (!open) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    }
    if (event.key === 'Tab') {
      const focusable = [...sidebar.querySelectorAll('a[href],button,input')]
        .filter(element => !element.disabled && element.getClientRects().length);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  mobile.addEventListener('change', () => {
    const focusedInSidebar = sidebar.contains(document.activeElement);
    setOpen(false, false);
    if (mobile.matches && focusedInSidebar) toggle.focus();
    else if (!mobile.matches && document.activeElement === toggle) links[0].focus();
    if (!mobile.matches) revealCurrent();
  });

  function makePageLink(target, next) {
    const link = document.createElement('a');
    link.href = '#' + target.id;
    link.className = next ? 'next' : 'previous';
    const label = document.createElement('span');
    label.textContent = next ? 'Следующая тема →' : '← Предыдущая тема';
    const title = document.createElement('strong');
    title.textContent = target.querySelector('h2').textContent;
    link.append(label, title);
    return link;
  }
  sections.forEach((section, index) => {
    const pagination = document.createElement('nav');
    pagination.className = 'chapter-pagination';
    pagination.setAttribute('aria-label', 'Переходы между темами');
    pagination.append(makePageLink(sections[index - 1] || toc, false));
    if (sections[index + 1]) pagination.append(makePageLink(sections[index + 1], true));
    section.append(pagination);
  });

  function showPage(page) {
    selectedPage = page;
    sections.forEach(section => section.hidden = section !== page);
    toc.hidden = page !== toc;
    intro.hidden = page !== toc;
    results.hidden = true;
    empty.hidden = true;
    document.querySelectorAll('.chapter-pagination').forEach(nav => nav.hidden = false);
    document.title = page === toc ? baseTitle : page.querySelector('h2').textContent + ' — ' + baseTitle;
    mark(page.id);
  }

  function makeSearchResult(section) {
    const link = document.createElement('a');
    link.className = 'search-result';
    link.href = '#' + section.id;
    const title = document.createElement('h3');
    title.textContent = section.querySelector('h2').textContent;
    const matches = [...section.querySelectorAll('[data-s]')].filter(item => !item.hidden);
    const excerpt = document.createElement('p');
    const text = matches[0].textContent.replace(/\s+/g, ' ').trim();
    excerpt.textContent = text.length > 180 ? text.slice(0, 180) + '…' : text;
    const action = document.createElement('span');
    action.textContent = 'Открыть тему →';
    link.append(title, excerpt, action);
    return link;
  }

  function updateSearch() {
    const searching = !!search.value.trim();
    const matches = sections.filter(section => !section.hidden);
    status.textContent = searching ? (matches.length ? 'Найдено тем: ' + matches.length : 'Ничего не найдено') : '';
    resultsButton.hidden = !searching || !matches.length;
    if (searching) {
      resultList.replaceChildren(...matches.map(makeSearchResult));
      sections.forEach(section => section.hidden = true);
      intro.hidden = true;
      toc.hidden = true;
      results.hidden = !matches.length;
      empty.hidden = !!matches.length;
      document.title = 'Поиск — ' + baseTitle;
      mark('');
      current.textContent = 'Результаты поиска';
      window.scrollTo({top: 0, behavior: 'instant'});
    } else showPage(selectedPage);
  }
  search.addEventListener('input', updateSearch);
  document.getElementById('clear').addEventListener('click', updateSearch);
  resultsButton.addEventListener('click', () => {
    setOpen(false, false);
    if (!results.hidden) focusTarget(results);
  });
  search.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !resultsButton.hidden) {
      event.preventDefault();
      resultsButton.click();
    }
  });

  function focusTarget(target) {
    target.setAttribute('tabindex', '-1');
    target.scrollIntoView({block: 'start', behavior: 'instant'});
    target.focus({preventScroll: true});
  }
  function clearSearch() {
    if (!search.value) return;
    search.value = '';
    search.dispatchEvent(new Event('input', {bubbles: true}));
  }
  function pageFor(target) {
    return target && (target.closest('section.sec') || target.closest('#toc'));
  }
  function hashTarget() {
    try {
      return document.getElementById(decodeURIComponent(location.hash.slice(1)));
    } catch {
      return null;
    }
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    if (target === main) {
      focusTarget(main);
      return;
    }
    clearSearch();
    if (open) setOpen(false, false);
    const page = pageFor(target);
    if (page) showPage(page);
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    focusTarget(target);
  });

  window.addEventListener('hashchange', () => {
    clearSearch();
    if (open) setOpen(false, false);
    const target = hashTarget();
    showPage(pageFor(target) || toc);
    if (target) focusTarget(target);
    else window.scrollTo({top: 0, behavior: 'instant'});
  });
  document.body.classList.add('nav-ready');
  setOpen(false, false);
  showPage(pageFor(hashTarget()) || toc);
  window.addEventListener('load', () => {
    const target = hashTarget();
    if (target) focusTarget(target);
  }, {once: true});
})();
