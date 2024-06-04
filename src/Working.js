import React, { useEffect, useRef, useState } from 'react';
import lastCircle from './lastCircle.svg';
import './Working.css';

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const resizeListener = () => setCoordinates(getCoordinates());
    window.addEventListener("resize", resizeListener);
    setCoordinates(getCoordinates()); // Initial call to set coordinates
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const getCoordinates = () => {
    const coords = imageRefs.current.map(img => {
      const rect = img.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    });
    return coords;
  };

  const getLineStyles = (start, end) => {
    const length = Math.hypot(end.x - start.x, end.y - start.y);
    const angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI);
    return {
      width: `${length}px`,
      transform: `rotate(${angle}deg)`,
      transformOrigin: '0 0',
      top: `${start.y}px`,
      left: `${start.x}px`,
    };
  };

  return (
    <div id="maino">
    <div id="textheading">
        <h1>How does the internship Program works ?</h1>
    </div>
      <div className='lastComponent'>
        <div className='lastComponent-content'>
          {[...Array(5)].map((_, index) => (
            <div key={index} className='lastComponent-content-div'>
              <img
                ref={el => imageRefs.current[index] = el}
                src={lastCircle}
                alt=""
              />
              <div className='lastComponent-content-div-text'>
                {index === 0 && "Learn from our structured pre recorded courses made by experts to meet industry needs"}
                {index === 1 && "Personal mentors to guide and help you throughout your journey as a friend"}
                {index === 2 && "Get guaranteed paid internships after completion of the program along with course completion certificates"}
                {index === 3 && "1:1 live doubt solving support available throughout the day to clear your doubts instantly"}
                {index === 4 && "Build major projects which makes your resume stand apart"}
              </div>
            </div>
          ))}
        </div>
        {coordinates.length === 5 && (
          <>
            <div className='line' style={getLineStyles(coordinates[0], coordinates[3])}></div>
            <div className='line' style={getLineStyles(coordinates[3], coordinates[1])}></div>
            <div className='line' style={getLineStyles(coordinates[1], coordinates[4])}></div>
            <div className='line' style={getLineStyles(coordinates[4], coordinates[2])}></div>
          </>
        )}
      </div>
      <div id="blast"><button id="lastbutton">Apply now for &#x20B9;2999 </button></div>
    </div>
  );
}

export default App;
