"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function Testimonials() {
  return (
    <div className="bg-black">


      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]  items-center justify-center relative overflow-hidden">
      <div className=" mb-8 lg:text-9xl md:text-7xl text-5xl  bg-gradient-to-r from-white via-slate-400 to-white font-bold text-transparent bg-clip-text text-center ">
        Testimonials
      </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  );
}

export default Testimonials;

const testimonials = [
  {
    quote:
      "Working with Satyajit has been an absolute pleasure. His exceptional talent as a software developer is matched only by his dedication to delivering high-quality work. I highly recommend Satya for his expertise, professionalism, and commitment to excellence..",
    name: "Satyabrata Pal",
    title: "SDE @ Pi Technologies Inc",
  },
  {
    quote:
      "Satyajit's expertise shines through in every project he undertakes, demonstrating not only technical prowess but also a deep understanding of client needs. His collaborative nature and innovative thinking make him a true standout in the field.",
    name: "Satya Mahapatra",
    title: "Senior Designer @ Brand Catapault ",
  },
  {
    quote: "Satyajit’s creativity and passion for his work can intrigue you. His approach towards complex problems , dedication and hardwork can help you get the desired results.",
    name: "Teswa Tanaya Dash",
    title: "PB @ HDFC Bank",
  },
  {
    quote:
      "Satya's creativity in software development is truly remarkable. His creative flair brings innovation to every line of code he writes, making him an invaluable asset to any team.",
    name: "Ishpreet Singh",
    title: "SDE @ Zenskar",
  },
  {
    quote:
      "Satya is a software virtuoso His work ethic and attention to detail consistently exceed expectations. For top-tier development, Satya is the name you can trust...",
    name: "Anshuman Behera",
    title: "SDET @ Move In Sync ",
  },
];
