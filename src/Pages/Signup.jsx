import React, { useState } from "react"
import FormInputs from "../component/FormInputs"
import FormButton from "../component/FormButton"
import PasswordInput from "../component/PasswordInput"
import Image from "../component/Image"
import { Link } from "react-router-dom"

function Signup(){

    

     const [values, setValues] = useState({
          email:"",
          username:"",
          phonenumber:"",
          password:"",
     });

     const inputs =[
          {
               id:1,
               name:"email",
               type:"email",
               errorMessage:"It should be a valid Email Address",
               label:"Email Address",
               required: true,
               
          },
          {
               id:2,
               name:"username",
               type:"username",
               label:"Username",
               errorMessage:"Username should be 4-10 characters",
               pattern:  "^[A-Za-z0-9]{4,10}$",
               required: true,
     
          },
          {
               id:3,
               name:"phonenumber",
               type:"phonenumber",
               label:"Phone Number",
               required: true,
          },
         
     ]

     const handleSubmit = (e) => {
          e.preventDefault();
          
     };

     const onChange = (e) =>{
          setValues({...values, [e.target.name]: e.target.value});
     };

     console.log(values)

     return(
          <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

               <Image />

               <div className="bg-orange-100 flex flex-col  items-center pt-10 ">

                    <form onSubmit={handleSubmit} className="text-gray-600 w-3/5 sm:w-4/5 lg:w-3/5  pt-5">

                         <h2 className="text-2xl font-medium text-gray-600 mb-3 mt-2 sm:mb-5">
                              Create Account
                         </h2>

                         <div className="mb-5 w-100">
                             {inputs.map((input) =>(
                                <FormInputs 
                                   key={input.id} 
                                   {...input} 
                                   value={values[input.name]}
                                   onChange={onChange} />   
                             ))}
                             <PasswordInput
                               onChange={onChange}
                              value={values.password} />
                                
                         </div>

                        
                         <div className="text-xs flex  mb-2 items-center ">
                             <div>
                                   <input type="checkbox" className="mr-2" />
                              </div>
                              <p>
                                   I have read and accept the 
                                   <a className="text-[#FF8A00] font-bold hover:text-orange-600" href='#'>
                                        Terms and Conditions
                                   </a>
                                   , Privacy and Cookie Notice
                              </p> 
                         </div>

                         <div className="text-xs flex  mb-2 items-center ">
                             <div>
                                   <input type="checkbox" className="mr-2" />
                              </div>
                              <p>
                                   I want to receive FoodFair Newsletters in my mails
                              </p>
                         </div>

                         <FormButton value="Create Account" />
                           
                         <p className="text-sm mt-2 sm:mt-4">
                              Already have an account? 
                              <Link to={"/login"} className="text-[#FF8A00] hover:text-orange-600" >
                                   Login
                              </Link>
                         </p>
                    </form>
               </div>
                           

          </div>
     )
     

     
}

export default Signup