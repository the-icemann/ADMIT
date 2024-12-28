// eslint-disable-next-line no-unused-vars
import React from 'react'

const LandingPageNav = () => {
  return (
    <div>
         <nav className="relative container p-6 mx-auto ">


            {/* FLEX CONTAINER */}

            <div className="flex items-center justify-between">


            <div>
                <h3 className="text-2xl text-blue-950">
                    Ad<span className='text-yellow-400'>MIT</span>
                </h3>
            </div>

            <div className="hidden p-5 space-x-6 md:flex mx-auto">
                <a href="#">Schools</a>
                <a href="#">Courses</a>
                <a href="#">Catalogue</a>
            </div>

            <div className="hidden space-x-5 md:block ">
            <a href="" className="p-4 px-6 pt-2 text-blue-950 bg-white border-2 border-blue-950 border rounded baseline">Log in</a>

            <a href="" className="p-4 px-6 pt-2 text-white bg-blue-950  border-2 border-blue-950 border rounded baseline">Sign up</a>

            </div>

            

            </div>
          




         </nav>

        
     
    </div>
  )
}

export default LandingPageNav
