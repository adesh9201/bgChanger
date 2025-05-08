# 🎨 Color Changer App

A dynamic background color changer built with React, Vite, and Tailwind CSS.

![Color Changer App Demo](https://github.com/adesh9201/bgChanger/blob/main/public/img11.png)

## ✨ Features

- **Quick Color Selection**: One-click changes from a predefined color palette
- **Custom Color Picker**: Choose any color with visual picker and HEX input
- **Color History**: Track and reuse recently selected colors
- **Smooth Animations**: Pleasant transition effects when changing colors
- **Copy to Clipboard**: Easily copy color values with visual feedback
- **Responsive Design**: Works seamlessly on all device sizes
- **Modern UI**: Glass-morphism effects and clean, intuitive interface

## 🛠️ Tech Stack

- **React** - UI components and state management
- **Vite** - Fast development and optimized builds
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful, minimal SVG icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/color-changer.git
   cd color-changer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📖 Usage

- Click on any color button at the bottom of the screen to change the background
- Use the color picker to select custom colors
- Enter a specific HEX code in the input field
- Click on any color in the history to reapply it
- Copy the current color value by clicking the copy icon
- Reset to the default gradient using the reset button

## 🧩 Project Structure

```
color-changer/
├── public/
│   └── ...
├── src/
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Entry point
│   ├── index.css      # Global styles
│   └── ...
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🔧 Key Components

### State Management

```jsx
const [color, setColor] = useState("");
const [customColor, setCustomColor] = useState("#4e54c8");
const [colorHistory, setColorHistory] = useState([]);
const [copied, setCopied] = useState(false);
const [animating, setAnimating] = useState(false);
```

### Color History Tracking

```jsx
useEffect(() => {
  if (color && !colorHistory.includes(color)) {
    setColorHistory(prev => [color, ...prev.slice(0, 7)]);
  }
}, [color]);
```

### Animation Effects

```jsx
useEffect(() => {
  if (color) {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 500);
    return () => clearTimeout(timer);
  }
}, [color]);
```

## 🌐 Deployment

Build the project for production:

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with optimized files ready for deployment.

Deploy to your preferred hosting platform:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- or any static hosting service

## 🔮 Future Enhancements

- [ ] Save color palettes to local storage
- [ ] Add gradient generation capabilities
- [ ] Implement color scheme suggestions
- [ ] Add accessibility features for color blindness
- [ ] Export color palettes as CSS variables
- [ ] Add dark/light mode toggle
- [ ] Create shareable color palette links

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

---

Made with ❤️ by [Adesh Mishra](https://adeshmishra-portfolio.vercel.app/)

If you found this project helpful, please give it a ⭐!
