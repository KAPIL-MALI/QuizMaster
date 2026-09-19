# QuizMaster — Technical Interview Preparation Platform

A modern, interactive web-based quiz application designed for developers preparing for technical interviews. **QuizMaster** features **400 carefully curated questions** across **16 technical subjects**, offering real-time test simulation, progress tracking, dynamic score reports, and detailed answer reviews.

---

## 🌟 Key Features

- **16 Technical Subjects**:
  - **Programming & Core**: C++, Java, Python, Object-Oriented Programming (OOPM)
  - **Web Development**: HTML, CSS, JavaScript, React
  - **Backend & Full Stack**: Node.js, Express.js, MongoDB, MERN Stack
  - **Databases & DevOps**: SQL, Git, GitHub, DevOps
- **400 Interview Questions**: 25 high-frequency technical questions per subject with 4 multiple-choice options and immediate validation.
- **🔀 Option Shuffling & Length Balancing**:
  - **Balanced Answer Position**: Options are randomly shuffled (Fisher-Yates algorithm) on every quiz attempt, ensuring equal 25% distribution across A, B, C, and D.
  - **Equalized Option Lengths**: Distractor options are intelligently balanced in length, preventing users from guessing the correct answer simply by choosing the longest option.
- **🏆 Top 3 Leaderboard & Name Entry Modal**:
  - **Subject Leaderboards**: Maintains a Top 3 leaderboard per subject, ranked by most correct answers first, then fastest completion time.
  - **Record Entry Prompt**: When setting a Top 3 record, a glassmorphic modal pops up allowing the user to enter their name.
  - **Persistence**: Saved automatically per subject in `localStorage`.
- **Timed Exam Environment**: 25-minute countdown timer per quiz session to simulate real test conditions.
- **Interactive Question Palette**: Jump directly to any question and track answered vs. unanswered state dynamically.
- **Rich Results & Analytics**:
  - Animated SVG circular percentage ring score visualization.
  - Performance breakdown: Total Questions, Correct Answers, Incorrect Answers, and Completion Time.
  - Confetti celebration animation for scores of 80% or higher.
  - Complete **Answer Review** section highlighting correct answers and user choices.
- **Keyboard Shortcuts**: Full keyboard navigation support for faster test taking.
- **Pure Vanilla Stack**: Built with standard HTML5, CSS3, and JavaScript — fast load times with zero framework dependencies.

---

## 📁 Project Structure

```
QuizMaster/
├── index.html          # Main HTML markup and UI structure (includes Top 3 leaderboard & name modal)
├── style.css           # Modern design system, themes, glassmorphism modal, and leaderboard styles
├── script.js            # Core application logic, quiz data, option shuffling, and leaderboard storage
├── images/             # Subject and platform logo assets
│   ├── css-logo.jpg
│   ├── devops-logo.jpg
│   ├── java-logo.png
│   ├── quizmaster-logo.png
│   └── ...
└── README.md           # Project documentation
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Access
Simply double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)
You can serve the project using Python or Node.js:

#### Using Python:
```bash
python -m http.server 8080
```
Then open your browser and navigate to: [http://localhost:8080](http://localhost:8080)

#### Using Node.js / `http-server`:
```bash
npx http-server . -p 8080
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| --- | --- |
| `1` or `A` | Select Option A |
| `2` or `B` | Select Option B |
| `3` or `C` | Select Option C |
| `4` or `D` | Select Option D |
| `ArrowLeft` | Go to Previous Question |
| `ArrowRight` / `Enter` | Go to Next Question / Submit Quiz |

---

## 🛠️ Built With

- **HTML5**: Semantic web structure and accessible markup
- **CSS3**: Custom design tokens, CSS variables, glassmorphism modal styling, responsive Flexbox/Grid
- **JavaScript (ES6+)**: Dynamic DOM manipulation, state management, Fisher-Yates shuffling, SVG ring animation, Canvas confetti, and `localStorage` leaderboard persistence

---

## 📄 License

This project is open-source and available for educational and interview preparation purposes.
