import Lenis from "lenis";

function SmoothScroll({ children }) {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return <div className="smooth-scroll">{children}</div>;
}

export default SmoothScroll;
