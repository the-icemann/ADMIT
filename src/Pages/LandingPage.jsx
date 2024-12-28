        import LandingPageNav from "../components/landingPageNav"
        import MyImage from '../Images/new admit image.png'
        import Card from "../components/Card"

     const LandingPage = () => {
        return (
            <>
        <LandingPageNav></LandingPageNav>

        <section id="hero">

        {/* FLEX CONTAINER */}

        <div className="flex container flex-col-reverse md:flex-row items-center mx-auto">

            {/* First box(left side) */}

            <div className="flex text-center flex-col p-5 m-10 space-y-12 md:w-1/2 md:text-left l" >

            <h2 className="text-6xl text-center text-blue-950 md:text-left lg:text-8xl">Apply To Your Dream School With Ease!</h2>

            <p className="text-2xl">Our Web App Simplifies the O-level and A-level      Application Process for Primary and High School Students.</p>

            <a href="" className="p-4 px-6 pt-2 text-white bg-blue-950  border-2 border-blue-950  rounded baseline text-2xl">Start your application</a>

        </div>

        {/* Second box (Right side) */}

        <div className="md:w-1/2">
        <img src={MyImage} alt="picture of girl studying" />
        
        </div>

            


        </div>



        </section>

        <section id="services">
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center space-y-6 ">
                <h2 className="text-4xl font-bold text-center text-blue-950">
                    Our services...
                </h2>

                {/* Cards part */}

                <div className="flex flex-col mb-24 mt-24 md:flex-row md:space-x-6 ">
                    <Card 
                    title="Streamline Your Application Process"

                    
                    content="Our Web app helps primary and highschool students save time by streamlining the application process for multiple schools.With this easy-to-use platform, you can complete and submit your applications quickly and efficiently"

                    
                    
                    
                    ></Card>
                    <Card 
                    title="Discover your Best-Fit Schools"


                    content="Our Web app helps you find the schools that best fit your academic and personal interests.By answering a few questions about your goals and preferences, we'll provide you with a list of schools that match your criteria and profile."

                    
                    
                    
                    ></Card>
                    <Card 
                    title="Get Expert guidance"


                    content="Applying to schools is ever a daunting process...but our web app is here to help. We provide expert guidance  and support throughout the entire application process, from selecting the right schools to crafting a strong personal statement."

                    
                    
                    
                    ></Card>
                   


                </div>

            </div>

        </section>
            
            
            </>
        )
        }

        export default LandingPage
