# Java ភាសាខ្មែរ — Java Khmer Learning Website

A static, offline-friendly textbook for learning Java in Khmer, with English technical
terms. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step,
no install required.

## Overview

- **25 lessons** organized into **13 parts**, from environment setup to OOP and advanced
  fundamentals.
- **221 exercises** across three difficulty levels (Beginner / Intermediate / Challenge),
  each with requirements, sample input/output, a hint, and a hidden solution.
- **16 hands-on projects** with full source code, line-by-line explanations, sample
  output, improvement ideas, and challenges.
- **Reference section**: 50 glossary terms, 50 keywords, 20 common errors, 21 cheat
  sheets, a 5-phase roadmap, and a 25-question final test.
- Progress, quiz answers, bookmarks, and theme are saved in `localStorage` under
  `javaKhmer.v1`.

## Features

- Single-page app with hash routes: `#/home`, `#/lesson/<id>`, `#/projects`,
  `#/project/<id>`, `#/reference`, `#/test`.
- Global search across lesson titles, sections, terms, and exercises.
- Level badges, objectives, syntax blocks, code examples, common mistakes, tips,
  summaries, and takeaways for every lesson.
- Interactive quizzes with explanations and a final knowledge test.
- Dark/light theme, responsive layout, collapsible sidebar, and reading progress.
- Works directly from `file://` or through Live Server.

## Tech Stack

- HTML5
- CSS3 (custom properties, responsive grid/flex)
- Vanilla JavaScript (ES6+, no dependencies)
- Google Fonts (Hanuman for Khmer, Space Grotesk, DM Sans, JetBrains Mono)

## Run Locally

No installation or build is needed.

1. **Directly**: open `index.html` in a modern browser.
2. **Live Server (VS Code)**: right-click `index.html` and choose *Open with Live Server*.
   The workspace already sets `liveServer.settings.port` to `5501` in
   `.vscode/settings.json`.

## Project Structure

```text
lesson of java/
├── index.html               # App shell and data script loading
├── style.css                # All styling
├── script.js                # SPA logic, routing, search, progress, quizzes
├── data/
│   ├── lessons-a.js         # Lessons 1–3   (intro, setup, syntax)
│   ├── lessons-b.js         # Lessons 4–6   (variables, operators, input)
│   ├── lessons-c.js         # Lessons 7–8   (conditionals, loops)
│   ├── lessons-d.js         # Lessons 9–10  (arrays, strings)
│   ├── lessons-e.js         # Lessons 11–13 (methods, overloading, recursion)
│   ├── lessons-f.js         # Lessons 14–17 (OOP, classes, constructors, encapsulation)
│   ├── lessons-g.js         # Lessons 18–21 (inheritance, polymorphism, abstraction, interfaces)
│   ├── lessons-h.js         # Lessons 22–25 (exceptions, collections, files, final projects)
│   ├── projects-data.js     # 16 guided projects
│   └── reference-data.js    # Glossary, keywords, errors, cheatsheet, roadmap, final test
├── .vscode/settings.json    # Live Server port 5501
└── README.md
```

Data files expose globals consumed by `script.js`:

- `window.JAVA_LESSONS` — lessons
- `window.JAVA_PROJECTS` — projects
- `window.JAVA_REFERENCE` — reference data

## Content Coverage

| Part | Topic | Lessons |
| --- | --- | --- |
| 1 | Introduction to Java | 1 |
| 2 | Environment Setup | 2 |
| 3 | Java Fundamentals | 3 |
| 4 | Variables & Data Types | 4 |
| 5 | Operators | 5 |
| 6 | User Input | 6 |
| 7 | Conditional Statements | 7 |
| 8 | Loops | 8 |
| 9 | Arrays | 9 |
| 10 | Strings | 10 |
| 11 | Methods | 11–13 |
| 12 | OOP | 14–21 |
| 13 | Advanced Fundamentals | 22–25 |

## Projects

1. Profile Card
2. Grade Calculator
3. Number Guessing Game
4. Multiplication Table
5. Score Statistics
6. Text Analyzer
7. Bank Account Simulator
8. Library System
9. To-Do List
10. Contact Book
11. Student Information System
12. Simple Calculator
13. ATM Simulation
14. Student Grade Management
15. Employee Management System
16. Simple OOP Management System

## Work Completed

- **Exercise depth expanded**: every lesson now has at least 8 exercises, distributed
  across all three levels.
- **20 additional exercises** were added to ten core lessons (2 each):
  variables & data types, operators, user input, conditionals, arrays, strings, methods,
  OOP, inheritance, and exception handling — these lessons now have 10 exercises each.
- **Extra examples** were added to the OOP and Abstraction lessons.
- **Six required projects** from the project brief were implemented and appended:
  Student Information System, Simple Calculator, ATM Simulation, Student Grade
  Management, Employee Management System, and Simple OOP Management System. The site now
  ships 16 projects.
- **Regex escaping** was corrected in a strings exercise so the generated Java source
  uses `"\\s+"` correctly.
- **Verification**: all JavaScript data files and `script.js` pass `node --check`; the
  content audit reports 25 lessons, 16 projects, all required fields present, valid quiz
  answers, and no broken internal references.

## Adding Content

Lessons are pushed onto `window.JAVA_LESSONS`:

```js
window.JAVA_LESSONS = window.JAVA_LESSONS || [];
window.JAVA_LESSONS.push({
  id: "unique-id",
  num: 26,
  part: 13,
  partTitle: "Advanced Fundamentals",
  title: "English title",
  titleKh: "ចំណងជើងខ្មែរ",
  time: "20 នាទី",
  level: 2,
  intro: "…",
  objectives: ["…"],
  sections: [{ title: "…", html: "…" }],
  terms: [{ term: "…", meaning: "…" }],
  syntax: "…",
  examples: [{ title: "…", desc: "…", file: "Demo.java", code: "…", output: "…", lines: ["…"] }],
  mistakes: [{ text: "…", fix: "…" }],
  tips: ["…"],
  exercises: [{
    level: 1,
    title: "…",
    desc: "…",
    requirements: ["…"],
    inputSample: "…",
    outputSample: "…",
    hint: "…",
    solutionCode: "…",
    solution: "…"
  }],
  quiz: [{ q: "…", options: ["…"], answer: 0, explain: "…" }],
  summary: "…",
  takeaways: ["…"],
  sources: [{ label: "…", url: "…" }]
});
```

Then include the data file in `index.html` before `script.js`, and add the lesson's `part`
to `PART_NAMES` in `script.js` if it is a new part.

## Notes

- This is a front-end-only project; there is no backend and no database.
- Content is stored in plain JavaScript files, so the site can be copied and opened
  anywhere without a server.
- `package-lock.json` is empty and not required to run the site.
