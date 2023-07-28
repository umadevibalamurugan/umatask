import React from "react";
import Navbar from "../components/Navbar";
import '../styles/home.css';
const Home = () => {
  // const GetMeal = async () => {
  //   let res = await fetch(
  //     "https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
  //     {
  //       method: "GET",
  //     }
  //   );

  //   let mealData = await res.text();
  //   console.log(mealData);
  // };

  return (
    <div className="rightsection">
      <h1> &#x1F44B;Hi,I'm Umadevi</h1>
      <div className="text">
        <p>I’m a Product Designer with a <br/>passion for participate in every<br/> stage of digital product, from discovery to delivery. <br/>Helping to focus the business goals on users..</p>
      <div className="home1">
        <div>
        
        <p>I'm looking for new opportunities<br/>Previously I worked at Multiplicalent chile</p>
        </div>
        <div>
        <p>Contact Email<br/>uma18122003@gmail.com</p>
        </div>
      </div>
      <div className="middle">
      
        <img
          src="face-photo.jpg"
          alt="Logo"
          className={`Logo`}/>
          <div className="num">
            <img src="Nombre del Producto.jpg"></img>
          </div>
          
          
          <div className="middle1">
          <img src="people.jpg" alt=" " className={'logo'}/>
          </div>
          <div className="middle2">
          <img src="user.png" alt=" " className={'user'}/>
          
          </div>
         
      </div>
      </div>
      
      <div className="upper">
      <img src="upper.jpg" alt=" " className={'user'}/>

      </div>
      <div className="footer">
  <img src="Thumbnail.jpg"></img>
  <img src="Thumbnail (1).jpg"></img>
  <img src="Thumbnail (2).jpg"></img>
  
</div>
    </div>
  
  
    
   
  );
};
  

export default Home;
