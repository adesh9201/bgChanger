import { useState, useEffect } from "react";
import { Trash, RotateCcw, Copy, Check } from "lucide-react";

function App() {
  const [color, setColor] = useState("");
  const [customColor, setCustomColor] = useState("#4e54c8");
  const [colorHistory, setColorHistory] = useState([]);
  const [copied, setCopied] = useState(false);
  const [animating, setAnimating] = useState(false);
  
  const colors = [
    "red", "green", "blue", "gray", "orange", "pink", "violet",
    "purple", "yellow", "brown", "teal", "cyan", "indigo", "lime",
    "skyblue", "magenta", "maroon", "gold", "coral", "navy", "crimson", "olive", "darkgreen", "chocolate"
  ];

  // Apply animation when color changes
  useEffect(() => {
    if (color) {
      setAnimating(true);
      const timer = setTimeout(() => setAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [color]);

  // Add color to history
  useEffect(() => {
    if (color && !colorHistory.includes(color)) {
      setColorHistory(prev => [color, ...prev.slice(0, 7)]);
    }
  }, [color]);

  // Apply custom color
  const handleCustomColorChange = (e) => {
    setCustomColor(e.target.value);
  };

  const applyCustomColor = () => {
    setColor(customColor);
  };

  // Copy color to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color || "gradient");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset to default gradient
  const resetColor = () => {
    setColor("");
    setAnimating(true);
    setTimeout(() => setAnimating(false), 500);
  };

  // Clear color history
  const clearHistory = () => {
    setColorHistory([]);
  };

  return (
    <div
      className={`w-full h-screen transition-all duration-500 ease-in-out flex flex-col items-center ${animating ? "scale-105" : "scale-100"}`}
      style={{
        background: color
          ? color
          : "linear-gradient(to right, #4e54c8, #8f94fb)",
      }}
    >
      {/* Project Name & Current Color */}
      <div className="text-center mt-6 md:mt-10">
        <h1 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg bg-black bg-opacity-40 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-md backdrop-blur-sm tracking-wide">
          🎨 Color Changer App
        </h1>
        
        <div className="mt-3 inline-flex items-center gap-2 text-white font-medium bg-black bg-opacity-30 px-4 py-1 rounded-full backdrop-blur-sm shadow-sm">
          <span className="text-lg">
            {color ? (
              <>Background: <span className="font-bold capitalize">{color}</span></>
            ) : (
              <>Gradient Background</>
            )}
          </span>
          <button 
            onClick={copyToClipboard} 
            className="ml-2 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-all"
            title="Copy color"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
      </div>

      {/* Custom Color Picker */}
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-xl">
        <div className="flex items-center gap-2">
          <input 
            type="color" 
            value={customColor}
            onChange={handleCustomColorChange}
            className="w-10 h-10 rounded cursor-pointer"
          />
          <input
            type="text"
            value={customColor}
            onChange={handleCustomColorChange}
            className="bg-white bg-opacity-70 rounded px-2 py-1 w-24 text-center font-mono"
          />
        </div>
        <button
          onClick={applyCustomColor}
          className="px-4 py-1 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full text-gray-800 font-medium transition-all duration-200"
        >
          Apply Custom Color
        </button>
        <button
          onClick={resetColor}
          className="flex items-center gap-1 px-3 py-1 bg-white bg-opacity-60 hover:bg-opacity-80 rounded-full text-gray-800 font-medium transition-all"
          title="Reset to default gradient"
        >
          <RotateCcw size={16} /> Reset
        </button>
      </div>

      {/* Color History */}
      {colorHistory.length > 0 && (
        <div className="mt-6 w-full max-w-lg">
          <div className="flex justify-between items-center mb-2 px-4">
            <h3 className="text-white font-semibold bg-black bg-opacity-30 px-3 py-1 rounded-lg backdrop-blur-sm">
              Recently Used Colors
            </h3>
            <button
              onClick={clearHistory}
              className="flex items-center gap-1 text-white bg-black bg-opacity-30 px-2 py-1 rounded-lg hover:bg-opacity-50 transition-all"
              title="Clear history"
            >
              <Trash size={14} /> Clear
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 px-4">
            {colorHistory.map((clr, index) => (
              <button
                key={index}
                onClick={() => setColor(clr)}
                className="w-10 h-10 rounded-full shadow-md hover:scale-110 transform transition-all duration-200 hover:ring-2 hover:ring-white"
                style={{ backgroundColor: clr }}
                title={clr}
              />
            ))}
          </div>
        </div>
      )}

      {/* Color Buttons */}
      <div className="fixed flex flex-wrap justify-center bottom-6 md:bottom-10 inset-x-0 px-2 md:px-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 shadow-xl bg-white bg-opacity-90 backdrop-blur-md rounded-2xl md:rounded-3xl px-3 md:px-6 py-3 md:py-4 max-w-2xl md:max-w-6xl mx-auto">
          {colors.map((clr, index) => (
            <button
              key={index}
              onClick={() => setColor(clr)}
              className="px-3 md:px-4 py-1 md:py-2 rounded-full text-white font-medium shadow-md hover:scale-110 transform transition-all duration-200 hover:ring-2 hover:ring-offset-1 capitalize text-sm md:text-base"
              style={{ backgroundColor: clr }}
            >
              {clr}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;