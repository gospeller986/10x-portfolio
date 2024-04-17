import React from 'react'

function Navbar() {
  return (
    <div className=' sticky top-0 w-full z-50 overflow-hidden'>
        <div className='flex flex-row justify-center w-full py-[14px] px-[14px] bg-black border-b border-[#72727246] shadow-md shadow-[#ffffff09]' >
               <div className='container flex flex-row items-center justify-between'>
                 <a href='/'>
                    <div className='h-[20px] w-fit'>
                         <div className='flex flex-row items-center gap-[0.2px] w-full h-full select-none'>
                            <div className='text-2xl font-bold capitalize text-white'>Satya.dev</div>
                         </div>
                    </div>
                 </a>
                 <a href='https://drive.google.com/file/d/196cWoQyzBWNZiGilGxz_mjsidCrh42Qh/view?usp=sharing' target='_blank' >
                      <div className='hover:bg-[#d1d1d1] flex flex-row gap-x-2 bg-white w-fit cursor-pointer text-black font-semibold py-[5px] px-[14px] rounded-[4px] text-[14px] select-none '>
                         <div className='flex flex-row items-center'>
                          🚀
                         </div>
                         <div>Hire me</div>
                      </div>
                 </a>
               </div>
        </div>
    </div>
  )
}

export default Navbar