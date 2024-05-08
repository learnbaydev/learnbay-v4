import React from 'react'
import Styles from "./hero.module.css"
import Image from 'next/image'

const hero = () => {
  return (
    <div >
      
<div className={Styles.Head}>

<div className={Styles.rightcontent}>
<span>Gen-AI for Business Leaders</span>
<h1>Advance Data Analytics Program</h1>
<p>Take the first step towards becoming a Data Science and AI expert!</p>
<div></div>
</div>
<p>In collaboration 
with</p>
<Image/>



</div>


    </div>
  )
}

export default hero
