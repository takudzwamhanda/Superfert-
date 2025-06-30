import React, { useEffect } from 'react'
import './ViewTwo.css'
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const PageTwo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/*First Section*/}

       

      <div className="hero">

            <header> 
              <div id="Home">
                <NavBar />
              </div>
            </header>

          <div className="glassmorphism">
                <div className="content">
                    <div className="text1">
                        <h2>News & Events.</h2>
                        <button>More Info<span> &darr;</span></button>

                    </div>
                    <div className="text2">
                        <h5>Next Events | <span>Roadshow // 27 May 2023</span> </h5>
                         <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Laborum neque quisquam <br />molestiae.
                        <br /> <br /><span>01</span>/ 04</p>
                    </div>
                </div>
            </div>
        </div>

        {/*Second Component*/}

        <div className="News">
                <h2>Latest News</h2>
                <hr />
            <div className="theimages">
               <div className="image1">
                   <div className="frames">
                        <div className="images-container">
                        <img src="./src/imgs/pic.jpg" alt="bag" width={80} />
                        </div>
                        <div className="text-container">
                            <h4>SuperFert is exhibiting at the  <br /> ADMA Agrcultural Show.</h4>
                            <p>SuperFert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark POlo <br /> Grounds on the Mazowe Road, Come <br /> and have a...</p>
                            <button>More info <span>&rarr;</span></button>
                        </div>
                   </div>
               </div>

                <div className="image1">
                   <div className="frames">
                        <div className="images-container">
                        <img src="./src/imgs/pic.jpg" alt="bag" width={80} />
                        </div>
                        <div className="text-container">
                            <h4>SuperFert is exhibiting at the  <br /> ADMA Agrcultural Show.</h4>
                            <p>SuperFert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark POlo <br /> Grounds on the Mazowe Road, Come <br /> and have a...</p>
                            <button>More info <span>&rarr;</span></button>
                        </div>
                   </div>
               </div>

                <div className="image1">
                   <div className="frames">
                        <div className="images-container">
                        <img src="./src/imgs/pic.jpg" alt="bag" width={80} />
                        </div>
                        <div className="text-container">
                            <h4>SuperFert is exhibiting at the  <br /> ADMA Agrcultural Show.</h4>
                            <p>SuperFert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark POlo <br /> Grounds on the Mazowe Road, Come <br /> and have a...</p>
                            <button>More info <span>&rarr;</span></button>
                        </div>
                   </div>
               </div>

                <div className="image1">
                   <div className="frames">
                        <div className="images-container">
                        <img src="./src/imgs/pic.jpg" alt="bag" width={80} />
                        </div>
                        <div className="text-container">
                            <h4>SuperFert is exhibiting at the  <br /> ADMA Agrcultural Show.</h4>
                            <p>SuperFert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark POlo <br /> Grounds on the Mazowe Road, Come <br /> and have a...</p>
                            <button>More info <span>&rarr;</span></button>
                        </div>
                   </div>
               </div>

                <div className="image1">
                   <div className="frames">
                        <div className="images-container">
                        <img src="./src/imgs/pic.jpg" alt="bag" width={80} />
                        </div>
                        <div className="text-container">
                            <h4>SuperFert is exhibiting at the  <br /> ADMA Agrcultural Show.</h4>
                            <p>SuperFert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark POlo <br /> Grounds on the Mazowe Road, Come <br /> and have a...</p>
                            <button>More info <span>&rarr;</span></button>
                        </div>
                   </div>
               </div>

                <div className="image1">
                   <div className="frames">
                        <div className="images-container">
                        <img src="./src/imgs/pic.jpg" alt="bag" width={80} />
                        </div>
                        <div className="text-container">
                            <h4>SuperFert is exhibiting at the  <br /> ADMA Agrcultural Show.</h4>
                            <p>SuperFert is exhibiting at the ADMA <br /> Agricultural Show, Thornpark POlo <br /> Grounds on the Mazowe Road, Come <br /> and have a...</p>
                            <button>More info <span>&rarr;</span></button>
                        </div>
                   </div>
               </div>

            </div>
       </div>

      {/*THIRD COMPONENT*/}
      <div className="footer">
        <div className="Links">
          <h3>Quick Links</h3> 
            <ul> 
                
                    <a href="">Home</a>
                    <a href="">Who We Are</a>
                    <a href="">Where to Buy</a>
                    <a href="">Bindura Processing Plant</a>
                    <a href="">Tools & Services</a>
                    <a href="">News & Events</a>
                    <a href="">Contact Us</a>
                
            </ul>
        </div>

        <div className="Links">
          <h3>Quick Links</h3> 
            <ul> 
               
                    <a href="">Home</a>
                    <a href="">Who We Are</a>
                    <a href="">Where to Buy</a>
                    <a href="">Bindura Processing Plant</a>
                    <a href="">Tools & Services</a>
                    <a href="">News & Events</a>
                    <a href="">Contact Us</a>
               
            </ul>
        </div>

        <div className="Links">
          <h3>Quick Links</h3> 
            <ul> 
                
                    <a href="">Home</a>
                    <a href="">Who We Are</a>
                    <a href="">Where to Buy</a>
                    <a href="">Bindura Processing Plant</a>
                    <a href="">Tools & Services</a>
                    <a href="">News & Events</a>
                    <a href="">Contact Us</a>
                
            </ul>
        </div>

        <div className="Links">
          <h3>Quick Links</h3> 
            <ul> 
                
                    <a href="">Home</a>
                    <a href="">Who We Are</a>
                    <a href="">Where to Buy</a>
                    <a href="">Bindura Processing Plant</a>
                    <a href="">Tools & Services</a>
                    <a href="">News & Events</a>
                    <a href="">Contact Us</a>
            
            </ul>
        </div>
      
      </div>

      <div className="lastImg">
         <img src="./src/imgs/fSg.png" alt="" width={90} />
      </div>


    </>
  )
}

export default PageTwo
