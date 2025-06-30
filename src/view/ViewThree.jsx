import React, { useEffect } from 'react'
import './ViewThree.css'
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const PageThree = () => {
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
                        <h2>Who We Are.</h2>
                        <div className="btn"><button>More Info <span>&darr;</span></button></div>
                    </div>
                </div>
            </div>
        </div>

       {/*Second Section*/}
       <div className="body">
           <div className="text">
              <p>
                Proudly Zimbabwean SuperFert Fertilizer is locally manufactured at <br /> our state of the art processing plant in Bindura. Only the highest <br />
                quality inputs are used across our range to ensure a dependable first- <br /> rate product with results that speek ofr themselves. <br /> <br />
                We operate nationwide in association with experinced third party <br /> distributors of agricultural inputs. Our internal transport and logistics <br />
                division provides consistenly reliable stock levels to large commercial <br />and corporate farming enterprises nationwide, as well as retail outlets <br />
                ensuring our retail partners are able to provide easily accessible and <br /> competitively priced fertilizers to all rural and small scale farmers. <br />
                Our in-house agronomist and agronomy partners are available to our <br /> customers both directly and through social media so that Zimbabwe's <br />
                farmers have the opportunity to get first technical advise and <br />the best chance at achieving the highest yields possible. <br /> <br />
                We provide fertilizers for a large number of demonstration plots in <br /> affiliation with various Seed Houses to promote the best input <br /> 
                package for various sectors and agricultural regions. SuperFert also <br /> work with Government Agencies such as Agritex and other technical <br />
                institutions supporting with the Federation of Young Farmers Club of <br /> Zimbabwe.    
              </p>
           </div>
           <div className="imag">
                <img src="./src/imgs/Farmer.jpg" alt="Farmers" />
          </div>
       </div>

       
      {/*THIRD COMPONENT*/}
      <Footer />

      <div className="lastImg">
         <img src="./src/imgs/fSg.png" alt="" width={90} />
      </div>

    </>
  )
}

export default PageThree
