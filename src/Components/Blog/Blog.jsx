import React from 'react'
import './blog.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { BlogData } from './blogdata'

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
              
                {BlogData.map((item,key)=> {
                 return (
                  <div className="singlePost grid">
                  <div className="imgDiv">
                    <img src={item.img} alt="ImgName" />
                  </div>
  
                  <div className="postDetails">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
  
                  <a href="#" className='flex'>
                    <BsArrowRightShort className="icon"/>
                    Read More
                  </a>
                </div>
                        )
                }
                )}
            </div>
          </div>
    </section>
  )
}

export default Blog