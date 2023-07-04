import React from 'react'
import './about.css'
import aboutImage1 from '../../assets/cartoon1.jpg'
import video3 from '../../assets/video3.mp4'

const About = () => {
  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title">
          Why Hikings
        </h2>
        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={aboutImage1} alt="Image Name" />
            <h3>100+ Mountains</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur?
            </p>
          </div>
          <div className="singleItem">
            <img src={aboutImage1} alt="Image Name" />
            <h3>100+ Mountains</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur?
            </p>
          </div>
          <div className="singleItem">
            <img src={aboutImage1} alt="Image Name" />
            <h3>100+ Mountains</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur?
            </p>
          </div>
        </div>
        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2> Wonderful House Experience there</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Pariatur perferendis sunt repudiandae dolore reiciendis nisi?
              </p>
            </div>
            <div className="cardVideo">
              <video src={video3} autoPlay loop muted type="video/mp4">
                 
              </video>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About