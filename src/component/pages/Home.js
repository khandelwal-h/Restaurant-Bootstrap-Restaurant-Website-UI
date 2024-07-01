import React from "react";
import Slider from "./inc/Slider";
import aboutimage from '../images/wepik.jpeg';
const Home =()=>{
    return (
        <div>
            <Slider/>
            <div className="container">
                <div className="py-4 text-center">
                <h1>Welcome to React Hook Page </h1>
    <button className="btn btn-primary">Hello</button>
                </div>

        </div>
        
        <div className="py-5 bg-light border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
            <h4>Welcome to React Hooks Website Designing</h4>
          <div className="divider"></div>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
             publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="col-md-4">
              <img src={aboutimage} className='w-100 shadow' alt="..."/>
              </div>
        </div>
      </div>
     
      </div>
        </div>
    )
    
}
export default Home;