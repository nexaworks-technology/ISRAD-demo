import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringSection, setIsHoveringSection] = useState(false);

  // Generate 22 shades of #F2AA4C (golden), avoiding black/white
  const goldenShades = Array.from({ length: 22 }, (_, i) => {
    const lightness = 65 - i; // decrease gradually
    return `hsl(35, 85%, ${lightness}%)`; // golden-orange hues
  });

  // Generate 22 shades of #101820 (dark blue), avoiding pure black
  const darkShades = Array.from({ length: 22 }, (_, i) => {
    const lightness = 15 + i; // increase gradually from dark
    return `hsl(210, 100%, ${lightness}%)`; // dark blue hues
  });

  const currentShades = isHoveringSection ? darkShades : goldenShades;

  useEffect(() => {
    const circles = circlesRef.current;

    circles.forEach((circle, index) => {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = currentShades[index % currentShades.length];
      }
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    // Add hover detection for project images
    const projectImages = document.querySelectorAll('.card .img img');
    
    const handleMouseEnter = () => {
      setIsHovering(true);
      setIsHoveringSection(true); // Also change color when hovering images
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsHoveringSection(false); // Reset color when leaving images
    };
    
    projectImages.forEach(img => {
      img.addEventListener('mouseenter', handleMouseEnter);
      img.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add hover detection for the Projects component specifically
    const projectsComponent = document.querySelector('#pavanom');
    
    const handleProjectsMouseEnter = () => {
      setIsHoveringSection(true);
    };
    
    const handleProjectsMouseLeave = () => {
      setIsHoveringSection(false);
    };
    
    if (projectsComponent) {
      projectsComponent.addEventListener('mouseenter', handleProjectsMouseEnter);
      projectsComponent.addEventListener('mouseleave', handleProjectsMouseLeave);
    }

    window.addEventListener("mousemove", handleMouseMove);

    function animateCircles() {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        if (!circle) return;

        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        
        // Apply scaling based on hover state
        const baseScale = (circles.length - index) / circles.length;
        const hoverScale = isHovering ? 2.5 : 1; // Grow 2.5x on hover
        circle.style.scale = baseScale * hoverScale;
        circle.style.transition = "scale 0.3s ease-out, background-color 0.3s ease-out"; // Smooth transition

        // Update color based on current hover state
        circle.style.backgroundColor = currentShades[index % currentShades.length];

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      projectImages.forEach(img => {
        img.removeEventListener('mouseenter', handleMouseEnter);
        img.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (projectsComponent) {
        projectsComponent.removeEventListener('mouseenter', handleProjectsMouseEnter);
        projectsComponent.removeEventListener('mouseleave', handleProjectsMouseLeave);
      }
    };
  }, [isHovering, isHoveringSection, currentShades]); // Re-run effect when hover states change

  return (
    <>
      {Array.from({ length: 22 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (circlesRef.current[i] = el)}
          className="fixed top-0 left-0 pointer-events-none z-[999999]"
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
          }}
        ></div>
      ))}
    </>
  );
};

export default Cursor;
