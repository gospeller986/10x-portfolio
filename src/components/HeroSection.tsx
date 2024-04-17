
import Image from "next/image";
import React from "react"; 

import github from "@/assets/github.svg"
import Laptop from "./Laptop";
import Link from "next/link";

function HeroSection() {
  return (
    <>
    <div className=" h-auto lg:h-[60vh] md:h-[40rem] w-full rounded-md 
     flex flex-col items-center justify-center relative overflow-hidden 
     mx-auto py-10  md:py-0 scroll-smooth text-white 
     bg-black bg-grid-white/[0.1] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] 
     "> 
     
      <div className="p-4 relative z-10 w-full text-center   ">
        <h1 className="title-container select-none flex flex-col items-center text-center md:flex-row text-[70px]  sm:text-[75px] lg:text-[130px] font-extrabold justify-center w-full">
            <span className="develop w-fit" > 
            <span className="animated-develop" >Imagine.</span>
            <div className="preview-shadow"></div>
            </span>
            <span className="preview w-fit">
            <span className="animated-preview" >Build.</span>
            <div className="preview-shadow"></div>
            </span>
            
            <span className="preview1 w-fit" >
               <span className="animated-preview1">Deliver.</span>
               <div className="preview-shadow1"></div>
            </span>
            
        </h1>

      </div>
      <div className="mt-5 sm:mt-10 text-center flex justify-center w-full sm:text-xl text-[#9b9b9b]">
        <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]" >
        Hey, I&apos;m Satya, your go-to Developer for creating seamless Software experiences . Have an amazing idea ?? Let&apos;s bring it to life!
        </div>
      </div>
      
      <div className="w-full flex justify-center flex-row items-center mt-10">
           <div className="select-none flex flex-col w-full justify-center px-[10%] sm:px-0 sm:flex-row gap-x-10 gap-y-6" >
                 <a href="#projects">
                    <div>
                        <div>
                        
                            <div className="z-[20] relative dripping-btn group cursor-pointer duration-200 flex flex-row items-center justify-center font-[500]  px-[30px] py-[10px] bg-white text-black rounded-[5px]" >
                                
                                <div>❖</div>
                                <div >Projects</div>
                               
                            </div>
                            
                        </div>
                    </div>
                 </a>
                 <a href="https://github.com/gospeller986" >
                    <div className="h-full w-full">
                        <div className="relative bg-white  px-[2px] py-[1px] h-full w-full cursor-pointer duration-200 flex flex-row items-center justify-center font-[500]   text-black rounded-[5px]">
                             <div className="develop-animated-border-btn h-full w-full rounded-[5px] items-center justify-center" ></div>
                             <div className="preview-animated-border-btn h-full w-full rounded-[5px] items-center justify-center" ></div>
                             <div className="ship-animated-border-btn h-full w-full rounded-[5px] items-center justify-center" ></div>
                             <div className="animated-shadow-border-develop items-center justify-center" ></div>
                             <div className="animated-shadow-border-preview items-center justify-center" ></div>
                             <div className="animated-shadow-border-ship items-center justify-center " ></div>
                             <div className="flex w-full flex-row justify-center items-center gap-x-4 font-[400] z-20 duration-200 hover:bg-transparent hover:text-black px-[29px] py-[9px] rounded-[5px] text-white bg-black  ">
                                <Image
                                 src={github}
                                 width={15} 
                                 height={15}
                                 alt="github"/>
                                <div >Contact me</div>
                             </div>
                        </div>
                    </div>
                 </a>
           </div>
      </div>

  


    </div>

<div className="w-full justify-center  flex ">
<div className="text-[16px] font-bold text-[#ffffff] text-center px-4 sm:px-0 mb-3">
WINNER OF THE HACKODISHA HACKATHON, BUILT AND SHIPPED SCALABLE PRODUCTS FROM SCRATCH.
</div>
</div>



</>
  );
}

export default HeroSection;
