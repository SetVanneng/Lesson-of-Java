/* ==========================================================================
   Java ភាសាខ្មែរ — Application logic
   Vanilla JS. No build step. Works from file:// or Live Server.
   ========================================================================== */

(function () {
  "use strict";

  const LESSONS_KM = window.JAVA_LESSONS || [];
  const PROJECTS_KM = window.JAVA_PROJECTS || [];
  const REF_KM = window.JAVA_REFERENCE || {};
  const LESSONS_EN = window.JAVA_LESSONS_EN || LESSONS_KM;
  const PROJECTS_EN = window.JAVA_PROJECTS_EN || PROJECTS_KM;
  const REF_EN = window.JAVA_REFERENCE_EN || REF_KM;

  let LESSONS = LESSONS_KM;
  let PROJECTS = PROJECTS_KM;
  let REF = REF_KM;

  function syncContentLang() {
    const useEnglish = state.lang === "en";
    LESSONS = useEnglish ? LESSONS_EN : LESSONS_KM;
    PROJECTS = useEnglish ? PROJECTS_EN : PROJECTS_KM;
    REF = useEnglish ? REF_EN : REF_KM;
  }

  const STORE_KEY = "javaKhmer.v1";
  const LEVEL_NAMES = {
    km: { 1: "ចាប់ផ្តើម", 2: "មធ្យម", 3: "ប្រកួតប្រជែង" },
    en: { 1: "Beginner", 2: "Intermediate", 3: "Challenge" }
  };
  const PART_NAMES = {
    1: "Introduction to Java",
    2: "Environment Setup",
    3: "Java Fundamentals",
    4: "Variables & Data Types",
    5: "Operators",
    6: "User Input",
    7: "Conditional Statements",
    8: "Loops",
    9: "Arrays",
    10: "Strings",
    11: "Methods",
    12: "OOP",
    13: "Advanced Fundamentals"
  };

  const state = {
    theme: "light",
    lang: "km",
    collapsed: false,
    completed: [],
    bookmarks: [],
    quiz: {},
    finalTest: null,
    last: ""
  };

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ------------------------------------------------------------------------
     Language
     ------------------------------------------------------------------------ */

  function tr(km, en) {
    return state.lang === "en" ? en : km;
  }

  function lessonTitle(lesson) {
    if (!lesson) return "";
    return state.lang === "en"
      ? lesson.title || lesson.titleKh || ""
      : lesson.titleKh || lesson.title || "";
  }

  function levelName(level) {
    const names = LEVEL_NAMES[state.lang] || LEVEL_NAMES.km;
    return names[level] || "";
  }

  function applyLang() {
    syncContentLang();
    const isEn = state.lang === "en";
    document.documentElement.setAttribute("lang", isEn ? "en" : "km");

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", isEn
        ? "Learn Java in Khmer — detailed lessons, examples, exercises, hands-on projects, and tests for beginners."
        : "វេបសាយរៀន Java ជាភាសាខ្មែរ — មេរៀនលម្អិត ឧទាហរណ៍ លំហាត់ កម្មវិធីអនុវត្ត និងតេស្តសម្រាប់អ្នកចាប់ផ្តើម។");
    }

    const brandTitle = $(".brand-title");
    if (brandTitle) brandTitle.textContent = tr("Java ភាសាខ្មែរ", "Java in Khmer");

    const langBtn = $("#langBtn");
    if (langBtn) {
      const label = $(".lang-label", langBtn);
      if (label) label.textContent = isEn ? "ខ្មែរ" : "EN";
      langBtn.setAttribute("aria-label", isEn ? "ប្តូរទៅភាសាខ្មែរ" : "Switch to English");
      langBtn.setAttribute("title", isEn ? "ប្តូរទៅភាសាខ្មែរ" : "Switch to English");
    }

    const collapseBtn = $("#collapseBtn");
    if (collapseBtn) {
      collapseBtn.setAttribute("aria-label", tr("បង្រួម/ពង្រីក Sidebar", "Collapse/expand sidebar"));
      collapseBtn.setAttribute("title", state.collapsed ? tr("ពង្រីក Sidebar", "Expand sidebar") : tr("បង្រួម Sidebar", "Collapse sidebar"));
    }

    const progressLabel = $(".progress-row span");
    if (progressLabel) progressLabel.textContent = tr("ការរីកចម្រើនសរុប", "Total progress");

    const sidebarFootNote = $(".sidebar-foot-note");
    if (sidebarFootNote) {
      sidebarFootNote.textContent = tr(
        "រៀនបានគ្រប់ពេល · រក្សាទុកការរីកចម្រើនដោយស្វ័យប្រវត្តិ",
        "Learn anytime · Progress saved automatically"
      );
    }

    const menuBtn = $("#menuBtn");
    if (menuBtn) menuBtn.setAttribute("aria-label", tr("បើកម៉ឺនុយ", "Open menu"));

    const searchInput = $("#searchInput");
    if (searchInput) {
      searchInput.setAttribute("placeholder", tr("ស្វែងរកមេរៀន លំហាត់...", "Search lessons, exercises..."));
      searchInput.setAttribute("aria-label", tr("ស្វែងរកមេរៀន", "Search lessons"));
    }

    const searchCloseBtn = $("#searchCloseBtn");
    if (searchCloseBtn) searchCloseBtn.setAttribute("aria-label", tr("បិទការស្វែងរក", "Close search"));

    const footer = $(".site-footer");
    if (footer) {
      footer.innerHTML =
        '<span class="footer-owner">' +
          tr("អ្នកបង្កើត និងម្ចាស់គេហទំព័រ៖ ", "Creator and site owner: ") +
          "<strong>Set Vanneng</strong> · © 2026</span>" +
        "<span>" + tr("Java ភាសាខ្មែរ · សម្រាប់ការរៀន និងការបង្រៀន", "Java in Khmer · For learning and teaching") + "</span>" +
        "<span>" + tr("យោងតាម ", "Based on ") +
          '<a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener">Oracle Java Docs</a>' +
          tr(" និង ", " and ") +
          '<a href="https://dev.java/learn/" target="_blank" rel="noopener">Dev.java</a></span>';
    }

    applyTheme();
    buildSidebar();
    updateProgressUI();
    updateBookmarkBtn(getCurrentLessonId());
  }

  function toggleLang() {
    state.lang = state.lang === "en" ? "km" : "en";
    saveState();
    applyLang();
    buildSearchIndex();
    navigate();
    const searchInput = $("#searchInput");
    if (searchInput && searchInput.value.trim()) runSearch(searchInput.value);
  }

  function getCurrentLessonId() {
    const match = location.hash.match(/#\/lesson\/([^/?]+)/);
    return match && lessonById(match[1]) ? match[1] : null;
  }

  /* ------------------------------------------------------------------------
     Utilities
     ------------------------------------------------------------------------ */

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          state.theme = "dark";
        }
        return;
      }
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        if (parsed.theme === "dark" || parsed.theme === "light") state.theme = parsed.theme;
        if (parsed.lang === "km" || parsed.lang === "en") state.lang = parsed.lang;
        if (typeof parsed.collapsed === "boolean") state.collapsed = parsed.collapsed;
        if (Array.isArray(parsed.completed)) state.completed = parsed.completed.filter((x) => typeof x === "string");
        if (Array.isArray(parsed.bookmarks)) state.bookmarks = parsed.bookmarks.filter((x) => typeof x === "string");
        if (parsed.quiz && typeof parsed.quiz === "object") state.quiz = parsed.quiz;
        if (parsed.finalTest) state.finalTest = parsed.finalTest;
        if (typeof parsed.last === "string") state.last = parsed.last;
      }
    } catch (err) {
      console.warn("មិនអាចអាន localStorage បានទេ", err);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn("មិនអាចរក្សាទុក state បានទេ", err);
    }
  }

  let toastTimer = null;
  function toast(message) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }

  function lessonById(id) {
    return LESSONS.find((l) => l.id === id);
  }

  function projectById(id) {
    return PROJECTS.find((p) => p.id === id);
  }

  function isDone(id) {
    return state.completed.indexOf(id) !== -1;
  }

  function isBookmarked(id) {
    return state.bookmarks.indexOf(id) !== -1;
  }

  function exerciseCount() {
    return LESSONS.reduce((total, lesson) => total + (lesson.exercises ? lesson.exercises.length : 0), 0);
  }

  function quizQuestionCount() {
    return LESSONS.reduce((total, lesson) => total + (lesson.quiz ? lesson.quiz.length : 0), 0);
  }

  function difficultyDots(level) {
    let html = '<span class="difficulty" title="' + escapeHtml(tr("កម្រិតពិបាក ", "Difficulty ")) + level + '/3">';
    for (let i = 1; i <= 3; i++) html += '<i class="' + (i <= level ? "on" : "") + '"></i>';
    return html + "</span>";
  }

  /* ------------------------------------------------------------------------
     Icons
     ------------------------------------------------------------------------ */

  const ICON = {
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>',
    glossary: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2V5z"/><path d="M8 7h7M8 11h7M8 15h4"/></svg>',
    key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M10.8 12.2 20 3M17 6l2 2M14 9l2 2"/></svg>',
    bug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="12" rx="5"/><path d="M9 7V5a3 3 0 0 1 6 0v2M3 12h4M17 12h4M4 18l3-2M20 18l-3-2M4 6l3 2M20 6l-3 2"/></svg>',
    cheat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12v17l-6-4-6 4V4z"/></svg>',
    test: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v4H9z"/><path d="M7 5H5v16h14V5h-2"/><path d="m8 13 2.5 2.5L16 10"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>'
  };

  /* ------------------------------------------------------------------------
     Render primitives
     ------------------------------------------------------------------------ */

  function codeCard(title, code, note) {
    return (
      '<div class="code-card">' +
        '<div class="code-head">' +
          '<span class="code-title">' + escapeHtml(title || "Java") + "</span>" +
          '<button class="copy-btn" type="button">' + tr("ចម្លង", "Copy") + "</button>" +
        "</div>" +
        "<pre><code>" + escapeHtml(code) + "</code></pre>" +
        (note ? '<div class="code-note">' + escapeHtml(note) + "</div>" : "") +
      "</div>"
    );
  }

  function outputCard(output) {
    if (!output) return "";
    return (
      '<div class="output-card">' +
        '<div class="output-head">' + tr("ទិន្នផលរំពឹង (Output)", "Expected output") + "</div>" +
        "<pre>" + escapeHtml(output) + "</pre>" +
      "</div>"
    );
  }

  function syntaxCard(item) {
    return (
      '<div class="syntax-card">' +
        '<div class="syntax-head">' + escapeHtml(item.label || "Syntax") + "</div>" +
        "<pre><code>" + escapeHtml(item.code) + "</code></pre>" +
        (item.note ? '<div class="code-note">' + escapeHtml(item.note) + "</div>" : "") +
      "</div>"
    );
  }

  /* ------------------------------------------------------------------------
     Theme, sidebar, progress
     ------------------------------------------------------------------------ */

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const isDark = state.theme === "dark";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", isDark ? "#171a20" : "#f5f6f8");
    $$("#themeBtn, #themeBtnSide").forEach((btn) => {
      btn.innerHTML = isDark
        ? '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
        : '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
      btn.setAttribute("title", isDark ? tr("ប្តូរទៅ Light mode", "Switch to Light mode") : tr("ប្តូរទៅ Dark mode", "Switch to Dark mode"));
      btn.setAttribute("aria-label", isDark ? tr("ប្តូរទៅ Light mode", "Switch to Light mode") : tr("ប្តូរទៅ Dark mode", "Switch to Dark mode"));
    });
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    applyTheme();
  }

  function setSidebarCollapsed(collapsed) {
    state.collapsed = collapsed;
    document.body.classList.toggle("sidebar-collapsed", collapsed);
    saveState();
  }

  function openMobileSidebar(open) {
    document.body.classList.toggle("sidebar-open", open);
    const btn = $("#menuBtn");
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  }

  function buildSidebar() {
    const nav = $("#sidebarNav");
    if (!nav) return;
    let html = '<div class="nav-group-label">' + tr("មេរៀន Java", "Java Lessons") + '</div><ul class="nav-list">';

    LESSONS.forEach((lesson) => {
      html +=
        '<li><a class="nav-link" href="#/lesson/' + lesson.id + '" data-route="/lesson/' + lesson.id + '">' +
          '<span class="nav-num">' + String(lesson.num).padStart(2, "0") + "</span>" +
          '<span class="nav-ico">' + ICON.book + "</span>" +
          '<span class="nav-text">' + escapeHtml(lessonTitle(lesson)) + "</span>" +
          '<svg class="nav-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' +
        "</a></li>";
    });
    html += "</ul>";

    if (PROJECTS.length) {
      html += '<div class="nav-group-label">' + tr("គម្រោង", "Projects") + '</div><ul class="nav-list">';
      PROJECTS.forEach((project) => {
        html +=
          '<li><a class="nav-link" href="#/project/' + project.id + '" data-route="/project/' + project.id + '">' +
            '<span class="nav-num">P' + project.num + "</span>" +
            '<span class="nav-ico">' + ICON.folder + "</span>" +
            '<span class="nav-text">' + escapeHtml(project.title) + "</span>" +
          "</a></li>";
      });
      html += "</ul>";
    }

    const refs = [
      ["/roadmap", "ផែនទីរៀន", "Learning Roadmap", ICON.map],
      ["/glossary", "វចនានុក្រម", "Java Glossary", ICON.glossary],
      ["/keywords", "ពាក្យគន្លឹះ", "Keywords", ICON.key],
      ["/errors", "កំហុសញឹកញាប់", "Common Errors", ICON.bug],
      ["/cheatsheet", "សន្លឹកសង្ខេប", "Cheat Sheet", ICON.cheat],
      ["/bookmarks", "សញ្ញាសម្គាល់", "Bookmarks", ICON.bookmark],
      ["/final-test", "តេស្តចុងក្រោយ", "Final Test", ICON.test]
    ];
    html += '<div class="nav-group-label">' + tr("ឯកសារជំនួយ", "Reference") + '</div><ul class="nav-list">';
    refs.forEach(([route, kmLabel, enLabel, icon]) => {
      html +=
        '<li><a class="nav-link" href="#' + route + '" data-route="' + route + '">' +
          '<span class="nav-ico">' + icon + "</span>" +
          '<span class="nav-text">' + tr(kmLabel, enLabel) + "</span>" +
        "</a></li>";
    });
    html += "</ul>";

    nav.innerHTML = html;
  }

  function updateProgressUI() {
    const total = LESSONS.length || 1;
    const done = state.completed.filter((id) => lessonById(id)).length;
    const percent = Math.round((done / total) * 100);
    const bar = $("#sideProgressBar");
    const text = $("#sideProgressText");
    const note = $("#sideProgressNote");
    if (bar) bar.style.width = percent + "%";
    if (text) text.textContent = percent + "%";
    if (note) note.textContent = done + " / " + LESSONS.length + tr(" មេរៀនបានបញ្ចប់", " lessons completed");

    $$("#sidebarNav .nav-link[data-route^='/lesson/']").forEach((link) => {
      const id = link.getAttribute("data-route").split("/")[2];
      link.classList.toggle("is-done", isDone(id));
    });
  }

  function updateActiveNav() {
    const hash = location.hash || "#/home";
    const path = hash.replace(/^#/, "").split("?")[0];
    $$("#sidebarNav .nav-link").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("data-route") === path);
    });
  }

  function updateReadingProgress() {
    const bar = $("#readingBar");
    if (!bar) return;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const percent = scrollable > 10 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
    bar.style.width = percent + "%";
  }

  function updateBookmarkBtn(lessonId) {
    const btn = $("#bookmarkBtn");
    if (!btn) return;
    if (!lessonId) {
      btn.hidden = true;
      return;
    }
    btn.hidden = false;
    const active = isBookmarked(lessonId);
    btn.setAttribute("aria-label", active ? tr("ដកសញ្ញាសម្គាល់ចេញ", "Remove bookmark") : tr("ដាក់សញ្ញាសម្គាល់មេរៀន", "Bookmark this lesson"));
    btn.innerHTML = active
      ? '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12v17l-6-4-6 4V4z"/></svg>'
      : ICON.bookmark;
    btn.style.color = active ? "var(--accent)" : "";
  }

  function setCrumbs(html) {
    const el = $("#crumbs");
    if (el) el.innerHTML = html;
  }

  /* ------------------------------------------------------------------------
     Router
     ------------------------------------------------------------------------ */

  function navigate() {
    const raw = location.hash.replace(/^#/, "") || "/home";
    const parts = raw.split("?");
    const path = parts[0] || "/home";
    const params = new URLSearchParams(parts[1] || "");
    const segments = path.split("/").filter(Boolean);
    const view = $("#view");
    if (!view) return;

    document.body.classList.remove("sidebar-open");
    document.body.style.overflow = "";
    $("#menuBtn") && $("#menuBtn").setAttribute("aria-expanded", "false");

    let html = "";
    let bookmarkTarget = null;

    if (segments[0] === "lesson" && segments[1]) {
      const lesson = lessonById(segments[1]);
      if (lesson) {
        html = renderLesson(lesson);
        bookmarkTarget = lesson.id;
        state.last = lesson.id;
        saveState();
        document.title = lessonTitle(lesson) + " — " + tr("Java ភាសាខ្មែរ", "Java in Khmer");
        setCrumbs('<span>' + tr("មេរៀន", "Lessons") + '</span><span class="sep">/</span><span>PART ' + String(lesson.part).padStart(2, "0") + '</span><span class="sep">/</span><span class="crumb-strong">' + escapeHtml(lessonTitle(lesson)) + "</span>");
      }
    } else if (segments[0] === "project" && segments[1]) {
      const project = projectById(segments[1]);
      if (project) {
        html = renderProject(project);
        document.title = project.title + " — " + tr("Java គម្រោង", "Java Projects");
        setCrumbs('<span>' + tr("គម្រោង", "Projects") + '</span><span class="sep">/</span><span class="crumb-strong">' + escapeHtml(project.title) + "</span>");
      }
    } else if (segments[0] === "glossary") {
      html = renderGlossary();
      document.title = tr("វចនានុក្រម Java — Java ភាសាខ្មែរ", "Java Glossary — Java in Khmer");
      setCrumbs('<span>' + tr("ឯកសារជំនួយ", "Reference") + '</span><span class="sep">/</span><span class="crumb-strong">' + tr("វចនានុក្រម", "Glossary") + '</span>');
    } else if (segments[0] === "keywords") {
      html = renderKeywords();
      document.title = tr("ពាក្យគន្លឹះ Java — Java ភាសាខ្មែរ", "Java Keywords — Java in Khmer");
      setCrumbs('<span>' + tr("ឯកសារជំនួយ", "Reference") + '</span><span class="sep">/</span><span class="crumb-strong">' + tr("ពាក្យគន្លឹះ", "Keywords") + '</span>');
    } else if (segments[0] === "errors") {
      html = renderErrors();
      document.title = tr("កំហុសញឹកញាប់ — Java ភាសាខ្មែរ", "Common Errors — Java in Khmer");
      setCrumbs('<span>' + tr("ឯកសារជំនួយ", "Reference") + '</span><span class="sep">/</span><span class="crumb-strong">' + tr("កំហុស", "Errors") + '</span>');
    } else if (segments[0] === "cheatsheet") {
      html = renderCheatsheet();
      document.title = tr("សន្លឹកសង្ខេប Java — Java ភាសាខ្មែរ", "Java Cheat Sheet — Java in Khmer");
      setCrumbs('<span>' + tr("ឯកសារជំនួយ", "Reference") + '</span><span class="sep">/</span><span class="crumb-strong">' + tr("សន្លឹកសង្ខេប", "Cheat Sheet") + '</span>');
    } else if (segments[0] === "roadmap") {
      html = renderRoadmapPage();
      document.title = tr("ផែនទីរៀន — Java ភាសាខ្មែរ", "Learning Roadmap — Java in Khmer");
      setCrumbs('<span>' + tr("ឯកសារជំនួយ", "Reference") + '</span><span class="sep">/</span><span class="crumb-strong">' + tr("ផែនទីរៀន", "Roadmap") + '</span>');
    } else if (segments[0] === "bookmarks") {
      html = renderBookmarks();
      document.title = tr("សញ្ញាសម្គាល់ — Java ភាសាខ្មែរ", "Bookmarks — Java in Khmer");
      setCrumbs('<span>' + tr("ឯកសារជំនួយ", "Reference") + '</span><span class="sep">/</span><span class="crumb-strong">' + tr("សញ្ញាសម្គាល់", "Bookmarks") + '</span>');
    } else if (segments[0] === "final-test") {
      html = renderFinalTest();
      document.title = tr("តេស្តចុងក្រោយ — Java ភាសាខ្មែរ", "Final Test — Java in Khmer");
      setCrumbs('<span>' + tr("ឯកសារជំនួយ", "Reference") + '</span><span class="sep">/</span><span class="crumb-strong">' + tr("តេស្តចុងក្រោយ", "Final Test") + '</span>');
    }

    if (!html) {
      html = renderHome();
      document.title = tr(
        "Java ភាសាខ្មែរ — សៀវភៅរៀន Java ពីដំបូងដល់ OOP",
        "Java in Khmer — Learn Java from the basics to OOP"
      );
      setCrumbs('<span class="crumb-strong">' + tr("ទំព័រដើម", "Home") + '</span>');
    }

    view.innerHTML = '<div class="view-inner">' + html + "</div>";
    updateActiveNav();
    updateBookmarkBtn(bookmarkTarget);
    updateProgressUI();
    updateReadingProgress();
    bindViewEvents();
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousScrollBehavior;
    view.focus({ preventScroll: true });

    const target = params.get("target");
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.style.outline = "2px solid var(--accent)";
          el.style.outlineOffset = "3px";
          setTimeout(() => { el.style.outline = ""; el.style.outlineOffset = ""; }, 2400);
        }
      }, 220);
    }
  }

  /* ------------------------------------------------------------------------
     Home
     ------------------------------------------------------------------------ */

  function renderHome() {
    const done = state.completed.filter((id) => lessonById(id)).length;
    const percent = Math.round((done / (LESSONS.length || 1)) * 100);
    const continueLesson = lessonById(state.last) || LESSONS.find((l) => !isDone(l.id)) || LESSONS[0];

    let partsHtml = "";
    const parts = [];
    LESSONS.forEach((lesson) => {
      let part = parts.find((p) => p.num === lesson.part);
      if (!part) {
        part = { num: lesson.part, title: lesson.partTitle || PART_NAMES[lesson.part] || "Part", lessons: [] };
        parts.push(part);
      }
      part.lessons.push(lesson);
    });

    parts.forEach((part) => {
      let items = "";
      part.lessons.forEach((lesson) => {
        items +=
          '<li><a href="#/lesson/' + lesson.id + '"><span class="num">' + String(lesson.num).padStart(2, "0") + "</span>" +
          "<span>" + escapeHtml(lessonTitle(lesson)) + "</span>" +
          (isDone(lesson.id) ? '<span class="done">✓</span>' : "") +
          "</a></li>";
      });
      partsHtml +=
        '<article class="part-card">' +
          '<div class="part-top"><span class="part-tag">PART ' + String(part.num).padStart(2, "0") + '</span><span class="part-count">' + part.lessons.length + tr(" មេរៀន", " lessons") + "</span></div>" +
          "<h3>" + escapeHtml(part.title) + "</h3>" +
          "<ul>" + items + "</ul>" +
        "</article>";
    });

    return (
      '<section class="hero">' +
        '<span class="eyebrow">Java · Khmer Edition</span>' +
        '<h1>' + tr('រៀន <span class="accent">Java</span> ពីសូន្យ ដល់ Object-Oriented Programming', 'Learn <span class="accent">Java</span> from zero to Object-Oriented Programming') + '</h1>' +
        '<p class="hero-lead">' + tr("សៀវភៅរៀន Java អនឡាញជាភាសាខ្មែរ សម្រាប់អ្នកចាប់ផ្តើម និងគ្រូបង្រៀន។ មេរៀនលម្អិត ឧទាហរណ៍ពន្យល់បន្ទាត់កូដ លំហាត់ ៣ កម្រិត គម្រោងអនុវត្ត និងតេស្តវាស់ចំណេះដឹង។", "An online Java textbook in Khmer for beginners and teachers. Detailed lessons, line-by-line code explanations, three-level exercises, hands-on projects, and knowledge tests.") + '</p>' +
        '<p class="hero-owner">' + tr("បង្កើត និងគ្រប់គ្រងដោយ ", "Created and maintained by ") + '<strong>Set Vanneng</strong></p>' +
        '<div class="hero-actions">' +
          '<a class="btn btn-primary" href="#/lesson/' + (continueLesson ? continueLesson.id : LESSONS[0].id) + '">' +
            ICON.book + (done > 0 ? tr("បន្តរៀន", "Continue learning") : tr("ចាប់ផ្តើមមេរៀនទី១", "Start lesson 1")) +
          "</a>" +
          '<a class="btn" href="#/roadmap">' + tr("មើល Roadmap", "View Roadmap") + '</a>' +
          '<a class="btn btn-ghost" href="#/final-test">' + tr("តេស្តចុងក្រោយ", "Final test") + '</a>' +
        "</div>" +
      "</section>" +

      '<div class="stats-grid">' +
        '<div class="stat-card"><div class="stat-value">' + LESSONS.length + '</div><div class="stat-label">' + tr("មេរៀនលម្អិត", "Detailed lessons") + '</div></div>' +
        '<div class="stat-card"><div class="stat-value">' + PROJECTS.length + '</div><div class="stat-label">' + tr("គម្រោងអនុវត្ត", "Hands-on projects") + '</div></div>' +
        '<div class="stat-card"><div class="stat-value">' + exerciseCount() + '</div><div class="stat-label">' + tr("លំហាត់អនុវត្ត", "Exercises") + '</div></div>' +
        '<div class="stat-card"><div class="stat-value">' + percent + '%</div><div class="stat-label">' + tr("អ្នកបានបញ្ចប់", "Completed") + '</div></div>' +
      "</div>" +

      '<div class="section-head"><h2>' + tr("បន្តពីកន្លែងដែលអ្នកឈប់", "Continue where you left off") + '</h2></div>' +
      (continueLesson
        ? '<a class="continue-card" href="#/lesson/' + continueLesson.id + '">' +
            '<span class="continue-icon">' + ICON.book + "</span>" +
            '<span class="continue-body">' +
              '<span class="continue-kicker">' + (isDone(continueLesson.id) ? tr("មេរៀនចុងក្រោយ", "Last lesson") : tr("បន្តរៀន", "Continue")) + "</span>" +
              '<span class="continue-title">' + escapeHtml(lessonTitle(continueLesson)) + "</span>" +
              '<span class="continue-meta">PART ' + String(continueLesson.part).padStart(2, "0") + " · " + continueLesson.time + " · " + difficultyDots(continueLesson.level) + "</span>" +
            "</span>" +
            '<span class="chip accent">' + tr("បើកមេរៀន ", "Open lesson ") + ICON.arrowRight + "</span>" +
          "</a>"
        : "") +

      '<div class="section-head"><h2>' + tr("មាតិកាមេរៀនតាម Part", "Lessons by Part") + '</h2><p>' + tr("គ្របដណ្តប់ពីមូលដ្ឋានដល់ OOP និង Java បន្ថែម", "From fundamentals to OOP and beyond") + '</p></div>' +
      '<div class="parts-grid">' + partsHtml + "</div>" +

      '<div class="section-head"><h2>' + tr("គម្រោងអនុវត្ត", "Hands-on projects") + '</h2><p>' + tr("រៀនដោយការសរសេរកម្មវិធីពិត", "Learn by building real programs") + '</p></div>' +
      '<div class="project-grid">' +
        PROJECTS.slice(0, 4).map((p) =>
          '<a class="project-card" href="#/project/' + p.id + '">' +
            '<span class="project-num">PROJECT ' + String(p.num).padStart(2, "0") + "</span>" +
            "<h3>" + escapeHtml(p.title) + "</h3>" +
            "<p>" + escapeHtml(p.short) + "</p>" +
            '<span class="tags">' + (p.concepts || []).slice(0, 3).map((c) => '<span class="tag">' + escapeHtml(c) + "</span>").join("") + "</span>" +
          "</a>"
        ).join("") +
      "</div>" +
      '<div style="margin-top:14px"><a class="btn" href="#/lesson/final-projects">' + tr("មើលគម្រោងទាំង " + PROJECTS.length, "View all " + PROJECTS.length + " projects") + " " + ICON.arrowRight + "</a></div>" +

      '<div class="section-head"><h2>' + tr("Learning Roadmap ខ្លីៗ", "Learning Roadmap at a glance") + '</h2></div>' +
      '<ol class="roadmap">' + homeRoadmap() + "</ol>"
    );
  }

  function homeRoadmap() {
    const phases = (REF.roadmap || []).slice(0, 4);
    if (!phases.length) return "";
    return phases.map((p) =>
      '<li><span class="roadmap-dot"></span>' +
        '<div class="roadmap-title">' + escapeHtml(p.title) + "</div>" +
        '<div class="roadmap-desc">' + escapeHtml(p.desc || "") + "</div>" +
      "</li>"
    ).join("");
  }

  /* ------------------------------------------------------------------------
     Lesson renderer
     ------------------------------------------------------------------------ */

  function renderLesson(lesson) {
    let html = '<article class="lesson-page">';

    html +=
      '<header class="lesson-head">' +
        '<div class="lesson-kicker">' +
          '<span class="chip accent">PART ' + String(lesson.part).padStart(2, "0") + " · " + escapeHtml(lesson.partTitle || PART_NAMES[lesson.part] || "") + "</span>" +
          '<span class="chip">' + ICON.book + lesson.time + "</span>" +
          '<span class="chip">' + tr("កម្រិត ", "Level ") + difficultyDots(lesson.level) + "</span>" +
          (isDone(lesson.id) ? '<span class="chip ok">' + tr("បានបញ្ចប់ ✓", "Completed ✓") + '</span>' : "") +
        "</div>" +
        '<div class="lesson-title-row">' +
          "<div>" +
            "<h1>" + escapeHtml(lessonTitle(lesson)) + "</h1>" +
            '<p class="lesson-intro">' + lesson.intro + "</p>" +
          "</div>" +
          '<div class="lesson-tools">' +
            '<button class="btn btn-sm" id="completeBtn" type="button" data-id="' + lesson.id + '">' +
              (isDone(lesson.id) ? tr("✓ បានបញ្ចប់", "✓ Completed") : tr("សម្គាល់ថាបានបញ្ចប់", "Mark as completed")) +
            "</button>" +
          "</div>" +
        "</div>" +
      "</header>";

    if (lesson.objectives && lesson.objectives.length) {
      html += '<section class="objectives"><h2>' + tr("គោលបំណងនៃមេរៀន (Learning Objectives)", "Learning Objectives") + '</h2><ul>' +
        lesson.objectives.map((o) => "<li>" + o + "</li>").join("") +
      "</ul></section>";
    }

    html += '<div class="lesson-body">';

    (lesson.sections || []).forEach((section) => {
      html += "<h2>" + section.title + "</h2>" + section.html;
    });

    if (lesson.terms && lesson.terms.length) {
      html += '<h2>' + tr("ពាក្យបច្ចេកទេសសំខាន់", "Key terms") + '</h2><dl class="term-grid">';
      lesson.terms.forEach((t) => {
        const termLabel = state.lang === "en" ? escapeHtml(t.en) : escapeHtml(t.en) + " — " + escapeHtml(t.kh);
        html += '<div class="term"><dt>' + termLabel + "</dt><dd>" + t.text + "</dd></div>";
      });
      html += "</dl>";
    }

    if (lesson.syntax && lesson.syntax.length) {
      html += "<h2>" + tr("Syntax សំខាន់", "Key syntax") + "</h2>";
      lesson.syntax.forEach((item) => { html += syntaxCard(item); });
    }

    if (lesson.examples && lesson.examples.length) {
      html += "<h2>" + tr("ឧទាហរណ៍ពន្យល់បន្ទាត់កូដ", "Examples with line-by-line explanations") + "</h2>";
      lesson.examples.forEach((ex, i) => {
        html += '<div class="example-block"><h3><span class="example-num">' + (i + 1) + "</span>" + escapeHtml(ex.title) + "</h3>";
        if (ex.desc) html += "<p>" + ex.desc + "</p>";
        html += codeCard(ex.file || "Example" + (i + 1) + ".java", ex.code, ex.note);
        if (ex.output) html += outputCard(ex.output);
        if (ex.lines && ex.lines.length) {
          html += '<details class="reveal" open><summary>' + tr("ការពន្យល់បន្ទាត់កូដសំខាន់", "Key line explanations") + '</summary><div class="reveal-body"><ul class="line-explain">';
          ex.lines.forEach((line) => { html += "<li>" + line + "</li>"; });
          html += "</ul></div></details>";
        }
        html += "</div>";
      });
    }

    if (lesson.mistakes && lesson.mistakes.length) {
      html += "<h2>" + tr("កំហុសញឹកញាប់របស់អ្នកចាប់ផ្តើម", "Common beginner mistakes") + '</h2><div class="mistake-list">';
      lesson.mistakes.forEach((m) => {
        html += '<div class="mistake">' + m.text;
        if (m.fix) html += "<p><strong>" + tr("ដំណោះស្រាយ៖", "Fix:") + "</strong> " + m.fix + "</p>";
        html += "</div>";
      });
      html += "</div>";
    }

    if (lesson.tips && lesson.tips.length) {
      html += '<div class="callout tip"><div class="callout-title">' + tr("ដំបូន្មានអនុវត្ត (Best Practices)", "Best Practices") + '</div><ul>';
      lesson.tips.forEach((t) => { html += "<li>" + t + "</li>"; });
      html += "</ul></div>";
    }

    if (lesson.exercises && lesson.exercises.length) {
      html += '<h2 id="exercises">' + tr("លំហាត់អនុវត្ត", "Practice exercises") + '</h2><p class="muted small">' + tr("សាកល្បងសរសេរកូដដោយខ្លួនឯងជាមុន រួចទើបបើកដំណោះស្រាយ។", "Try writing the code yourself first, then reveal the solution.") + '</p>';
      [1, 2, 3].forEach((level) => {
        const items = lesson.exercises.filter((e) => e.level === level);
        if (!items.length) return;
        html += '<h3>Level ' + level + " — " + levelName(level) + "</h3>";
        items.forEach((ex, idx) => {
          const index = lesson.exercises.indexOf(ex) + 1;
          const inputText = ex.input || ex.inputSample;
          html +=
            '<div class="exercise" id="ex-' + lesson.id + "-" + index + '">' +
              '<div class="exercise-head"><span class="exercise-title">' + index + ". " + escapeHtml(ex.title) + "</span>" +
                '<span class="level-badge level-' + level + '">Level ' + level + "</span></div>" +
              "<p>" + ex.desc + "</p>" +
              (ex.requirements && ex.requirements.length ? '<div class="req"><strong>' + tr("តម្រូវការ៖", "Requirements:") + '</strong><ul>' + ex.requirements.map((r) => "<li>" + r + "</li>").join("") + "</ul></div>" : "") +
              (inputText || ex.outputSample
                ? '<div class="io-sample">' +
                    (inputText ? "<pre><strong>Input:</strong>\n" + escapeHtml(inputText) + "</pre>" : "") +
                    (ex.outputSample ? "<pre><strong>Output:</strong>\n" + escapeHtml(ex.outputSample) + "</pre>" : "") +
                  "</div>"
                : "") +
              (ex.hint ? '<details class="reveal"><summary>' + tr("បង្ហាញតម្រុយ (Hint)", "Show hint") + '</summary><div class="reveal-body">' + ex.hint + "</div></details>" : "") +
              '<button class="btn btn-sm solution-toggle" type="button" aria-expanded="false">' + tr("បង្ហាញដំណោះស្រាយ", "Show solution") + '</button>' +
              '<div class="solution">' +
                (ex.solutionCode ? codeCard("Solution.java", ex.solutionCode) : "") +
                (ex.solution ? "<p>" + ex.solution + "</p>" : "") +
                (ex.outputSample ? outputCard(ex.outputSample) : "") +
              "</div>" +
            "</div>";
        });
      });
    }

    if (lesson.quiz && lesson.quiz.length) {
      html += '<h2>' + tr("តេស្តខ្លីៗ (Quiz)", "Quick quiz") + '</h2><div class="quiz" data-quiz-id="' + lesson.id + '"></div>';
    }

    if (lesson.summary && lesson.summary.length) {
      html += '<h2>' + tr("សេចក្តីសង្ខេបមេរៀន", "Lesson summary") + '</h2><div class="summary-box"><ul>' +
        lesson.summary.map((s) => "<li>" + s + "</li>").join("") +
      "</ul></div>";
    }

    if (lesson.takeaways && lesson.takeaways.length) {
      html += '<h2>' + tr("ចំណុចសំខាន់ត្រូវចងចាំ", "Key takeaways") + '</h2><div class="takeaways">' +
        lesson.takeaways.map((t, i) =>
          '<div class="takeaway"><b>Takeaway ' + String(i + 1).padStart(2, "0") + "</b>" + t + "</div>"
        ).join("") +
      "</div>";
    }

    html += "</div>";

    if (lesson.sources && lesson.sources.length) {
      html += '<div class="sources"><h2>' + tr("ឯកសារយោង", "References") + '</h2><ul>' +
        lesson.sources.map((s) => '<li><a href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(s.label) + "</a></li>").join("") +
      "</ul></div>";
    }

    const idx = LESSONS.findIndex((l) => l.id === lesson.id);
    const prev = LESSONS[idx - 1];
    const next = LESSONS[idx + 1];
    html += '<nav class="lesson-nav" aria-label="' + tr("ផ្លាស់ប្តូរមេរៀន", "Lesson navigation") + '">';
    html += prev
      ? '<a href="#/lesson/' + prev.id + '"><span class="dir">' + ICON.arrowLeft + tr(" មេរៀនមុន", " Previous lesson") + '</span><span class="name">' + escapeHtml(lessonTitle(prev)) + "</span></a>"
      : "<span></span>";
    html += next
      ? '<a class="next" href="#/lesson/' + next.id + '"><span class="dir">' + tr("មេរៀនបន្ទាប់ ", "Next lesson ") + ICON.arrowRight + '</span><span class="name">' + escapeHtml(lessonTitle(next)) + "</span></a>"
      : '<a class="next" href="#/lesson/final-projects"><span class="dir">' + tr("បន្តទៅ ", "Continue to ") + ICON.arrowRight + '</span><span class="name">Final Projects</span></a>';
    html += "</nav>";

    html += "</article>";
    return html;
  }

  /* ------------------------------------------------------------------------
     Project renderer
     ------------------------------------------------------------------------ */

  function renderProject(project) {
    let html = '<article class="lesson-page">';
    html +=
      '<a class="back-link" href="#/lesson/final-projects">' + ICON.arrowLeft + tr(" ត្រឡប់ទៅគម្រោងទាំងអស់", " Back to all projects") + "</a>" +
      '<header class="lesson-head">' +
        '<div class="lesson-kicker">' +
          '<span class="chip accent">PROJECT ' + String(project.num).padStart(2, "0") + "</span>" +
          '<span class="chip">' + ICON.book + project.time + "</span>" +
          '<span class="chip">' + tr("កម្រិត ", "Level ") + difficultyDots(project.level) + "</span>" +
        "</div>" +
        "<h1>" + escapeHtml(project.title) + "</h1>" +
        '<p class="lesson-intro">' + project.intro + "</p>" +
      "</header>";

    html += '<div class="lesson-body">';
    html += '<div class="pill-row">' + (project.concepts || []).map((c) => '<span class="tag">' + escapeHtml(c) + "</span>").join("") + "</div>";

    html += "<h2>" + tr("គោលបំណងគម្រោង", "Project objectives") + "</h2><ul>" + (project.objectives || []).map((o) => "<li>" + o + "</li>").join("") + "</ul>";
    html += "<h2>" + tr("តម្រូវការគម្រោង", "Project requirements") + "</h2><ul>" + (project.requirements || []).map((r) => "<li>" + r + "</li>").join("") + "</ul>";

    html += "<h2>" + tr("ជំហានអភិវឌ្ឍន៍", "Development steps") + "</h2><ol class=\"step-list\">" +
      (project.steps || []).map((s) => "<li>" + s + "</li>").join("") + "</ol>";

    html += "<h2>" + tr("Source Code ពេញលេញ", "Full source code") + "</h2>";
    html += codeCard(project.file || "Main.java", project.code, tr("ចម្លងកូដទៅឯកសារ .java ហើយ compile/run ដោយ javac និង java។", "Copy the code into a .java file and compile/run it with javac and java."));

    if (project.explanation && project.explanation.length) {
      html += "<h2>" + tr("ការពន្យល់កូដសំខាន់", "Key code explanation") + "</h2><ul class=\"line-explain\">" +
        project.explanation.map((e) => "<li>" + e + "</li>").join("") + "</ul>";
    }

    if (project.output) {
      html += "<h2>" + tr("គំរូទិន្នផល", "Sample output") + "</h2>" + outputCard(project.output);
    }

    if (project.improvements && project.improvements.length) {
      html += '<div class="callout tip"><div class="callout-title">' + tr("ចំណុចអាចកែលម្អបន្ថែម", "Possible improvements") + '</div><ul>' +
        project.improvements.map((i) => "<li>" + i + "</li>").join("") +
      "</ul></div>";
    }

    if (project.challenges && project.challenges.length) {
      html += "<h2>" + tr("ភារកិច្ចបន្ថែម (Challenges)", "Extra challenges") + "</h2><ol>" +
        project.challenges.map((c) => "<li>" + c + "</li>").join("") + "</ol>";
    }

    html += "</div>";

    const idx = PROJECTS.findIndex((p) => p.id === project.id);
    const prev = PROJECTS[idx - 1];
    const next = PROJECTS[idx + 1];
    html += '<nav class="lesson-nav">';
    html += prev
      ? '<a href="#/project/' + prev.id + '"><span class="dir">' + ICON.arrowLeft + tr(" គម្រោងមុន", " Previous project") + '</span><span class="name">' + escapeHtml(prev.title) + "</span></a>"
      : '<a href="#/lesson/final-projects"><span class="dir">' + ICON.arrowLeft + tr(" ត្រឡប់", " Back") + '</span><span class="name">Final Projects</span></a>';
    html += next
      ? '<a class="next" href="#/project/' + next.id + '"><span class="dir">' + tr("គម្រោងបន្ទាប់ ", "Next project ") + ICON.arrowRight + '</span><span class="name">' + escapeHtml(next.title) + "</span></a>"
      : '<a class="next" href="#/final-test"><span class="dir">' + tr("តេស្តចុងក្រោយ ", "Final test ") + ICON.arrowRight + '</span><span class="name">Final Test</span></a>';
    html += "</nav></article>";
    return html;
  }

  /* ------------------------------------------------------------------------
     Reference pages
     ------------------------------------------------------------------------ */

  function pageHead(title, desc) {
    return '<header class="lesson-head"><h1>' + title + "</h1>" +
      (desc ? '<p class="lesson-intro">' + desc + "</p>" : "") + "</header>";
  }

  function renderGlossary() {
    const items = REF.glossary || [];
    return pageHead(tr("វចនានុក្រម Java", "Java Glossary"), tr("វចនានុក្រមពាក្យបច្ចេកទេស Java ដែលអ្នកនឹងជួបញឹកញាប់។ ស្វែងរកបានភ្លាមៗ។", "A glossary of common Java technical terms you will encounter. Search instantly.")) +
      '<div class="filter-row"><input class="filter-input" id="glossaryFilter" type="search" placeholder="' + tr("ស្វែងរកពាក្យ ឬនិយមន័យ...", "Search terms or definitions...") + '" aria-label="' + tr("ស្វែងរក Glossary", "Search glossary") + '"><button class="filter-chip active" data-glossary-all type="button">' + tr("ទាំងអស់", "All") + ' (' + items.length + ")</button></div>" +
      '<div class="glossary-list" id="glossaryList">' +
        items.map((g) =>
          '<div class="glossary-item" data-search="' + escapeHtml((g.en + " " + g.kh + " " + g.def).toLowerCase()) + '">' +
            '<div class="term-en">' + escapeHtml(g.en) + '</div>' +
            (state.lang === "en" ? "" : '<div class="term-kh">' + escapeHtml(g.kh) + "</div>") +
            "<p>" + g.def + "</p>" +
          "</div>"
        ).join("") +
      "</div>";
  }

  function renderKeywords() {
    const items = REF.keywords || [];
    return pageHead(tr("ឯកសារយោងពាក្យគន្លឹះ Java", "Java Keywords Reference"), tr("ពាក្យគន្លឹះ (Keywords) របស់ Java ដែលមានអត្ថន័យពិសេសក្នុងភាសា។ អ្នកមិនអាចប្រើពាក្យទាំងនេះជាឈ្មោះ variable បានទេ។", "Java keywords have special meaning in the language. You cannot use them as variable names.")) +
      '<div class="filter-row"><input class="filter-input" id="keywordFilter" type="search" placeholder="' + tr("ស្វែងរក keyword...", "Search keywords...") + '" aria-label="' + tr("ស្វែងរក keyword", "Search keywords") + '"></div>' +
      '<div class="table-wrap"><table><thead><tr><th>Keyword</th><th>' + tr("ប្រភេទ", "Type") + '</th><th>' + tr("អត្ថន័យ", "Meaning") + '</th><th>' + tr("ឧទាហរណ៍", "Example") + '</th></tr></thead><tbody id="keywordBody">' +
      items.map((k) =>
        "<tr data-search=\"" + escapeHtml((k.kw + " " + k.type + " " + k.desc).toLowerCase()) + "\"><td><code>" + escapeHtml(k.kw) + "</code></td><td>" + escapeHtml(k.type) + "</td><td>" + k.desc + "</td><td><code>" + escapeHtml(k.example || "") + "</code></td></tr>"
      ).join("") +
      "</tbody></table></div>";
  }

  function renderErrors() {
    const items = REF.errors || [];
    let html = pageHead(tr("កំហុស Java ញឹកញាប់ និងដំណោះស្រាយ", "Common Java Errors & Solutions"), tr("កំហុសញឹកញាប់ដែលអ្នកចាប់ផ្តើមជួប រួមទាំងមូលហេតុ និងវិធីដោះស្រាយជាក់លាក់។", "Common errors beginners encounter, including causes and specific fixes."));
    html += '<div class="filter-row"><input class="filter-input" id="errorFilter" type="search" placeholder="' + tr("ស្វែងរក error...", "Search errors...") + '" aria-label="' + tr("ស្វែងរក error", "Search errors") + '"></div>';
    html += '<div id="errorList">';
    items.forEach((e) => {
      html +=
        '<div class="callout danger" data-search="' + escapeHtml((e.error + " " + e.cause).toLowerCase()) + '" style="margin-bottom:12px">' +
          '<div class="callout-title">' + escapeHtml(e.error) + "</div>" +
          "<p><strong>" + tr("មូលហេតុ៖", "Cause:") + "</strong> " + e.cause + "</p>" +
          "<p><strong>" + tr("ដោះស្រាយ៖", "Fix:") + "</strong> " + e.fix + "</p>" +
          (e.example ? codeCard("Example", e.example) : "") +
        "</div>";
    });
    html += "</div>";
    return html;
  }

  function renderCheatsheet() {
    const sections = REF.cheatsheet || [];
    let html = pageHead(tr("សន្លឹកសង្ខេប Syntax Java", "Java Syntax Cheat Sheet"), tr("សន្លឹកកាតសង្ខេប Syntax Java សម្រាប់មើលរហ័សពេលសរសេរកូដ ឬពេលបង្រៀន។", "A quick Java syntax reference for when you are writing code or teaching."));
    sections.forEach((s) => {
      html += '<div class="syntax-card"><div class="syntax-head">' + escapeHtml(s.title) + "</div><pre><code>" + escapeHtml(s.code) + "</code></pre>" +
        (s.note ? '<div class="code-note">' + escapeHtml(s.note) + "</div>" : "") + "</div>";
    });
    return html;
  }

  function renderRoadmapPage() {
    const phases = REF.roadmap || [];
    let html = pageHead(tr("ផែនទីរៀន Java", "Learning Roadmap"), tr("ផែនទីរៀន Java តាមលំដាប់។ ប៉ាន់ស្មានពេលវេលាតាមការរៀន ១ ម៉ោងក្នុងមួយថ្ងៃ។", "A step-by-step Java learning path. Time estimates assume one hour of study per day."));
    html += '<div class="roadmap-page">';
    phases.forEach((p, i) => {
      html += '<div class="phase"><div class="phase-head"><h3>' + (i + 1) + ". " + escapeHtml(p.title) + '</h3><span class="weeks">' + escapeHtml(p.weeks || "") + "</span></div>" +
        '<p class="small muted" style="margin:6px 0 0">' + escapeHtml(p.desc || "") + "</p>";
      if (p.lessonIds && p.lessonIds.length) {
        html += "<ul>";
        p.lessonIds.forEach((id) => {
          const l = lessonById(id);
          if (l) html += '<li><a href="#/lesson/' + l.id + '">' + escapeHtml(lessonTitle(l)) + "</a></li>";
        });
        html += "</ul>";
      }
      html += "</div>";
    });
    html += "</div>";
    html += '<div class="callout info"><div class="callout-title">' + tr("របៀបប្រើ Roadmap នេះ", "How to use this roadmap") + '</div><p>' + tr("មិនចាំបាច់ប្រញាប់ទេ។ មេរៀននីមួយៗត្រូវសរសេរកូដដោយខ្លួនឯងយ៉ាងហោចណាស់ម្តង។ ប្រសិនបើអ្នកជាគ្រូ អាចប្រើ Part នីមួយៗជាមេរៀន ១ សប្តាហ៍។", "There is no need to rush. Write the code for each lesson yourself at least once. If you are a teacher, you can use each Part as one week of lessons.") + '</p></div>';
    return html;
  }

  function renderBookmarks() {
    let html = pageHead(tr("សញ្ញាសម្គាល់", "Bookmarks"), tr("មេរៀនដែលអ្នកបានដាក់សញ្ញាសម្គាល់។ ចុចដើម្បីបើកឡើងវិញ។", "Lessons you have bookmarked. Click to open again."));
    const lessons = state.bookmarks.map((id) => lessonById(id)).filter(Boolean);
    if (!lessons.length) {
      html += '<div class="empty-state"><strong>' + tr("មិនមានសញ្ញាសម្គាល់ទេ", "No bookmarks yet") + '</strong>' + tr("បើកមេរៀនណាមួយ រួចចុចរូបសញ្ញាសម្គាល់នៅផ្នែកខាងលើ។", "Open any lesson, then click the bookmark icon at the top.") + '</div>';
      return html;
    }
    html += '<div class="bookmark-list">';
    lessons.forEach((l) => {
      html += '<a class="bookmark-item" href="#/lesson/' + l.id + '">' +
        '<span class="idx">' + String(l.num).padStart(2, "0") + "</span>" +
        '<span class="title">' + escapeHtml(lessonTitle(l)) + "</span>" +
        '<span class="meta">' + escapeHtml(l.time) + "</span>" +
        '<span class="chip ' + (isDone(l.id) ? "ok" : "") + '">' + (isDone(l.id) ? tr("✓ បានបញ្ចប់", "✓ Completed") : tr("មិនទាន់បញ្ចប់", "Not completed")) + "</span>" +
      "</a>";
    });
    html += "</div>";
    return html;
  }

  function renderFinalTest() {
    const questions = REF.finalTest || [];
    const best = state.finalTest;
    return pageHead(tr("តេស្តចំណេះដឹងចុងក្រោយ", "Final Knowledge Test"), tr("សំណួរ " + questions.length + " សំណួរ គ្របដណ្តប់មេរៀនសំខាន់ទាំងអស់។ ឆ្លើយគ្រប់សំណួរ ដើម្បីមើលពិន្ទុ។", questions.length + " questions covering all key lessons. Answer every question to see your score.")) +
      (best ? '<div class="callout info"><div class="callout-title">' + tr("ពិន្ទុល្អបំផុតរបស់អ្នក", "Your best score") + '</div><p>' + best.score + " / " + best.total + (best.date ? " · " + escapeHtml(best.date) : "") + "</p></div>" : "") +
      '<div class="quiz" id="finalTestQuiz" data-quiz-id="__final__"></div>';
  }

  /* ------------------------------------------------------------------------
     Quiz engine
     ------------------------------------------------------------------------ */

  function mountQuiz(container, questions, id) {
    if (!container || !questions || !questions.length) return;
    const best = id === "__final__" ? state.finalTest : state.quiz[id];
    let answered = 0;
    let correct = 0;

    let html = "";
    questions.forEach((q, qi) => {
      html += '<div class="quiz-q" data-qi="' + qi + '"><h4><span class="quiz-index">' + String(qi + 1).padStart(2, "0") + ".</span><span>" + q.q + "</span></h4><div class=\"quiz-options\">";
      q.options.forEach((opt, oi) => {
        html += '<button class="quiz-option" type="button" data-oi="' + oi + '">' + String.fromCharCode(65 + oi) + ". " + opt + "</button>";
      });
      html += '</div><div class="quiz-explain" data-explain="' + qi + '">' + (q.explain || "") + "</div></div>";
    });
    html += '<div class="quiz-result"><span class="quiz-score" data-score>' + tr("មិនទាន់ឆ្លើយ", "Not answered yet") + '</span>' +
      '<span class="small muted">' + (best ? tr("ល្អបំផុត៖ ", "Best: ") + best.score + "/" + best.total : "") + "</span>" +
      '<button class="btn btn-sm" type="button" data-reset-quiz>' + tr("ធ្វើឡើងវិញ", "Try again") + '</button></div>';

    container.innerHTML = html;

    const scoreEl = $("[data-score]", container);
    const options = $$(".quiz-option", container);
    const answeredMap = {};

    function updateScore() {
      if (answered === questions.length) {
        const ok = correct >= Math.ceil(questions.length * 0.7);
        scoreEl.innerHTML = tr("ពិន្ទុ៖ ", "Score: ") + '<span class="' + (ok ? "ok" : "bad") + '">' + correct + " / " + questions.length + "</span>";
        const record = { score: correct, total: questions.length, date: new Date().toLocaleDateString("en-GB") };
        if (id === "__final__") {
          if (!state.finalTest || correct > state.finalTest.score) state.finalTest = record;
        } else {
          const prev = state.quiz[id];
          if (!prev || correct > prev.score) state.quiz[id] = record;
        }
        saveState();
        toast(ok
          ? tr("ល្អណាស់! អ្នកឆ្លើយត្រូវ ", "Great! You got ") + correct + "/" + questions.length
          : tr("បន្តព្យាយាម! អ្នកឆ្លើយត្រូវ ", "Keep trying! You got ") + correct + "/" + questions.length);
      } else {
        scoreEl.textContent = tr("បានឆ្លើយ ", "Answered ") + answered + " / " + questions.length;
      }
    }

    options.forEach((btn) => {
      btn.addEventListener("click", () => {
        const qWrap = btn.closest(".quiz-q");
        const qi = Number(qWrap.getAttribute("data-qi"));
        if (answeredMap[qi]) return;
        answeredMap[qi] = true;
        const q = questions[qi];
        const oi = Number(btn.getAttribute("data-oi"));
        const qButtons = $$(".quiz-option", qWrap);
        qButtons.forEach((b, index) => {
          b.disabled = true;
          if (index === q.answer) b.classList.add("correct");
          if (index === oi && index !== q.answer) b.classList.add("wrong");
        });
        const explain = $('[data-explain="' + qi + '"]', container);
        if (explain) explain.classList.add("show");
        answered += 1;
        if (oi === q.answer) correct += 1;
        updateScore();
      });
    });

    const reset = $("[data-reset-quiz]", container);
    if (reset) {
      reset.addEventListener("click", () => {
        mountQuiz(container, questions, id);
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function mountAllQuizzes() {
    $$("[data-quiz-id]").forEach((container) => {
      const id = container.getAttribute("data-quiz-id");
      if (id === "__final__") {
        mountQuiz(container, REF.finalTest || [], id);
      } else {
        const lesson = lessonById(id);
        if (lesson && lesson.quiz) mountQuiz(container, lesson.quiz, id);
      }
    });
  }

  /* ------------------------------------------------------------------------
     View event binding
     ------------------------------------------------------------------------ */

  function bindViewEvents() {
    mountAllQuizzes();

    $$(".solution-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const solution = btn.nextElementSibling;
        if (!solution || !solution.classList.contains("solution")) return;
        const open = solution.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.textContent = open ? tr("បិទដំណោះស្រាយ", "Hide solution") : tr("បង្ហាញដំណោះស្រាយ", "Show solution");
      });
    });

    const completeBtn = $("#completeBtn");
    if (completeBtn) {
      completeBtn.addEventListener("click", () => {
        const id = completeBtn.getAttribute("data-id");
        const lesson = lessonById(id);
        if (!lesson) return;
        if (isDone(id)) {
          state.completed = state.completed.filter((x) => x !== id);
          completeBtn.textContent = tr("សម្គាល់ថាបានបញ្ចប់", "Mark as completed");
          toast(tr("ដកសញ្ញាបញ្ចប់មេរៀន", "Lesson marked as incomplete"));
        } else {
          state.completed.push(id);
          completeBtn.textContent = tr("✓ បានបញ្ចប់", "✓ Completed");
          toast(tr("អបអរសាទរ! អ្នកបានបញ្ចប់មេរៀននេះ", "Congratulations! You completed this lesson"));
          const chipRow = completeBtn.closest(".lesson-head").querySelector(".lesson-kicker");
          if (chipRow && !chipRow.querySelector(".chip.ok")) {
            const chip = document.createElement("span");
            chip.className = "chip ok";
            chip.textContent = tr("បានបញ្ចប់ ✓", "Completed ✓");
            chipRow.appendChild(chip);
          }
        }
        saveState();
        updateProgressUI();
      });
    }

    const glossaryFilter = $("#glossaryFilter");
    if (glossaryFilter) {
      glossaryFilter.addEventListener("input", () => {
        const q = glossaryFilter.value.trim().toLowerCase();
        $$("#glossaryList .glossary-item").forEach((item) => {
          item.style.display = item.getAttribute("data-search").indexOf(q) !== -1 ? "" : "none";
        });
      });
    }

    const keywordFilter = $("#keywordFilter");
    if (keywordFilter) {
      keywordFilter.addEventListener("input", () => {
        const q = keywordFilter.value.trim().toLowerCase();
        $$("#keywordBody tr").forEach((row) => {
          row.style.display = row.getAttribute("data-search").indexOf(q) !== -1 ? "" : "none";
        });
      });
    }

    const errorFilter = $("#errorFilter");
    if (errorFilter) {
      errorFilter.addEventListener("input", () => {
        const q = errorFilter.value.trim().toLowerCase();
        $$("#errorList [data-search]").forEach((item) => {
          item.style.display = item.getAttribute("data-search").indexOf(q) !== -1 ? "" : "none";
        });
      });
    }
  }

  /* ------------------------------------------------------------------------
     Search
     ------------------------------------------------------------------------ */

  let searchIndex = [];

  function buildSearchIndex() {
    searchIndex = [];
    LESSONS.forEach((l) => {
      searchIndex.push({
        type: "lesson",
        route: "/lesson/" + l.id,
        titleKm: l.titleKh || l.title,
        titleEn: l.title,
        meta: "PART " + String(l.part).padStart(2, "0") + " · " + l.time,
        text: (l.title + " " + l.titleKh + " " + l.intro + " " + (l.objectives || []).join(" ")).toLowerCase()
      });
      (l.exercises || []).forEach((ex, i) => {
        searchIndex.push({
          type: "exercise",
          route: "/lesson/" + l.id,
          target: "ex-" + l.id + "-" + (i + 1),
          titleKm: "លំហាត់៖ " + ex.title,
          titleEn: "Exercise: " + ex.title,
          meta: l.title + " · Level " + ex.level,
          text: (ex.title + " " + ex.desc + " " + (ex.requirements || []).join(" ")).toLowerCase()
        });
      });
    });
    PROJECTS.forEach((p) => {
      searchIndex.push({
        type: "project",
        route: "/project/" + p.id,
        titleKm: p.title,
        titleEn: p.title,
        meta: "Project " + p.num + " · " + p.time,
        text: (p.title + " " + p.intro + " " + (p.concepts || []).join(" ")).toLowerCase()
      });
    });
    (REF.glossary || []).forEach((g) => {
      searchIndex.push({
        type: "glossary",
        route: "/glossary",
        titleKm: g.en + " — " + g.kh,
        titleEn: g.en + " — " + g.kh,
        meta: "Glossary",
        text: (g.en + " " + g.kh + " " + g.def).toLowerCase()
      });
    });
  }

  function highlightMatch(text, q) {
    const safe = escapeHtml(text);
    if (!q) return safe;
    const safeQ = escapeHtml(q).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    try {
      return safe.replace(new RegExp("(" + safeQ + ")", "ig"), "<mark>$1</mark>");
    } catch (err) {
      return safe;
    }
  }

  function runSearch(q) {
    const panel = $("#searchPanel");
    if (!panel) return;
    const query = q.trim().toLowerCase();
    if (!query) {
      panel.hidden = true;
      panel.innerHTML = "";
      document.body.classList.remove("search-open");
      return;
    }
    document.body.classList.add("search-open");
    const results = searchIndex.filter((item) => item.text.indexOf(query) !== -1).slice(0, 14);
    if (!results.length) {
      panel.innerHTML = '<div class="search-empty">' + tr("រកមិនឃើញលទ្ធផលសម្រាប់ “" + escapeHtml(q) + "” ទេ។ សាកល្បងពាក្យខ្លីជាងនេះ។", "No results for “" + escapeHtml(q) + "”. Try a shorter search term.") + '</div>';
      panel.hidden = false;
      return;
    }
    let html = '<div class="search-hint">' + tr("លទ្ធផលស្វែងរក · ", "Search results · ") + results.length + "</div>";
    results.forEach((r) => {
      const label = state.lang === "en"
        ? (r.type === "lesson" ? "L" : r.type === "exercise" ? "E" : r.type === "project" ? "P" : "G")
        : (r.type === "lesson" ? "ម" : r.type === "exercise" ? "ល" : r.type === "project" ? "គ" : "ព");
      const title = state.lang === "en" ? (r.titleEn || r.titleKm) : (r.titleKm || r.titleEn);
      html += '<a class="search-result" href="#' + r.route + '" data-route="' + r.route + '"' + (r.target ? ' data-target="' + r.target + '"' : "") + ">" +
        '<span class="s-icon">' + label + "</span>" +
        '<span class="s-body"><span class="s-title">' + highlightMatch(title, q) + '</span><span class="s-meta">' + escapeHtml(r.meta) + "</span></span>" +
      "</a>";
    });
    panel.innerHTML = html;
    panel.hidden = false;
  }

  function closeSearch() {
    const panel = $("#searchPanel");
    const input = $("#searchInput");
    if (panel) {
      panel.hidden = true;
      panel.innerHTML = "";
    }
    if (input) input.value = "";
    document.body.classList.remove("search-open");
  }

  /* ------------------------------------------------------------------------
     Global events
     ------------------------------------------------------------------------ */

  function bindGlobalEvents() {
    window.addEventListener("hashchange", navigate);
    window.addEventListener("scroll", () => {
      window.requestAnimationFrame(updateReadingProgress);
    }, { passive: true });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        document.body.classList.remove("sidebar-open");
        document.body.style.overflow = "";
      }
      if (window.innerWidth > 720) document.body.classList.remove("search-open");
      updateReadingProgress();
    });

    $("#langBtn") && $("#langBtn").addEventListener("click", toggleLang);
    $("#themeBtn") && $("#themeBtn").addEventListener("click", toggleTheme);
    $("#themeBtnSide") && $("#themeBtnSide").addEventListener("click", toggleTheme);

    $("#collapseBtn") && $("#collapseBtn").addEventListener("click", () => {
      if (window.innerWidth <= 1024) {
        openMobileSidebar(false);
      } else {
        setSidebarCollapsed(!state.collapsed);
        const btn = $("#collapseBtn");
        if (btn) btn.setAttribute("title", state.collapsed ? tr("ពង្រីក Sidebar", "Expand sidebar") : tr("បង្រួម Sidebar", "Collapse sidebar"));
      }
    });

    $("#menuBtn") && $("#menuBtn").addEventListener("click", () => {
      openMobileSidebar(!document.body.classList.contains("sidebar-open"));
    });
    $("#sidebarOverlay") && $("#sidebarOverlay").addEventListener("click", () => openMobileSidebar(false));

    $("#sidebarNav") && $("#sidebarNav").addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link && window.innerWidth <= 1024) openMobileSidebar(false);
    });

    $("#bookmarkBtn") && $("#bookmarkBtn").addEventListener("click", () => {
      const match = location.hash.match(/#\/lesson\/([^/?]+)/);
      if (!match) return;
      const id = match[1];
      if (!lessonById(id)) return;
      if (isBookmarked(id)) {
        state.bookmarks = state.bookmarks.filter((x) => x !== id);
        toast(tr("ដកសញ្ញាសម្គាល់ចេញ", "Bookmark removed"));
      } else {
        state.bookmarks.push(id);
        toast(tr("បានដាក់សញ្ញាសម្គាល់មេរៀន", "Lesson bookmarked"));
      }
      saveState();
      updateBookmarkBtn(id);
    });

    document.addEventListener("click", (e) => {
      const copyBtn = e.target.closest(".copy-btn");
      if (copyBtn) {
        const card = copyBtn.closest(".code-card");
        const code = card ? $("pre code", card) : null;
        if (!code) return;
        const text = code.textContent;
        const done = () => {
          copyBtn.textContent = tr("បានចម្លង ✓", "Copied ✓");
          copyBtn.classList.add("copied");
          toast(tr("ចម្លងកូដរួចរាល់", "Code copied"));
          setTimeout(() => {
            copyBtn.textContent = tr("ចម្លង", "Copy");
            copyBtn.classList.remove("copied");
          }, 1800);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
        } else {
          fallbackCopy(text, done);
        }
        return;
      }

      const searchResult = e.target.closest(".search-result");
      if (searchResult) {
        e.preventDefault();
        const route = searchResult.getAttribute("data-route");
        const target = searchResult.getAttribute("data-target");
        closeSearch();
        if (target) {
          location.hash = "#" + route + "?target=" + target;
        } else {
          location.hash = "#" + route;
        }
        return;
      }

      const panel = $("#searchPanel");
      const searchBox = e.target.closest(".search-box");
      if (!searchBox && !e.target.closest("#searchPanel")) {
        if (document.body.classList.contains("search-open") || (panel && !panel.hidden)) {
          closeSearch();
          const input = $("#searchInput");
          if (input) input.blur();
        }
      }
    });

    const searchBox = $(".search-box");
    if (searchBox) {
      searchBox.addEventListener("click", (e) => {
        if (window.innerWidth > 720) return;
        if (e.target.closest(".search-close")) return;
        if (!document.body.classList.contains("search-open")) {
          document.body.classList.add("search-open");
          const input = $("#searchInput");
          if (input) input.focus();
        }
      });
    }

    const searchCloseBtn = $("#searchCloseBtn");
    if (searchCloseBtn) {
      searchCloseBtn.addEventListener("click", () => {
        closeSearch();
        const input = $("#searchInput");
        if (input) input.blur();
      });
    }

    const searchInput = $("#searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", () => runSearch(searchInput.value));
      searchInput.addEventListener("focus", () => {
        if (searchInput.value.trim()) runSearch(searchInput.value);
      });
      searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeSearch();
          searchInput.blur();
        }
      });
      searchInput.addEventListener("click", () => {
        if (window.innerWidth <= 720) {
          document.body.classList.add("search-open");
          setTimeout(() => searchInput.focus(), 10);
        }
      });
      searchInput.addEventListener("blur", () => {
        if (window.innerWidth > 720) return;
        setTimeout(() => {
          if (document.activeElement === searchInput) return;
          if (searchInput.value.trim()) return;
          const panelEl = $("#searchPanel");
          if (panelEl && panelEl.contains(document.activeElement)) return;
          closeSearch();
        }, 160);
      });
    }

    document.addEventListener("keydown", (e) => {
      const tag = (document.activeElement && document.activeElement.tagName) || "";
      const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || document.activeElement.isContentEditable;
      if (e.key === "/" && !typing) {
        e.preventDefault();
        if (searchInput) {
          document.body.classList.add("search-open");
          searchInput.focus();
          searchInput.select();
        }
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (searchInput) {
          document.body.classList.add("search-open");
          searchInput.focus();
          searchInput.select();
        }
      }
      if (e.key === "Escape") {
        closeSearch();
        openMobileSidebar(false);
      }
    });
  }

  function fallbackCopy(text, done) {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
      done();
    } catch (err) {
      toast(tr("មិនអាចចម្លងបានទេ — សូមជ្រើសរើសកូដដោយដៃ", "Could not copy — please select the code manually"));
    }
  }

  /* ------------------------------------------------------------------------
     Init
     ------------------------------------------------------------------------ */

  function init() {
    loadState();
    applyLang();
    document.body.classList.toggle("sidebar-collapsed", state.collapsed && window.innerWidth > 1024);
    buildSearchIndex();
    bindGlobalEvents();
    updateProgressUI();

    if (!location.hash) {
      location.replace("#/home");
    } else {
      navigate();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
