import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { BsHouseCheck } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { TbUserCheck } from "react-icons/tb";
const Studentpage = () => {
  return (
    <div className='h-screen w-full bg-slate-100   '>

<div  className='h-[60vh] w-full z-10 rounded-b-[5vh] overflow-hidden bg-transparent relative   ' >

<div className='h-[80vh] z-2 w-full  bg-gradient-to-t  from-[#000] t0-95% from-5% absolute'>

</div>

<img  className=' h-full w-full object-fill  object-center top-0 z-1  absolute' src="https://assets.simplotel.com/simplotel/image/upload/x_366,y_0,w_1316,h_1316,r_0,c_crop,q_80,fl_progressive/w_750,f_auto,c_fit/ananta-hotels-udaipur/Executive_suite3_avqmcg" alt="" />


<div  className='h-[10vh] w-full absolute z-2 p-3 text-4xl  font-serif font-semibold text-neutral-300  justify-center items-center flex '>
VOGUE
</div>






<div className='w-full flex items-center  justify-center '>
    

  <div className="absolute bottom-[110px]  z-3  focus-within:border-1  bg-neutral-100/30 focus-within:border-orange-500 hover:scale-[102%] p-1 flex backdrop-blur-[9px] rounded-3xl justify-center items-center">
    <input
      type="search"
      className="w-[35vh] h-[5vh] rounded-xl p-1  text-[15px]  text-white   outline-none"
      />
      <div className='h-9 w-9 rounded-full  flex items-center justify-center p-1'>
<IoMdSearch className='text-3xl text-orange-500 ' />
      </div>
  </div>

      </div>


    
</div>

<div className='min-h-[50vh]  w-full  pt-3 p-2 flex flex-col gap-2 '>

<div className='h-[10vh] w-full bg-[#dcdbdb] p-1  hover:scale-[102%] hover:bg-orange-500  rounded-2xl flex justify-between items-center  '>
<div  className='w-[12vh] h-full   p-2 flex items-center justify-center  '>
<BsHouseCheck className='text-4xl text-black ' />
</div>
<div className='w-[80vh] h-full  p-2 flex items-center justify-center text-lg font-semibold '>
200+ pg and stays listed 
</div>
</div>
<div className='h-[10vh] w-full bg-[#dcdbdb] p-1  hover:scale-[102%] hover:bg-orange-500  rounded-2xl flex justify-between items-center '>
<div  className='w-[12vh] h-full   p-2 flex items-center justify-center  '>
<LuUsers  className='text-4xl text-black ' />
</div>
<div className='w-[80vh] h-full  p-2 flex items-center justify-center text-lg font-semibold '>
1500+ monthly users
</div>
</div>
<div className='h-[10vh] w-full bg-[#dcdbdb] p-1  hover:scale-[102%] hover:bg-orange-500  rounded-2xl flex justify-between items-center '>
<div  className='w-[12vh] h-full   p-2 flex items-center justify-center  '>
<TbUserCheck  className='text-4xl text-black ' />
</div>
<div className='w-[80vh] h-full  p-2 flex items-center justify-center text-lg font-semibold '>
Unisex and roomi-matching
</div>
</div>
</div>


    </div>
  )
}

export default Studentpage