import "./HomePage.scss"
export default function HomePage() {

    const emoji = [
        "../../src/assets/images/emojis/cool.png",
        "../../src/assets/images/emojis/cry.png",
        "../../src/assets/images/emojis/happy.png",
      ];

      const moods = [
        "../../src/assets/images/nick-cage-moods/bees-bg.png", 
        "../../src/assets/images/nick-cage-moods/carefree-bg.png",
        "../../src/assets/images/nick-cage-moods/excited-bg.png",
        "../../src/assets/images/nick-cage-moods/focused-bg.png",
        "../../src/assets/images/nick-cage-moods/happy-bg.png",
        "../../src/assets/images/nick-cage-moods/meh-bg.png",
        "../../src/assets/images/nick-cage-moods/relaxed-bg.png",
        "../../src/assets/images/nick-cage-moods/stressed-bg.png",
      ]
  return (
    <div className="main">
        <div className="section">
            <div className="section__intro">
                <h2>If you ever wanted to discover a <span className = "standout-body-text">vibe</span> <br></br> with your current mood in mind <br></br>you've come to the right place</h2>
                <p>Tell us how you really feel and <br></br>how you want to feel, and we'll <br></br>give you the tools to create that vibe</p>
            </div>
            <div className="mood-selector">
                {moods.map((src, index) => (
                    <div>
                        <img key={index} src={src} onClick={() => handleClick(src)} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
