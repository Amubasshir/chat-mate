import React from 'react'

const Button = ({text, submit}) => {
  return (
    <button
      type={submit? "submit": ''}
        className='bg-violet-500 text-gray-50 text-xl font-medium py-3 px-5 rounded-lg hover:bg-violet-700 hover:text-white duration-300 mt-5'
    >
      {text}

    </button>
  )
}

export default Button