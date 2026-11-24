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
  const targets = [toc, ...sections];
  let activeId = '';
  let open = false;
  let frame = 0;

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
    scheduleUpdate();
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

  function updateSearch() {
    const searching = !!search.value.trim();
    const matches = sections.filter(section => !section.hidden);
    document.querySelector('.hero').hidden = searching;
    document.querySelectorAll('.chapter-pagination').forEach(nav => nav.hidden = searching);
    status.textContent = searching ? (matches.length ? 'Найдено тем: ' + matches.length : 'Ничего не найдено') : '';
    resultsButton.hidden = !searching || !matches.length;
    if (searching) {
      mark('');
      current.textContent = 'Результаты поиска';
      window.scrollTo({top: 0, behavior: 'instant'});
    } else scheduleUpdate();
  }
  search.addEventListener('input', updateSearch);
  document.getElementById('clear').addEventListener('click', updateSearch);
  resultsButton.addEventListener('click', () => {
    const first = sections.find(section => !section.hidden);
    setOpen(false, false);
    if (first) focusTarget(first);
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
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    clearSearch();
    if (open) setOpen(false, false);
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    focusTarget(target);
    if (targets.includes(target)) mark(target.id);
  });

  function updateActive() {
    frame = 0;
    if (search.value.trim()) return;
    let active = toc;
    const threshold = header.getBoundingClientRect().bottom + 36;
    targets.forEach(target => {
      if (!target.hidden && target.getBoundingClientRect().top <= threshold) active = target;
    });
    mark(active.id);
  }
  function scheduleUpdate() {
    if (!frame) frame = requestAnimationFrame(updateActive);
  }
  window.addEventListener('scroll', scheduleUpdate, {passive: true});
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', () => {
    clearSearch();
    if (open) setOpen(false, false);
    const target = document.getElementById(location.hash.slice(1));
    if (target) focusTarget(target);
    scheduleUpdate();
  });
  document.body.classList.add('nav-ready');
  setOpen(false, false);
  updateActive();
  window.addEventListener('load', () => {
    const target = document.getElementById(location.hash.slice(1));
    if (target) focusTarget(target);
    scheduleUpdate();
  }, {once: true});
})();
