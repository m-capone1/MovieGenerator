import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.scss';

export default function HomePage() {
  const navigate = useNavigate();

  const moods = [
    { src: "../../src/assets/images/nick-cage-moods/bees-bg.png", name: 'bees' },
    { src: "../../src/assets/images/nick-cage-moods/carefree-bg.png", name: 'carefree' },
    { src: "../../src/assets/images/nick-cage-moods/excited-bg.png", name: 'excited' },
    { src: "../../src/assets/images/nick-cage-moods/focused-bg.png", name: 'focused' },
    { src: "../../src/assets/images/nick-cage-moods/happy-bg.png", name: 'happy' },
    { src: "../../src/assets/images/nick-cage-moods/meh-bg.png", name: 'meh' },
    { src: "../../src/assets/images/nick-cage-moods/relaxed-bg.png", name: 'relaxed' },
    { src: "../../src/assets/images/nick-cage-moods/stressed-bg.png", name: 'stressed' },
  ];

  const handleClick = (mood) => {
    console.log(`${mood.name} was clicked`);
    navigate(`/generator/${mood.name}`);
  };

  return (
    <div className="main">
      <div className="section">
        <div className="section__intro">
          <h2>If you ever wanted to discover a <span className="standout-body-text">vibe</span> <br /> with your current mood in mind <br />you've come to the right place</h2>
          <p>Tell us how you really feel and <br />how you want to feel, and we'll <br />give you the tools to create that vibe</p>
        </div>
        <div className="mood-selector">
          {moods.map((mood, index) => (
            <div key={index}>
              <img src={mood.src} onClick={() => handleClick(mood)} alt={mood.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}