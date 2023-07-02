import React from 'react'
import './blog.css'
import { BsArrowRightShort } from 'react-icons/bs'
import img from '../../assets/image (9).jpg'

const Blog = () => {
  return (
    <section className='blog container section'>
          <div className="secContainer">
            <div className="secIntro">
              <h2 className="secTitle">
                Our Best Blog?
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
              </p>
            </div>

            <div className="mainContainer grid">
              <div className="singlePost grid">
                <div className="imgDiv">
                  <img src={img} alt="Image Name" />
                </div>

                <div className="postDetails">
                  <h3>Title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse iure quos consectetur tempore, nesciunt animi.</p>
                </div>

                <a href="#" className='flex'>
                  <BsArrowRightShort className="icon"/>
                  Read More
                </a>
              </div>
            </div>
          </div>
    </section>
  )
}

export default Blog