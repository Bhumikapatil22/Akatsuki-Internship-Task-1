import Blog from "./Blog";
import Data from "../Data";
// import '../App.css'
function Container({blogs,topic,icon})
{
    return(<>
        <div className="main">
            <div className="container">
                <div className="blog">
                <h2 className="h2">Latest Blog Post</h2>

                    <div className="blog-card-group">
                    {
                        blogs.map((blog)=>(
                            <Blog 
                            topic={blog.topic}
                            title={blog.title}
                            description={blog.description}
                            image={blog.image}
                            blogImage={blog.blogImage}
                            name={blog.name}
                            date={blog.date}
                            time={blog.time}
                            
                            />
                        ))

                    }
                 </div>
                 </div>
                 <div class="aside">
          <div class="topics">
            <h2 class="h2">Topics</h2>

            <a href="#" class="topic-btn">
              <div class="icon-box">
                <ion-icon name="server-outline"></ion-icon>
              </div>

              <p>Database</p>
            </a>

            <a href="#" class="topic-btn">
              <div class="icon-box">
                <ion-icon name="accessibility-outline"></ion-icon>
              </div>

              <p>Accessibility</p>
            </a>

            <a href="#" class="topic-btn">
              <div class="icon-box">
                <ion-icon name="rocket-outline"></ion-icon>
              </div>

              <p>Web Performance</p>
            </a>
          </div>

          <div class="tags">
            <h2 class="h2">Tags</h2>

            <div class="wrapper">
              <button class="hashtag">#mongodb</button>
              <button class="hashtag">#nodejs</button>
              <button class="hashtag">#a11y</button>
              <button class="hashtag">#mobility</button>
              <button class="hashtag">#inclusion</button>
              <button class="hashtag">#webperf</button>
              <button class="hashtag">#optimize</button>
              <button class="hashtag">#performance</button>
            </div>
          </div>

          <div class="contact">
            <h2 class="h2">Let's Talk</h2>

            <div class="wrapper">
              <p> Do you want to learn more about how I can
                help your company overcome problems? Let us
                have a conversation.
              </p>

              <ul class="social-link">
                <li>
                  <a href="#" class="icon-box discord">
                    <ion-icon name="logo-discord"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="icon-box twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="icon-box facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="newsletter">
            <h2 class="h2">Newsletter</h2>

            <div class="wrapper">
              <p>
                Subscribe to our newsletter to be among the
                first to keep up with the latest updates.
              </p>

              <form action="#">
                <input type="email" name="email" placeholder="Email Address" required />

                <button type="submit" class="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      
  
             </div>
             
        </div>
        
    </>)
}
export default Container;