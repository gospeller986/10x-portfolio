import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Laptop  from "@/components/Laptop"
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
          <> 
           <div className=" scroll-smooth ">
           <HeroSection/>
           <div className="hidden md:block">
               <Laptop/>
           </div> 
           <div>
           <Projects/>
           </div>
                    
           <Skills/>
           <div>
             <Testimonials/>
           </div>
            <div> 
              <Contact/>
            </div>

           </div>

          </>
  );
}
