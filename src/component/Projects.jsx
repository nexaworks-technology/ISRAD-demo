import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  // useLayoutEffect ensures DOM is ready
  useLayoutEffect(() => {
    const footer = document.querySelector(".footer");
    const lastCard = document.querySelector(".card.scroll");
    const pinnedSections = gsap.utils.toArray(".pinned");

    pinnedSections.forEach((section, index, sections) => {
      let nextSection = sections[index + 1] ?? lastCard;

      // fix: The logic for end is a bit weird, check original intent
      let end =
        index === pinnedSections.length - 1
          ? `+=${lastCard.offsetHeight}`
          : footer.offsetTop - window.innerHeight;

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: end,
          pin: true,
          // pinSpacing: false,
          scrub: 1,
        },
      });
    });

    // Clean up ScrollTrigger on unmount (important!)
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      id="pavanom"
      className="flex flex-col items-center justify-center gap-4 w-full h-full text-[#f5f5f5] bg-[#31312F]"
    >
      <section className="card pinned hero h-screen bg-[#F2AA4C] w-full">
        <div>
          <h1 className="selection:bg-[#101820] selection:text-[#F2AA4C] lg:text-9xl text-6xl font-thin text-[#31312F] text-center pt-88">
            Our Projects
          </h1>
        </div>
      </section>

      <section className="card pinned w-full h-[100vh]">
        <div className="img absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full lg:p-20 py-40 px-4">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/17299530/pexels-photo-17299530.jpeg"
            alt=""
          />
        </div>
      </section>

      <section className="card pinned w-full h-[100vh]">
        <div className="img absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full lg:p-20 py-40 px-4">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/5202383/pexels-photo-5202383.jpeg"
            alt=""
          />
        </div>
      </section>

      <section className="relative card scroll w-full h-[100vh]">
        <div className="img absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full lg:p-20 py-40 px-4">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/25048028/pexels-photo-25048028.jpeg"
            alt=""
          />
        </div>
      </section>

      <section className="card footer">
        <h2>sport is fun</h2>
      </section>
    </div>
  );
}
