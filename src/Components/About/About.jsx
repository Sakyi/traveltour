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
          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img src={aboutImage1} alt="Image Name" />
            <h3>100+ Mountains</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur?
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
            <img src={aboutImage1} alt="Image Name" />
            <h3>100+ Mountains</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur?
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
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
            <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
              <h2> Wonderful House Experience there</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Pariatur perferendis sunt repudiandae dolore reiciendis nisi?
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
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