import React, { useState, useEffect } from 'react';

const RotatingText = () => {
  const [text, setText] = useState("Efficient");
  const [displayText, setDisplayText] = useState("");
  const [transitionClass, setTransitionClass] = useState("translate-x-full");
// new
  useEffect(() => {
    const textOptions = ["Efficient", "Powerful", "Dynamic"];
    const interval = setInterval(() => {
      setText((prevText) => {
        const currentIndex = textOptions.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % textOptions.length;
        return textOptions[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); 

  useEffect(() => {
    let index = 0;
    const maxIndex = text.length;
    const timer = setInterval(() => {
      setDisplayText((prevDisplayText) => {
        const newDisplayText = text.slice(0, index + 1);
        index++;
        if (index > maxIndex) {
          clearInterval(timer);
          return newDisplayText;
        }
        return newDisplayText;
      });
    }, 100); // Adjust the interval to control typing speed

    return () => clearInterval(timer);
  }, [text]); // Effect runs every time `text` changes

  useEffect(() => {
    if (displayText) {
      setTransitionClass("translate-x-0"); // Move text into view
    }
  }, [displayText]);
// test
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-6xl text-blue-600">
      <div className="text-center">Low-code-based ERP</div>
      <div className=" flex items-center">
        <p className="text-6xl text-blue-600">alternative: </p>
        <p
            className={`text-7xl text-red-500 ml-2 transform transition-transform ${transitionClass}`}
            style={{ transitionDuration: '1s' }} 
          >
            {displayText}
          </p>
       
      </div>
    </div>
  );
};

export default RotatingText;
