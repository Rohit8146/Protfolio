import gsap from "gsap";

export const headerAnimation = () => {
  const header = document.querySelector("header");
  gsap.fromTo(
    header,
    {
      y: -150,
      opacity: 0,
      duration: 1,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  );
};



