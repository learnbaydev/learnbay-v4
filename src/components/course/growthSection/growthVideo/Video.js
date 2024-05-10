import Image from 'next/image'
import React from 'react'
import Styles from "./growthvideo.module.css"
const Video = () => {
  return (
    <>
    <div className={Styles.videomain}>
     <Image
     src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/video-growth.webp"
     width={340}
     height={500}
     alt='Growth Img'
     loading='lazy'
      />
 
    </div>
    </>
  )
}

export default Video
