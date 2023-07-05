import React from 'react'
import './offers.css'
import {MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import { OffersData } from './offersdata'

const Offers = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
            libero tempora? Rerum maxime cupiditate eum similique. Reiciendis error 
            molestias optio voluptatum et! Necessitatibus dolorum beatae debitis, temporibus ducimus nesciunt in?
          </p>
        </div>

        <div className="mainContent grid">
          {OffersData.map((item,key) => {
            return (
              <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
              <div className='destImage'>
                <img src={item.img} alt='Image Name'/>
                <span className='discount'>
                 {item.discount} discount
                </span>
              </div>
  
              <div className="offerBody">
                <div className="price flex">
                  <h4>
                    ${item.price}
                  </h4>
                  <span className="status">
                    {item.renting === 'yes' ? 'For Rent' : 'Rented Out'}
                  </span>
                </div>
  
                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <MdKingBed className="icon"/>
                    <small>{item.beds} beds</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdBathtub className="icon"/>
                    <small>{item.bath} baths</small>
                  </div>
                  <div className="singleAmenity flex">
                    <FaWifi className="icon"/>
                    <small>{item.wifi === 'yes' ? 'Wifi' : 'No Wifi' }</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdAirportShuttle className="icon"/>
                    <small>{item.shuttle === 'yes' ? 'shuttle': 'No shuttle'}</small>
                  </div>
                </div>
  
                <div className="location flex">
                  <MdLocationOn className='icon'/>
                  <small>{item.location}</small>
                </div>
                <button className='btn flex'>View Details<BsArrowRightShort className='icon'/> </button>
              </div>
  
            </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Offers