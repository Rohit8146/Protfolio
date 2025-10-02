import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

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

gsap.registerPlugin(SplitText, ScrollTrigger);

export function SplitTextAnimation() {
  let headings = document.querySelectorAll(".heading");
  headings.forEach((heading) => {
    const segmenter = new Intl.Segmenter("zh", { granularity: "word" });

    document.fonts.ready.then(() => {
      gsap.set(".split", { opacity: 1 });

      const split = SplitText.create(heading, {
        type: "words",
        wordsClass: "word",
        prepareText: (text, el) => {
          return [...segmenter.segment(text)]
            .map((s) => s.segment)
            .join(String.fromCharCode(8204));
        },
        wordDelimiter: { delimiter: /\u200c/, replaceWith: " " },
        autoSplit: true,
        onSplit: (self) => {
          gsap.from(self.words, {
            y: 20,
            opacity: 0,
            duration: 2,
            stagger: 0.1,
            ease: "back",
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        },
      });
    });
  });
}

export function fadeInAnimation() {
  gsap.fromTo(
    ".paragraph-text",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".paragraph-text",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export function experienceCardAnimation() {
  gsap.fromTo(
    ".card",
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: "power3.out",
      stagger: 0.3,
      start: "top top",
      scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export function projectCardAnimation() {
  gsap.fromTo(
    ".project-card",
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: "power3.out",
      stagger: 0.3,
      start: "top top",
      scrollTrigger: {
        trigger: ".project-card",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export function listPointAnimation() {
  gsap.fromTo(
    ".list-points li",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".list-points li",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export function socialIconAnimation() {
  document.querySelectorAll(".social-icons-wrapper a").forEach((icon) => {
    gsap.fromTo(
      icon,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: icon,
          start: "top 95%",
        },
      }
    );
  });
}

export function fadeInImageAnimation() {
  gsap.fromTo(
    ".image_wrapper",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".image_wrapper",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
}
