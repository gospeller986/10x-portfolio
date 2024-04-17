import React from "react";

function Footer() {
  return ( 
    <footer className="  md:fixed fixed bottom-0 w-full " >
    <div className=" justify-center items-center  sm:ml-0" >
      <div className=" lg:w-[100%] ">
        <div className="bg-gradient-to-r from-black via-gray-500 to-black pt-[1px] z-50 relative">
          <div className="p-4 select-none flex flex-row items-center justify-between bg-gradient-to-r from-transparent via-black to-transparent">
            <div className="gap-y-2 flex flex-col lg:px-20">
              <div className="text-sm text-gray-400 select-text">
                Satyajit Pal
              </div>
              <div className="text-sm text-gray-400 select-text">
                Mail @ palsatyajit986@gmail.com
              </div>
              <div className="text-sm text-[#525252]">
                ©Satya Dev. All rights reserved.
              </div>
            </div>
            <div className="lg:px-20">
              <a href="mailto:palsatyajit986@gmail.com">
                <div className="hover:bg-[#d1d1d1] flex flex-row gap-x-2 bg-white w-fit cursor-pointer text-black font-semibold py-[5px] px-[14px] rounded-[4px] text-[14px] select-none ">
                  <div className=" sm:flex flex-row items-center">
                    <div className=" text-center">Email Me</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
