import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import '../css/Home.css'

function Home() {

    return(
        <div className = 'App'>
            <Navbar /> 
            <div className='mainContent'>
            <div className="row">
                    <div className="leftcol">
                        <div className='cardLeft'>
                            test
                        </div>
                        <div className='cardLeft'>
                            test2
                        </div>
                    </div>
                    <div className="rightcol">
                        <div className='cardRight'>
                            test3
                        </div>
                        <div className='cardRight'>
                            test4
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home