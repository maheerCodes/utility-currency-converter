<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/5169/5169110.png" alt="logo" width="70">
  <h1>Currency Converter</h1>
  <h3>A modern, glassmorphism-styled Currency Converter — powered by Vanilla JavaScript & FlagsAPI</h3>

  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" style="text-decoration: none;"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" style="text-decoration: none;"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" style="text-decoration: none;"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"></a>
  <a href="https://github.com/maheerCodes/utility-currency-converter/blob/main/LICENSE" style="text-decoration: none;"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT"></a>
  <br>
  <a href="https://github.com/maheerCodes/utility-currency-converter/stargazers" style="text-decoration: none;"><img src="https://img.shields.io/github/stars/maheerCodes/Currency-Converter?style=flat-square&color=gold" alt="Stars"></a>
  <a href="https://github.com/maheerCodes/utility-currency-converter/network/members" style="text-decoration: none;"><img src="https://img.shields.io/github/forks/maheerCodes/Currency-Converter?style=flat-square&color=blue" alt="Forks"></a>
  <a href="https://github.com/maheerCodes/utility-currency-converter/issues" style="text-decoration: none;"><img src="https://img.shields.io/github/issues/maheerCodes/Currency-Converter?style=flat-square&color=red" alt="Issues"></a>
  <br>
  <img src="https://visitor-badge.laobi.icu/badge?page_id=maheerCodes.Currency-Converter" alt="Visitors">

  <p>No frameworks. No bulky libraries. Just clean vanilla logic, beautiful glassmorphism UI, real-time flag updates, and a seamless Dark Mode experience.</p>

  <b><a href="https://unique-tic-tac-toe.netlify.app/" style="text-decoration: none;">🌐 Live Demo</a></b> · 
  <b><a href="https://github.com/maheerCodes/utility-currency-converter/issues" style="text-decoration: none;">🐛 Report Bug</a></b> · 
  <b><a href="https://github.com/maheerCodes/utility-currency-converter/issues" style="text-decoration: none;">✨ Request Feature</a></b>
</div>

<br>

<div align="center">
  <img src="./preview-image.png" alt="Currency Converter Preview" width="600">
</div>

<br>

## 📑 Table of Contents

<ul>
  <li><a href="#-features" style="text-decoration: none;">Features</a></li>
  <li><a href="#️-tech-stack" style="text-decoration: none;">Tech Stack</a></li>
  <li><a href="#-browser-support" style="text-decoration: none;">Browser Support</a></li>
  <li><a href="#-project-structure" style="text-decoration: none;">Project Structure</a></li>
  <li><a href="#-getting-started" style="text-decoration: none;">Getting Started</a></li>
  <li><a href="#️-how-to-use" style="text-decoration: none;">How to Use</a></li>
  <li><a href="#️-how-it-works-code-overview" style="text-decoration: none;">How It Works</a></li>
  <li><a href="#-customization" style="text-decoration: none;">Customization</a></li>
  <li><a href="#-faq" style="text-decoration: none;">FAQ</a></li>
  <li><a href="#️-roadmap--future-improvements" style="text-decoration: none;">Roadmap</a></li>
  <li><a href="#-contributing" style="text-decoration: none;">Contributing</a></li>
  <li><a href="#-license" style="text-decoration: none;">License</a></li>
  <li><a href="#-author" style="text-decoration: none;">Author</a></li>
</ul>

## ✨ Features

| Icon | Description |
| :---: | :--- |
| 🌍 | **Global Support** — Comprehensive data for 250+ countries and their currencies |
| 🌓 | **Dynamic Theme** — Toggle between a sleek Light mode and a deep Dark mode |
| 🚩 | **Visual Recognition** — Automatic flag updates using FlagsAPI when selecting countries |
| 🔄 | **Animated Swap** — Effortlessly switch "From" and "To" currencies with a smooth 180° rotation |
| 🪟 | **Glassmorphism UI** — Modern design featuring backdrop-blur and soft gradient accents |
| 📱 | **Fully Responsive** — Built with Flexbox and Inter font for readability across all devices |
| 📈 | **Trend Indicators** — Visual "Up/Down" trends for exchange rate movements |
| ⭐ | **Favorites** — Quick-access button to save frequently used conversion pairs |

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 — Custom Properties (Variables), Glassmorphism, Transitions |
| Logic | Vanilla JavaScript — DOM manipulation, Array Mapping |
| Assets | FlagsAPI — Real-time flag icon rendering |

## 🌍 Browser Support

| Chrome | Firefox | Edge | Safari |
|:---:|:---:|:---:|:---:|
| ✅ | ✅ | ✅ | ⚠️ Requires `-webkit-backdrop-filter` |

> 💡 **Note:** The glassmorphism effect and CSS variables work best in modern, updated browsers.

## 📁 Project Structure

```text
Currency-Converter/
├── index.html           # Main UI structure & select menus
├── style.css            # Glassmorphism design, Dark mode logic, & gradients
├── mainCountry.js       # Massive dataset of 250+ countries & currency codes
├── script.js            # Theme switching & dropdown population logic
├── wm-icon.svg          # Favicon / App icon
└── preview-image.png    # App screenshot for README
```

## 🚀 Getting Started

No installation needed.

### 1. Clone the repository

```bash
git clone https://github.com/maheerCodes/Currency-Converter.git
cd Currency-Converter
```

### 2. Run Locally
Open `index.html` in your browser. (Recommended: Use VS Code **Live Server** to ensure API/Flags load correctly).

## 🕹️ How to Use

1. Enter the **Amount** you want to convert.
2. Select the **Base Currency** (From) and the **Target Currency** (To).
3. The **Flags** will update automatically based on your selection.
4. Click the **Swap (↔)** button to quickly flip the currencies.
5. Use the **Moon/Sun toggle** in the header to change the theme.

## ⚙️ How It Works (Code Overview)

<details>
<summary>Click to expand the function breakdown</summary>
<br>

| Block | Responsibility |
|---|---|
| **DropDown Loader** | Dynamically populates both `<select>` menus by iterating through the `countries` array in `mainCountry.js`. |
| **Theme Changer** | Uses a click listener to toggle the `.dark` class on the `body` and swap CSS root variables. |
| **Flag Sync** | Updates the `img` source URL using the `FlagsAPI` based on the selected country code. |

</details>

## 🎨 Customization

Colors are managed via CSS variables in `style.css`. You can change the entire theme by editing:

```css
:root {
  --bg: #f6f7fb;
  --primary: #3b82f6;
  --accent: #14b8a6;
}
```

## ❓ FAQ

<details>
<summary><b>Does it work offline?</b></summary>
<br>
The UI works offline, but Flag images require an internet connection to fetch from FlagsAPI.
</details>

<details>
<summary><b>Where is the exchange rate coming from?</b></summary>
<br>
This version is the UI starter. Real-time rate fetching is planned for the next release.
</details>

## 🗺️ Roadmap / Future Improvements

- [ ] Live API integration for real-time rates
- [ ] Historical data charts for currency trends
- [ ] Save favorites to `localStorage`

## 🤝 Contributing

1. Fork the project
2. Create your branch (`git checkout -b feature/NewFeature`)
3. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](https://github.com/maheerCodes/utility-currency-converter/blob/main/LICENSE) file for details.

## 👤 Author

**Sheikh Mohammad Ali Maheer**

<br>

[![GitHub](https://img.shields.io/badge/GitHub-maheerCodes-181717?style=for-the-badge&logo=github)](https://github.com/maheerCodes)

<div align="center">
  <br>

  <h3>⭐ If you liked this project, consider giving it a star!</h3>

  <p>Made with ❤️ using HTML, CSS & JavaScript</p>
</div>