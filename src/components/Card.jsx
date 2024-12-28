import React from 'react'

const Card = ({title,content,image}) => {
  return (
    <div className=" flex flex-col items-center -top-6 pb-6 px-6 my-2 rounded-lg bg-blue-100 md:w-1/2 md:pb-3 md:px-12 space-y-0 ">

        <img src={image} alt="" className='w-16 mt-14' />
        <h5 className="  my-4 text-2xl text-blue-950 md:p-5 ">{title}</h5>
        <p className="text-3lg text-gray-500">{content}</p>
        
    </div>
  )
}

export default Card
