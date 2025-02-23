import React from 'react'
import SteperTitle from '../components/SteperTitle'

const StepThree = () => {
    const paradesign='mt-3 mb-3 font-semibold'
  return (
    <div className='w-full'>
        <SteperTitle h2={'Submit your application results testimonial or essay '} 
        p={'Please upload each essay separately if you have multiple files to submit.'}/>

        <p className={paradesign}><label htmlFor="">Application Results Testimonial</label></p>
        
       

<div className="flex items-center justify-center w-full">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 bg-gray-300 hover:bg-gray-600 rounded-2xl">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="file:bg-gray-300 file:rounded-md file:border-none file:text-gray-400 hover:file:text-yellow-400 hover:file:bg-blue-950" />
    </label>
</div> 


    </div>
  )
}

export default StepThree