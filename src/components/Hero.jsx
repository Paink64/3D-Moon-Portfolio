import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { MoonCanvas, EarthCanvas, 
  StarsCanvas  } from "./canvas";

const Hero = () => {
  return (
    <section className={`${styles.padding} relative w-auto h-screen mx-auto flex justify-center items-center`}>
      <div className={`h-full flex xl:flex-row flex-col`}>
      <div
        className={`inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FE0039]' />
          <div className='w-1 sm:h-80 h-40 rocket-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className='text-[#FE0039]'>Joaquin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a Software Developer.
          </p>
        </div>
      </div>
        <MoonCanvas/>
      </div>
    </section>
  );
};

export default Hero;