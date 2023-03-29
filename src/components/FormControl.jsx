import React from 'react'

const FormControl = ({label,labelInner, inputType, placeholder, formFields, setFormFields}) => {
  return (
     <div className="form-control flex flex-col gap-2">
      <label htmlFor={label} className='cursor-pointer text-lg font-medium'>{ labelInner}</label>
          <input type={inputType} placeholder={placeholder} id={label} value={formFields[label]}
            onChange={(e) => setFormFields({ ...formFields, [label]: e.target.value })}
          className="duration-300 border-2 rounded-lg outline-none focus:border-violet-500 py-3 px-5 w-[26rem] "
          />

        </div>
  )
}

export default FormControl