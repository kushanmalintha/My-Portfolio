import { useState, useRef } from "react";
import "../styles/Projects.css";

const projects = [
  { 
    id: 1, 
    title: "GameHub", 
    image: "/My-Portfolio/gamehub.jpg",
    description: "A fun and interactive platform for playing challenging and engaging multiplayer and single-player games.", 
    video: "/My-Portfolio/gamehub.mp4" 
  },
  { 
    id: 2, 
    title: "Project Two", 
    image: "/My-Portfolio/project.jpg",
    description: "Description of project two", 
    video: "https://www.w3schools.com/html/mov_bbb.mp4" 
  },
  { 
    id: 3, 
    title: "Project Three", 
    image: "/My-Portfolio/project.jpg",
    description: "Description of project three", 
    video: "https://www.w3schools.com/html/mov_bbb.mp4" 
  },
  { 
    id: 4, 
    title: "Project Four", 
    image: "/My-Portfolio/project.jpg",
    description: "Description of project four", 
    video: "https://www.w3schools.com/html/mov_bbb.mp4" 
  },
  { 
    id: 5, 
    title: "Project Five", 
    image: "/My-Portfolio/project.jpg",
    description: "Description of project five", 
    video: "https://www.w3schools.com/html/mov_bbb.mp4" 
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(null);
  const touchStartX = useRef(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    touchStartX.current = null;
  };

  const handleCardClick = (index) => {
    if (index === current) {
      setShowVideo(projects[index].video);
    } else {
      setCurrent(index); // if blurred card clicked → jump to that project
    }
  };

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="carousel">
        <div className="cards"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project, index) => {
            let position = "hidden";

            if (index === current) {
              position = "active";
            } else if (index === (current - 1 + projects.length) % projects.length) {
              position = "left-blur";
            } else if (index === (current + 1) % projects.length) {
              position = "right-blur";
            }

            return (
              <div
                key={project.id}
                className={`card ${position}`}
                onClick={() => handleCardClick(index)}
              >
                <img src={project.image} alt={project.title} />
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop navigation buttons */}
        <button className="nav-btn left desktop-only" onClick={prevSlide}>‹</button>
        <button className="nav-btn right desktop-only" onClick={nextSlide}>›</button>
      </div>

      {/* Video popup */}
      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(null)}>
          <div className="video-content" onClick={(e) => e.stopPropagation()}>
            <video controls autoPlay>
              <source src={showVideo} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <button className="close-btn" onClick={() => setShowVideo(null)}>✖</button>
          </div>
        </div>
      )}
    </section>
  );
}
