import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {init} from 'ityped';
import React , { useEffect , useRef} from "react";
import {AiOutlineGithub } from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";
import {AiOutlineInstagram} from "react-icons/ai";
import {BiLinkAlt} from "react-icons/bi";
import {aarti} from "../assets";
import "./Hero.scss";

const Hero = () => {

  const textRef=useRef();
  useEffect(()=>
  {
    init(textRef.current, { showCursor: true, strings: ['Software Developer '] })
  },[]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex">
      <div
        className={`head1 absolute  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-40 sm:h-90 violet-gradient' />
        </div>


        <div className="head2">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hii there, I'm <p className='name text-[#915EFF]'>Zaid Khan</p>
          </h1>
          <h3>
            <span ref={textRef} className={`${styles.heroSubText} mt-2 green-text-gradient`}></span>
          </h3>
        
        <div className="absolute link1">        
        <a
          href="https://github.com/zaidkhan06" target="_blank">
          <AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/zaidkhan01/" target="_blank">
          <ImLinkedin />
        </a>
        <a
          href="https://www.instagram.com/zaidkhan1/" target="_blank">
          <AiOutlineInstagram />
        </a>
       

      </div>

      </div>
      </div>
      <div className="absolute imgcontainer1 violet-gradient">
        <img src={aarti} alt="" className="object-contain"/>
      </div>
      </div>


      <ComputersCanvas />

      <div className='absolute flex items-center justify-end w-10 xs:bottom-2 bottom-6'>
        <a href='#education'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 mb-1 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;