
import React from "react";
import Css from "./Main.module.css";
// import MainPic from "../../images";
import MaskGroup from "../../images/MaskGroup.png"
import { MainCard } from "./MainCard";

function MainPage() {
  return (
    <div className={Css.MainPage}>
      <div className={Css.container}>
        <nav>
          <span>Thrivetalk</span>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
          <button>CONTACT US</button>
        </nav>
        <div className={Css.MainBlog}>
          <div>
            <p className={Css.span}>Thrivetalk</p>
            <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
            <p>
              Our highly talented therapists can help you with a range of issues
              including relationships, sex, PTSD, depression, social anxiety, or
              even just caring for yourself more.
            </p>
            <div className={Css.but}>
              <button>WHO AM I</button>
              <h5>WHAT DO I DO</h5>
            </div>
          </div>

          <div className={Css.ImgBlock}>
            <img className={Css.pic} src={MaskGroup} alt="" />
          </div>
        </div>
      </div>

      <div className={Css.two}>
        <div className={Css.why}>
        <h4>Why Thrive?</h4>
        <p className={Css.text}>Want to improve your well-being from the comfort
           of your own couch? Are you having trouble finding 
           the right therapist? Here at ThriveTalk, our licensed 
           therapists provide the same quality care you would get in office 
           from anywhere you can access your laptop or mobile phone. 
           Become your best self with ThriveTalk.  Start therapy now with a 
           licensed therapist!</p>
      </div>
      <div>
      <img className={Css.girl} src={MaskGroup} alt="" />
      </div>
        </div>
       



      <div  className={Css.three}>
        <h2 className={Css.title1}>ABOUT US</h2>
        <p>
        We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a mental wellness issue we’re here to help.  Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.
       </p>
        <h5>WE CAN HELP YOU WITH</h5>
        <div className={Css.card}>
          <MainCard bg="#FFE2DE" title="Weight Lifting" />
          <MainCard bg="#C4E769" title="Running  & Spinning" />
          <MainCard bg="#62D0DF" title="Pumping Iron" />
          <MainCard bg="#0052C1" title="Pumping Iron" />
        </div>
      </div>
    </div>



  );
}

export default MainPage