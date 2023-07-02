import React from 'react'
import './popular.css'
import {BsArrowLeftShort, BsDot} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {PopularData} from './PopularData'

//Importing the images ========================

// import image1 from '../../assets/image (1).jpg'

const Popular = () => {
  return (
    <section className='popular section container'>
      <div className='secContainer'>
        <div className="secHeader flex">
            <div className="textDiv">
              <h2 className='secTitle'>
                Popular Destination
              </h2>
              <p>
                from historical beauty to natural beauty from our environment.
                Come see the best of the world.
              </p>
            </div>
            <div className='iconsDiv flex'>
                <BsArrowLeftShort className='icon leftIcon'/>
                <BsArrowRightShort className='icon'/>
            </div>


        </div>

        <div className='mainContent grid'>
        {
          PopularData.map((item, key) => {
            return (
              <div className="singleDestination" key={key}>
              <div className="destImage">

                <img src={item.image} alt="item"/>

                <div className="overlayInfo">
                  <h3>{item.title}</h3>
                  <p>{item.brief_desc}</p>
                  <BsArrowRightShort className='icon' />
                </div>
              </div>
              <div className="destFooter">
                <div className='number'>{item.number}</div>
                <div className="destText flex">
                  <h6>{item.name}</h6>
                  <span className='flex'>
                    <span className='dot'>
                      <BsDot className='icon'/> 
                    </span> Dot
                  </span>
                </div>
              </div>
            </div>
            )

          })
        }
        </div>
      </div>

    </section>
  )
}

export default Popular