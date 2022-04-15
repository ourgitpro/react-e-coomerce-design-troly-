import React, { useEffect, useState } from 'react'
import { Carousel} from 'rsuite';
import axios from 'axios'

const Banner = () => {
    let [banner,setBanner] = useState([])

    useEffect(async()=>{
        let bannerData = await axios.get('http://localhost:8000/banner')
        setBanner(bannerData.data)
    },[])
  return (
    <>
    <Carousel autoplay className="custom-slider">
    {banner.map(item=>(
        <div className='sliderItem'>
            <h1>{item.subheading}</h1>
        </div>
    ))}
       
    </Carousel>
    </>
  )
}

export default Banner