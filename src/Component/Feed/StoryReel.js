import React from 'react'
import Story from './Story'
import Image1 from '../../asset/image/IMG_1314.jpg'
import Image2 from '../../asset/image/IMG-20220516-WA0013.jpg'
import Image3 from '../../asset/image/IMG_5418.jpg'
import Image4 from '../../asset/image/Snapchat-1176086908.jpg'
import Image5 from '../../asset/image/Snapchat-1930839098.jpg'
// import Image6 from '../../asset/image/IMG-20220702-WA0007.jpg'
import './StoryReel.css'

export default function StoryReel() {
  return (
    <div className='feed'>
      <div className="story__reel">
      <Story image ={Image1} ProfileSrc ={Image1} title ='Fb-profile' />
      <Story image ={Image2} ProfileSrc ={Image2} title ='Abdul Hadi' />
      <Story image ={Image3} ProfileSrc ={Image3} title ='Muhammad Qasim' />
      <Story image ={Image4} ProfileSrc ={Image4} title ='Amir Saeed' />
      <Story image ={Image5} ProfileSrc ={Image5} title ='Huda' />
      {/* <Story image ={Image6} ProfileSrc ={Image6} title ='Group' /> */}
      </div>
    </div>
  )
}
