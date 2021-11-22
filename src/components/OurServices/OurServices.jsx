import React from 'react'
import { Link } from 'react-router-dom'
import OurServicesCss from './OurServices.module.scss'
const OurServices = () => {
  return (
    <div className={OurServicesCss.container} id="Services">
   
      <div className={OurServicesCss.cards}>
        <div className={OurServicesCss.card1}>
          <div className={OurServicesCss.card_img}>
            {/* <Link to="/startups-and-entrepreneurship"> */}
              <img
                alt=""
                className={OurServicesCss.main_img}
                src="images/card1.svg "
              />
            {/* </Link> */}
            {/* <Link to="/startups-and-entrepreneurship"> */}
              <img
                alt=""
                className={OurServicesCss.left_img}
                src="images/payment.png"
              />
            {/* </Link> */}
            {/* <Link to="/business">
              <img
                alt=""
                className={OurServicesCss.apple_pay}
                src="images/applepay.png"
              />
            </Link> */}
          </div>
          <div className={OurServicesCss.card_text}>
            <div className={OurServicesCss.content}>
              <h3> Startups & Entrepreneurship</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consut.
              </p>
              {/* <Link to="/startups-and-entrepreneurship">Get Started</Link> */}
            </div>
          </div>
        </div>
        <div className={OurServicesCss.card2}>
          <div className={OurServicesCss.card_img}>
            {/* <Link to="/social-media-and-freelancing"> */}
              <img
                alt=""
                className={OurServicesCss.main_img}
                src="images/card2.png"
              />
            {/* </Link>
            <Link to="/social-media-and-freelancing"> */}
              <img
                alt=""
                className={OurServicesCss.sqaure_img}
                src="images/square.png"
              />
            {/* </Link>
            <Link to="/social-media-and-freelancing"> */}
              <img
                alt=""
                className={OurServicesCss.monkey}
                src="images/monkey.png"
              />
            {/* </Link>
            <Link to="/social-media-and-freelancing"> */}
              <img alt="" className={OurServicesCss.fb} src="images/fb.png" />
            {/* </Link>
            <Link to="/social-media-and-freelancing"> */}
              <img
                alt=""
                className={OurServicesCss.jetpack}
                src="images/jetpack.png"
              />
            {/* </Link>
            <Link to="/social-media-and-freelancing"> */}
              <img
                alt=""
                className={OurServicesCss.aids}
                src="images/aids.png"
              />
            {/* </Link> */}
          </div>
          <div className={OurServicesCss.card_text}>
            <div className={OurServicesCss.content}>
              <h3> Social-Media & Freelancing </h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consut.
              </p>
              {/* <Link to="/social-media-and-freelancing">Get Started</Link> */}
            </div>
          </div>
        </div>
        <div className={OurServicesCss.card3}>
          <div className={OurServicesCss.card_img}>
            {/* <Link to="/business"> */}
              <img
                alt=""
                className={OurServicesCss.main_img}
                src="images/card3.png"
              />
            {/* </Link> */}
            {/* <Link to="/business">
              <img
                alt=""
                className={OurServicesCss.ft}
                src="images/friendstop.png"
              />
            </Link> */}
            {/* <Link to="/business"> */}
              <img
                alt=""
                className={OurServicesCss.finger}
                src="images/finger.png"
              />
            {/* </Link>
            <Link to="/business"> */}
              <img
                alt=""
                className={OurServicesCss.fd}
                src="images/friends.png"
              />
            {/* </Link> */}
          </div>
          <div className={OurServicesCss.card_text}>
            <div className={OurServicesCss.content}>
              <h3> Business Operations </h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consut.
              </p>

              {/* <Link to="/business">Get Started</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
