import React, { useState } from "react";
import "./FormStyle.css";

// This is for all form inputs except password

const FormInputs = (props) => {
     const [focused, setFocused] = useState(false);

     const {label, errorMessage, onChange, id, ...inputProps} = props;
     
     const handleFocus = (e) => {
          setFocused(true);
     }


     return (
         
          <div className="flex flex-col pt-2 mt-5  relative">
               <label className="text-xs absolute top-0 left-3 bg-gradient-to-b from-orange-100 to-white px-1">
                    {label}
               </label>

               <input className="border border-gray-600 py-2 px-3 rounded-lg"
               {...inputProps} 
               onChange={onChange} 
               onBlur={handleFocus} 
               focused={focused.toString()}/>

               <span className="text-sm  d-none">
                    {errorMessage}
               </span>
                    
          </div>
        
       )
   }

export default FormInputs