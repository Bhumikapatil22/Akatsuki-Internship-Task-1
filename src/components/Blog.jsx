import Data from "../Data";
import { useState } from "react";
// import "../App.css";
function Blog({topic,title,description,image,name,date,time,blogImage})
{
    return(
      
            <div className="blog-card">
              <div className="blog-card-banner">
                <img src={blogImage} alt="Building microservices with Dropwizard, MongoDB & Docker"
                  width="250" className="blog-banner-img" />
              </div>

              <div className="blog-content-wrapper">
                <button className="blog-topic text-tiny">
                  {topic}
                </button>

                <h3>
                  <a href="#" className="h3">
                   {title}
                  </a>
                </h3>

                <p className="blog-text">
                  {description}
                </p>

                <div className="wrapper-flex">
                  <div className="profile-wrapper">
                    <img src={image} alt="Julia Walker" width="50" />
                  </div>

                  <div className="wrapper">
                    <a href="#" className="h4">{name}</a>

                    <p className="text-sm">
                      <time datetime="2022-01-17">{date}</time>
                      <span className="separator"></span>
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT3M">{time}</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
          
    )
}

export default Blog;