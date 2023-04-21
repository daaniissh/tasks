import React, { Fragment, useEffect, useState } from 'react'
import '../index.css'
import { dotsContainerStyles, leftArrowStyles, rightArrowStyles, sliderStyles } from './style';
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [anime, setAnime] = useState(false);
  const [image, setImage] = useState([
    {
      src: "https://images.pexels.com/photos/5473010/pexels-photo-5473010.jpeg?auto=compress&cs=tinysrgb&w=2000",
    },
    {
      src: "https://images.pexels.com/photos/4992820/pexels-photo-4992820.jpeg?auto=compress&cs=tinysrgb&w=2000",
    },
    {
      src: "https://images.pexels.com/photos/5740845/pexels-photo-5740845.jpeg?auto=compress&cs=tinysrgb&w=2000",
    },
    {
      src: "https://images.pexels.com/photos/8107833/pexels-photo-8107833.jpeg?auto=compress&cs=tinysrgb&w=2000",
    },
    {
      src: "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&w=2000",
    },
    {
      src: "https://images.pexels.com/photos/2449605/pexels-photo-2449605.png?auto=compress&cs=tinysrgb&w=2000",
    },
    {
      src: "https://images.pexels.com/photos/5273708/pexels-photo-5273708.jpeg?auto=compress&cs=tinysrgb&w=2000",
    }
  ])
  const handleAnimation = () => {
    currentIndex > 0 ? setCurrentIndex((prev) => prev - 1) : setCurrentIndex(prev => prev)

    if (currentIndex === 0) {

      setCurrentIndex(image.length - 1)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      handleAnimation();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const left = () => {
    currentIndex > 0 ? setCurrentIndex((prev) => prev - 1) : setCurrentIndex(prev => prev)
    if (currentIndex === 0) {
      setCurrentIndex(image.length - 1)
    }
  }
  const right = () => {
    currentIndex < image.length ? setCurrentIndex(prev => prev + 1) : setCurrentIndex(prev => prev)
    if (currentIndex === image.length - 1) {
      setCurrentIndex(0)
    }
  }
  return (
    <div style={sliderStyles} className='group'>
      <div>
        <div className='opacity-0 group-hover:opacity-100 ease-out duration-500 select-none' onClick={left} style={leftArrowStyles}>
          ❰
        </div>
        <div className='opacity-0 group-hover:opacity-100 ease-out duration-500 select-none' onClick={right} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div className={`transition-opacity duration-100 w-full `} >
        {image.map((img, index) => (
          index === currentIndex && <img className='transition-opacity duration-100 w-full object-cover h-screen' src={img.src} alt="" />
        ))}
      </div>
    </div>
  )
}

export default Slider