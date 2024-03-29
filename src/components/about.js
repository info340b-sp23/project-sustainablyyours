import React from "react";
import Carousel from "react-bootstrap/Carousel";

export function About() {
  return (
    <main>
      <div className="background-about">
        <Carousel>
          <Carousel.Item>
            <div className="about-section-team">
              <h1>About SustainablyYours!</h1>
              <p>
                SustainablyYours.com is a platform that provides users with access to a wide range of sustainable products from various and local small businesses. The platform aims to promote sustainable consumption by offering a curated selection of products that meet sustainability criteria such as eco-friendly practices, fair trade, and ethical sourcing. Users can browse through product details and sustainability attributes, as well as brand information and user-generated reviews to make informed decisions based on their sustainability preferences. SustainablyYours.com also supports local farmers and small businesses that adhere to sustainable practices, fostering community-driven and localized sustainability efforts. By providing a one-stop destination for sustainable products, SustainablyYours.com aims to make it easier for users to make more environmentally and socially responsible choices.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="about-section-team">
              <h1>Curated Selection</h1>
              <p>
                Our platform offers a curated selection of products based on sustainability criteria like eco-friendly practices, fair trade, and ethical sourcing. This ensures that users can make environmentally and socially responsible choices.
              </p>
            </div>
          </Carousel.Item>
          {/* <Carousel.Item>
            <div className="about-section-team">
              <h1>Detailed Product Information</h1>
              <p>
                We provide detailed product information and sustainability attributes for every item in our collection. This will empower users to make informed decisions that align with their sustainability preferences.
              </p>
            </div>
          </Carousel.Item> */}
          {/* <Carousel.Item>
            <div className="about-section-team">
              <h1>User-Generated Reviews</h1>
              <p>
                Our platform features user-generated reviews for social proof and feedback. You can read reviews from other users to get insights and make confident purchasing decisions.
              </p>
            </div>
          </Carousel.Item> */}
          <Carousel.Item>
            <div className="about-section-team">
              <h1>Support for Local Farmers and Small Businesses</h1>
              <p>
                We actively support local farmers and small businesses that adhere to sustainable practices. By choosing their products, you contribute to their efforts and help build a more sustainable and resilient community.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="about-section-team">
              <h1>Community-Driven Sustainability</h1>
              <p>
                We believe in fostering community-driven and localized sustainability efforts. Our platform serves as a hub for individuals and organizations to come together, share knowledge, and work towards a more sustainable future.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="about-section-team">
              <h1>One-Stop Destination</h1>
              <p>
                SustainablyYours.com is your one-stop destination for environmentally and socially responsible choices. We strive to make it easier for you to find and purchase sustainable products, empowering you to make a positive impact through your everyday consumption.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
        <hr />
        <div className="row">
          <div className="col-2">
            <h2 className="meet-team-title">Meet The Team!</h2>
          </div>
          <div className="col-lg-9">
            <div className="row">
            <div className="col-lg-10">
                    <div className="row">
                        <div className="col-5">
                            <div className="card">
                                <img src="img/hrudhai_profilepic.jpg" aria-label="Hrudhai" alt="Hrudhai" />
                                {/* removed 'style="width:100%"' from img */}
                                <div className="container-card">
                                    <h2>Hrudhai Umas</h2>
                                    <p className="title"> Informatics &amp; Data Science Student</p>
                                    <p>Motivated Data Informatics student at the University of Washington-Seattle with programming, data science, product management skills seeking internships. Proficient in various programming languages, tools, and passionate about sustainability.</p>
                                    <a href="mailto:hrudhaiu@uw.edu">hrudhaiu@uw.edu</a>
                                    <p><a href="https://www.linkedin.com/in/hrudhai-umas/" className="btn btn-outline-primary" role="button" aria-pressed="true" target="_blank">LinkedIn</a></p>

                                </div>
                            </div>
                        </div>
                        
                        <div className="col-5">
                            <div className="card">
                                <img src="img/kaden_profilepic.jpg" aria-label="Kaden" alt="Kaden" />
                                <div className="container-card">
                                    <h2>Kaden Kapadia</h2>
                                    <p className="title">Informatics &amp; Data Science Student</p>
                                    <p>Motivated Informatics student (with a focus in data science) at the University of Washington. Has experience in programming, data science, and data visualization. Seeking internships and research opportunities that will help him grow as a person and student.</p>
                                    <a href="mailto:">kadenk10@uw.edu</a>
                                    <p><a href="https://www.linkedin.com/in/kadenkapadia/" className="btn btn-outline-primary" role="button" aria-pressed="true" target="_blank">LinkedIn</a></p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="row">
                            <div className="col-5">
                                <div className="card">
                                    <img src="img/abigail_profilepic.jpg" aria-label="Abi" alt="Abi" />
                                    <div className="container-card">
                                        <h2>Abi Chinn</h2>
                                        <p className="title">Intended Informatics Student</p>
                                        <p>Intended Informatics Human-Computer Interaction and Data Science student whose desire is to apply various epistemologies and needs by listening to people's ways of knowing and how they frame their experience to help repair damages inflicted by technology that was never created to serve them.</p>
                                        <a href="mailto:chinabi@uw.edu">chinabi@uw.edu</a>
                                        <p><a href="https://www.linkedin.com/in/abigail-chinn" className="btn btn-outline-primary" role="button" aria-pressed="true" target="_blank">LinkedIn</a></p>
                                    </div>
                                </div>
                            </div>
                
                           <div className="col-5">
                                <div className="card">
                                    <img src="img/herm_profilepic.jpg" aria-label="Hermon" alt="Hermon" />
                                    <div className="container-card">
                                        <h2>Hermon Rusom</h2>
                                        <p className="title">Informatics Student</p>
                                        <p>Student studying Informatics at the University of Washington. Currently I am a final-year undergraduate student working on a final capstone project with my peers and peer advisor. Excited to graduate at the end of this quarter and looking for job opportunities. Eager to use my informatics knowledge in the real-world.</p>
                                        <a href="mailto:">hermon@uw.edu</a>
                                        <p><a href="https://www.linkedin.com/home" className="btn btn-outline-primary" role="button" aria-pressed="true" target="_blank">LinkedIn</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
