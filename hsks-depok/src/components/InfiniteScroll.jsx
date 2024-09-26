import React, { useEffect, useRef } from "react";
import "./Scroller.css"; // Impor file CSS terpisah

function Scroller({ children, speed = "medium", direction = "left" }) {
  const scrollerRef = useRef(null);

  useEffect(() => {
    // Check if the user prefers reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      // add data-animated="true" to the scroller
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // Clone each item and append it to the `.scroller__inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div
      className="scroller"
      data-speed={speed}
      data-direction={direction}
      ref={scrollerRef}
    >
      <div className="scroller__inner">{children}</div>
    </div>
  );
}

export default Scroller;
