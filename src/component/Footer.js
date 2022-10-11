import React from 'react';

const Footer = () => {
    return (
        // footer container
        <div className='py-10 bg-slate-600 flex justify-between px-2 md:px-20 '>
            
            <div className='w-[100%]'>
                <p className='my-4 text-white font-bold'>Subscribe to our Newsletter</p>

                {/* subcribes form */}
                <form className='flex '>
                    <input type="email" className='bg-white h-10  rounded-lg px-4 w-[70%] md:w-1/3' placeholder='Enter Email address' />
                    <button type='submit' className='bg-gradient-to-r from-[#f9580a] to-[#ff8a00] mx-2 text-white px-4 py-2 rounded-lg md:px-8 md:mx-4'>Subscribe</button>
                </form>
                
                {/* all right */}
                <p className='my-4 text-white text-center font-bold'>&copy; 2022 Meals . All rights reserved</p>
            </div>

            {/* social media icons */}
            <div className='flex flex-col space-y-1 md:space-y-2'>
                <div className='p-2 bg-white w-8 md:w-10 rounded-full  '><img src={require('../assert/facebook.png')} alt="" className='w-[15px] md:w-[20px]' /></div>
                <div className='p-2 bg-white w-8 md:w-10 rounded-full '><img src={require('../assert/twitter.png')} alt="" className='w-[15px] md:w-[20px]'  /></div>
                <div className='p-2 bg-white w-8 md:w-10 rounded-full '><img src={require('../assert/instargram.png')} alt="" className='w-[15px] md:w-[20px]'  /></div>
            </div>
        </div>
    );
}

export default Footer;
