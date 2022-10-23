import React, {useState} from "react"
import "./FormStyle.css";
import { GoEye, GoEyeClosed} from "react-icons/go"

//This componenet is just for the password input


const PasswordInput = (props) => {
     const [focused, setFocused] = useState(false);

     const { onChange, ...inputProps} = props;

     const [showPassword, setShowPassword] = useState(false)

     

     const handleTogglePassword = () => {
          setShowPassword(!showPassword)
     }

     const handleFocus = (e) => {
          setFocused(true);
     }



     return (
         
          <div className="flex flex-col relative pt-2 mt-5">

               <label className="text-xs absolute top-0 left-3 bg-gradient-to-b from-orange-100 to-white px-1">
                    Password
               </label>

               <input className="border border-gray-600 py-2 px-3 rounded-lg  " 
               type={showPassword ? "text" : "password"} 
               name="password" 
               {...inputProps} 
               onChange={onChange} 
               pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^*_-])[a-zA-Z0-9!@#$%^*_-]{8,12}$"
               onBlur={handleFocus} 
               focused={focused.toString()} 
               required />

               <div className="absolute right-4 top-5 " 
               onClick={handleTogglePassword}>
                    {showPassword ? <GoEye /> : <GoEyeClosed />}
               </div>

               <span className="text-sm">
                    Password should be 8-12 characters and include at least 1 letter, 1 number and 1 special character
               </span>  
            
                
          </div>

        
       )
   }

export default PasswordInput