import React, { useEffect } from 'react'
import './ViewOne.css'
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import Slogo from '../imgs/Slogo.png';
import Farmer from '../imgs/Farmer.jpg';
import Copy from '../imgs/copy.png';
import Bag from '../imgs/bag.png';
import Fsg from '../imgs/fSg.png';
import Seedco2 from '../imgs/seedco2.png';
import Str from '../imgs/sTr.png';
import National from '../imgs/national.png';
import Fsg2 from '../imgs/fsg2.png';
import Bkgrnd from '../imgs/bkgrnd.png';

const PageOne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/*FIRST SECTION*/}
      <div className="homepage">
        <header className="main-header">
          <div className="logo">
            <img src={Slogo} alt="logo" width={186} />
          </div>
          <NavBar />
        </header>
        {/*Hero Component*/}
        <div className="herosection">
          <h1>The Formula <br /> for Success, <br /> naturally. </h1>
          <p>Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. Necessitatibus quis ipsa recusandae <br /> perferendis?</p>
          <div className="buttons">
            <div className="btn1"><button>Contact Us</button></div>
            <div className="btn2"><button>Products <span>&rarr;</span></button></div>
            <div className="btn3"><button>SCROLL <span>&darr;</span></button></div>
          </div>
        </div>
      </div>

      {/*SECOND COMPONENT*/}
      <div className="secondSection">
        <h2>Fertilisers. Seed. Grain.</h2>
        <p>SuperFet Fertilizeris powered by the FSG Company and is a proud patner of </p>
        <div className="patners">
          <img src={Seedco2} alt="" />
          <img src={Str} alt="" width={100}/>
          <img src={National} alt="" width={100}/>
          <img src={Fsg2} alt="" width={100}/>
          <img src={Seedco2} alt="" width={100}/>
        </div>
      </div>

      {/*THIRD COMPONENT*/}
      <div className="bigImage" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${Bkgrnd})` }}>
        <div className="texts">
          <h2>Made on Zimbabwean soil, <br />for Africa's soil.</h2>
          <p>SuperFert fertilizer is manufactured in Zimbabwe, <br /> and proudly serves to enrich the soils of Africa.</p>
        </div>
      </div>

      {/*FOURTH COMPONENT*/}
      <div className="us">
        <div className="description">
          <h2>Who We Are.</h2>
          <p>We operate nationwide with experienced third <br /> party distributors of agricultural inputs. Our internal transport and logistics division provides consistently reliable stock levels 
            to large commercial and corporate farming enterprises nationwide, as well as retail outlets ensuring our retail partners are able to provide easily accessible and competitivley  priced 
            fertilizers to all rural and small scale farmers.</p>
          <button>Read More</button>
        </div>
        <div className="imageFarmer">
          <img src={Farmer} alt="Farmers" />
        </div>
      </div>

      {/*FIFTH COMPONENT*/}
      <div className="green">
        <div className="div1">
          <h1>SuperFert Products.</h1>
          <img src={Slogo} alt="" width={200}/>
        </div>
        <div className="bags">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Tenetur cum consequuntur maxime totam, nisi quam <br /> voluptatibus dolore ipsum debitis, molestiae commodi <br />quidem accusamus 
            exercitationem dolores corporis eaque <br /> asperiores quibusdam. Consectetur eveniet dolores <br />earum aspernatur magni accusantium, sunt <br />itaque similique blanditiis, unde.
          </p>
          <button> More Info</button>
          <img src={Copy} alt="" width={800}/>
        </div>
      </div>

      {/*SIXTH COMPONENT*/}
      <div className="sixth">
        {[...Array(6)].map((_, i) => (
          <div className="frame" key={i}>
            <div className="image-container">
              <img src={Bag} alt="bag" width={80} />
            </div>
            <div className="text-container">
              <h3>Tobacco Fertilizer</h3>
              <p>Lorem ipsum dolor sit amet <br />consectetur, adipisicing elit. Itaque <br /> tempore inventore deleniti corporis rerum!</p>
              <button>More info <span>&rarr;</span></button>
            </div>
          </div>
        ))}
      </div>

      {/*SEVENTH COMPONENT*/}
      <div className="seven">
        <div className="withForm">
          <h2>For <br /> Queries, or <br /> Inquiries</h2>
          <p>Get in touch with us.</p>
        </div>
        <div className="foRm">
          <form action="">
            <input type="text" name="Name" placeholder="Full Name*"/>
            <input type="email" name="Email" placeholder="Email Address*"/>
            <textarea name="Message" rows="6" placeholder="Your Message*"></textarea>
            <button type="submit" className="btn btn2">Send Message</button>
          </form>
        </div>
      </div>

      {/*EIGHTH COMPONENT*/}
      <Footer />

      <div className="lastImg">
        <img src={Fsg} alt="" width={90} />
      </div>
    </>
  )
}

export default PageOne
