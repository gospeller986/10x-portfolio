"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import StackIcon from "tech-stack-icons";
import Image from "next/image";
import { Meteors } from "./ui/meteors";

function Skills() {
  return (
    <>
      <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center  overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-5xl lg:text-9xl  font-bold text-center text-white relative z-20">
          Skills
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:mx-20 mx-10 mb-10   ">
        <div className=" ">
          
          <div className=" w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border hover:bg-gradient-to-r from-blue-600  via-green-400 to-yellow-400  border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
              

               <StackIcon name="nextjs2" />

               <div className="text-white mt-2 " >Next Js</div>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 hover:bg-gradient-to-r from-blue-600  via-red-600 to-yellow-400  border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
              

               <StackIcon name="nodejs" />

               <div className="text-white mt-2 " >Node js</div>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 hover:bg-gradient-to-r from-blue-600  via-red-600 to-yellow-600  border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
              

               <StackIcon name="mongodb" />

               <div className="text-white mt-2 " >Mongo DB</div>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 hover:bg-gradient-to-r from-blue-600  via-green-400 to-yellow-400 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
              

               <StackIcon name="postgresql" />

               <div className="text-white mt-2 " >Postgre Sql</div>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 hover:bg-gradient-to-r from-blue-600  via-green-400 to-yellow-400 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
              

               <StackIcon name="redis" />

               <div className="text-white mt-2 " >Redis</div>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 hover:bg-gradient-to-r from-red-600  via-green-600 to-yellow-400 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
              

               <StackIcon name="docker" />

               <div className="text-white mt-2 " >Docker</div>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 hover:bg-gradient-to-r from-blue-600  via-green-400 to-yellow-400 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
              

               <StackIcon name="cloudflare" />

               <div className="text-white mt-2 " >CloudFlare</div>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 hover:bg-gradient-to-r from-blue-600  via-green-400 to-yellow-400 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
              

               <StackIcon name="aws" />

               <div className="text-white mt-2 " >Aws</div>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
