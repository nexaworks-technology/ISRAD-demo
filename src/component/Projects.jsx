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
          <h1 className="lg:text-9xl text-6xl font-thin text-center pt-88">
            Our Projects
          </h1>
        </div>
      </section>

      <section className="card pinned w-full h-[100vh]">
        <div className="img absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full lg:p-20 py-40 px-4">
          <img
            className="w-full h-full object-cover"
            src="https://imgs.search.brave.com/uzT0jqCtDHXh_6hJhKhw8JL4caym2CYIbw9-dT8Zpr4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/NDI5NTIxNi92ZWN0/b3IvZGVmb2N1c2Vk/LWFic3RyYWN0LXJl/ZC1iYWNrZ3JvdW5k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1IUXEtZGhqWGl4/T2QwN1psWW9sdWVW/Zk5aOUR4UV9vZ1J5/Rnh5a1gwYUh3PQ"
            alt=""
          />
        </div>
      </section>

      <section className="card pinned w-full h-[100vh]">
        <div className="img absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full lg:p-20 py-40 px-4">
          <img
            className="w-full h-full object-cover"
            src="https://imgs.search.brave.com/geboIo4I_DkcguZbBXlL8z1qwl23g468tr6LDf3gV8M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aW1nYWNhZGVteS5j/b20vc2l0ZXMvZGVm/YXVsdC9maWxlcy9p/bWctYWNhZGVteS1h/Y2FkZW1pY3MtZXh0/ZW5kZWQuanBn"
            alt=""
          />
        </div>
      </section>

      <section className="relative card scroll w-full h-[100vh]">
        <div className="img absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full lg:p-20 py-40 px-4">
          <img
            className="w-full h-full object-cover"
            src="https://imgs.search.brave.com/l6LYZynCW4UWecX2bQ9vRPEcsIba_itvQ2W-NQ8mbbs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzg3LzE4LzY0/LzM2MF9GXzg4NzE4/NjQ5NV93ZFpVZDN6/ckY5TDVTN01idG1O/ZnNHVVI0NmRaOUNq/aS5qcGc"
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
