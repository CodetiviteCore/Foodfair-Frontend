import React from "react"


const FormButton = ({value}) => {

     return(
          <button className="bg-[#FF8A00] hover:bg-orange-500 px-5 py-2 rounded-lg text-white font-medium mt-8">      
               {value}
          </button>
     )
     
}

export default FormButton
