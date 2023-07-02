import React from 'react'
import './offers.css'
import {MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import image from '../../assets/image (6).jpg'

const Offers = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div className="secIntro">
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
          <div className="singleOffer">
            <div className='destImage'>
              <img src={image} alt='Image Name'/>
              <span className='discount'>
                30% Off
              </span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>
                  $1000
                </h4>
                <span className="status">
                  For Rent
                </span>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className="icon"/>
                  <small>2 Beds</small>
                </div>
                <div className="singleAmenity flex">
                  <MdBathtub className="icon"/>
                  <small>1 Bath</small>
                </div>
                <div className="singleAmenity flex">
                  <FaWifi className="icon"/>
                  <small>Wi-Fi</small>
                </div>
                <div className="singleAmenity flex">
                  <MdAirportShuttle className="icon"/>
                  <small>Shuttle</small>
                </div>
              </div>

              <div className="location flex">
                <MdLocationOn className='icon'/>
                <small>450 Vime #310, London</small>
              </div>
              <button className='btn flex'>View Details<BsArrowRightShort className='icon'/> </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Offers