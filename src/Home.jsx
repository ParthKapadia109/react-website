import React from 'react'
import web from '../src/img/home.png'
import Common from './Common'


const Home = () => {
    return (
     < >
        <Common name='Grow your business with'
                visit='/service'
                imgsrc={web}
                btnname='Get Started '
        />
     </>
    )
}
 
export default Home; 