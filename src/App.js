import React from 'react';
import omage from "./omage.jpg";
 import video from './video.mp4';
import './style.css';
const Social = () =>{
    return (

<div> 

<div style={{border:"solid (1px) black",maxWidth:"100vw"}}>

<h1 class="title red">5adija </h1></div>

<img src= {omage} alt ="omage"/>
  <img src="./magee.jpg" alt = "magee"/>


<hr/>
<video className ='videoTag' autoPlay loop muted>
<source src={video.mp4} type="video/mp4"/>
</video>
 
</div>
)
}

export default Social;
 
