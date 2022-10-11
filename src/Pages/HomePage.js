import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';

const HomePage = () => {
    return (
        <>
            <Header />

            {/* main body */}
            <main className='mt-20 text-center'>

                {/* hero section */}
                <div>
                    <p className='font-bold text-lg md:text-4xl'>The meeting place for all </p>
                    <p className='font-bold text-xl uppercase py-4 text-transparent bg-clip-text bg-gradient-to-r from-[#f9580a] to-[#ff8a00]  md:text-5xl '>food vendors  <span className='text-black'>&</span> foodies</p>

                </div>


                {/* search bar container */}
                <div className='  flex justify-center items-center my-4 space-x-2'>

                    <div className='w-[60%] border-2 border-gray-200 flex py-2 px-4 rounded-lg shadow-sm md:w-[30%] '>
                        {/* location image */}
                        <img src={require('../assert/location_icon.png')} alt="" />
                        {/* input box */}
                        <input type="search" className=' px-4 w-full outline-none' placeholder='Enter Location' />
                    </div>

                    {/* search button */}
                    <div>
                        <button className='py-2 px-6 font-bold text-white rounded-md bg-[#ff8a00]'>Search</button>
                    </div>
                </div>


                {/* site analysis image */}
                <div className='my-[10%] flex items-center justify-center'>
                    <img src={require('../assert/food.png')} alt="" className='w-[60%]' />
                </div>





                {/* seaction conatiner */}
                <div className="bg-[#fef6eb] py-10 my-[10%] ">
                    {/* section title */}
                    <p className='text-center py-6 text-3xl font-bold'>How it works</p>


                    <div className=' flex flex-col space-y-2 items-center justify-evenly md:flex-row'>

                        {/* step1 */}
                        <div className='flex flex-col justify-center items-center mt-2'>
                            <img src={require('../assert/search-favorite.png')} alt="" className='w-[70px]' />
                            <div className='text-center font-semibold'>
                                <p>Sign Up as a</p>
                                <p>Vendor or Customer</p>
                            </div>
                        </div>

                        {/* step2 */}
                        <div className='flex flex-col justify-center items-center'>
                            <img src={require('../assert/location.png')} alt="" className='w-[70px]' />
                            <div className='text-center font-semibold'>
                                <p>Set Your Location</p>
                                <p>for delivery or Pick-up</p>
                            </div>
                        </div>

                        {/* step3 */}
                        <div className='flex flex-col justify-center items-center mt-3'>
                            <img src={require('../assert/user-add.png')} alt="" className='w-[70px]' />
                            <div className='text-center font-semibold'>
                                <p>Find Customers or</p>
                                <p>Vendor near you</p>
                            </div>
                        </div>
                    </div>
                </div>




                {/* categories container */}
                <div className='my-[10%] md:container md:mx-auto  px-10'>

                    {/* section title */}
                    <div className='flex'>
                        <p className='font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#f9580a] to-[#ff8a00] '>CATEGORIES</p>
                        <img src={require('../assert/arrow-right.png')} alt="" />
                    </div>


                    {/* dish 1 */}
                    <div className='flex flex-wrap space-x-4 space-y-4 items-center justify-center mt-10 md:flex-nowrap md:space-x-10 '>

                        <div className='shadow-md w-[120px] md:w-[300px] rounded-md mt-2 '>
                            <img src={require('../assert/img1.png')} alt=""  />

                            <div className='text-left py-4 px-2'>
                                <p className='font-bold'>Restaurant</p>
                                <p className='text-xs'>Nigerian . Asain . Cotinental</p>

                                <div className='flex justify-end mt-4 text-sm font-bold'>
                                    <p>view more </p>
                                    <img src={require('../assert/arrow-right2.png')} alt="" className='w-4 pt-1' />
                                </div>
                            </div>
                        </div>


                        {/* dish 2 */}
                        <div className='shadow-md w-[120px] md:w-[300px] rounded-md '>
                            <img src={require('../assert/img2.png')} alt="" />

                            <div className='text-left py-4 px-2'>
                                <p className='font-bold'>Restaurant</p>
                                <p className='text-xs'>Nigerian . Asain . Cotinental</p>

                                <div className='flex justify-end mt-4 text-sm font-bold'>
                                    <p>view more </p>
                                    <img src={require('../assert/arrow-right2.png')} alt="" className='w-4 pt-1'/>
                                </div>
                            </div>
                        </div>


                        {/* dish3 */}
                        <div className='shadow-md w-[120px] md:w-[300px] rounded-md '>
                            <img src={require('../assert/img3.png')} alt="" />

                            <div className='text-left py-4 px-2'>
                                <p className='font-bold'>Restaurant</p>
                                <p className='text-xs'>Nigerian . Asain . Cotinental</p>

                                <div className='flex justify-end mt-4 text-sm font-bold'>
                                    <p>view more </p>
                                    <img src={require('../assert/arrow-right2.png')} alt="" className='w-4 pt-1'/>
                                </div>
                            </div>
                        </div>


                        {/* dish4 */}
                        <div className='shadow-md w-[120px] md:w-[300px] '>
                            <img src={require('../assert/img4.png')} alt="" />

                            <div className='text-left py-4 px-2'>
                                <p className='font-bold'>Restaurant</p>
                                <p className='text-xs'>Nigerian . Asain . Cotinental</p>

                                <div className='flex justify-end mt-4 text-sm font-bold'>
                                    <p>view more </p>
                                    <img src={require('../assert/arrow-right2.png')} alt="" className='w-4 pt-1' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                {/* customer review section  */}
                <div className='my-[10%] container mx-auto'>
                    {/* section title */}
                    <p className='text-center py-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9580a] to-[#ff8a00] '>CUSTOMER REVIEW</p>

                    <div className='flex mx-4 bg-red-50 p-2 justify-center items-center space-y-4 space-x-2 md:space-x-6 md:bg-transparent md:mx-0'>

                        {/* customer image */}
                        <div>
                            <img src={require('../assert/profile.png')} className={'w-[90px] -mt-10 rounded-full  md:-mt-0 md:rounded-none md:w-[250px]'} alt="" />
                        </div>

                        {/* customer decription continer */}
                        <div className='w-[100%]  px-4 md:py-10 text-justify md:text-left md:shadow-lg md:w-[40%]'>
                            {/* custmoer name */}
                            <p>MICHAEL</p>
                            {/* ratiing container */}
                            <div className='flex'>
                                <img src={require('../assert/Star 1.png')} alt="" className='w-[19px] md:w-[30px]' />
                                <img src={require('../assert/Star 1.png')} alt="" className='w-[19px] md:w-[30px]' />
                                <img src={require('../assert/Star 1.png')} alt="" className='w-[19px] md:w-[30px]' />
                                <img src={require('../assert/Star 1.png')} alt="" className='w-[19px] md:w-[30px]' />
                                <img src={require('../assert/Star 1.png')} alt="" className='w-[19px] md:w-[30px]' />
                            </div>
                            {/* review text */}
                            <p className='text-xs py-2 md:py-4 md:text-lg'>lorem jgvd scdschdsh cjkdshckd scjdscjhdschd djscbehnef rekeg ffere sbhgcdsc lorem jgvd scdschdsh cjkdshckd scjdscjhdschd djscbehnef cjkdshckd scjdscjhdschd</p>
                        </div>
                    </div>
                </div>

            </main>





            {/* recommendetion  section*/}

            {/* container */}
            <div className='my-[10%] container w-full mx-auto px-10 md:px-20'>

                {/* text*/}
                <p className='text-left text-lg'>couldn't find your favorite  vendor? <span className='uppercase font-bold text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#f9580a] to-[#ff8a00]  '>recommend vendor</span></p>

                {/* input flied 1 */}
                <div className='flex flex-col space-y-2 justify-center items-center my-4 md:my-10 self-center md:flex-row'>
                    <div className='w-[100%]  '>
                        <p className='text-left py-2 font-bold'>Vendor Name</p>
                        <input type="text" className='border-2 border-gray-300 w-[100%] md:w-[70%] h-12 px-4 rounded-xl' placeholder='Enter Name' />
                    </div>

                    {/* input flied 2 */}
                    <div className='w-[100%]'>
                        <p className='text-left py-2 font-bold'>Business Number</p>
                        <input type="text" className='border-2 border-gray-300 w-[100%] md:w-[70%] h-12 px-4 rounded-xl' placeholder='Enter phone number' />
                    </div>
                </div>


                {/* input flied 3 */}
                <div className='flex flex-col space-y-2 justify-evenly items-center md:flex-row '>
                    <div className='w-[100%]  '>
                        <p className='text-left py-2 font-bold'>Location</p>
                        <input type="text" className='border-2 border-gray-300 w-[100%] md:w-[70%] h-12 px-4 rounded-xl' placeholder='Enter location' />
                    </div>


                    {/* input flied 4 */}
                    <div className='w-[100%]'>
                        <p className='text-left py-2 font-bold'>Email{'(If any)'}</p>
                        <input type="text" className='border-2 border-gray-300 w-[100%] md:w-[70%] h-12 px-4 rounded-xl' placeholder='Enter email address' />
                    </div>
                </div>

                {/* recommend button */}
                <div className='flex justify-center items-center md:mr-[12em] mt-20'>
                    <p className='bg-[#ff8a00] w-full md:w-[20%] rounded-lg font-bold py-4 text-white text-center' >Recommend Vendor</p>
                </div>

            </div>

            {/* footer */}
            <Footer />
        </>
    );
}

export default HomePage;
