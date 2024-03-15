const Copy = () => {
  return (
    <>
      <header>
        <div className="header-container wrapper">
          <nav className="header-navigation">
            <div className="loga-image-container">
              <img
                className="logo-image"
                src="./src/images/blackLogo.png"
                alt=""
              />
            </div>
            {/* <ul className="header-links">
          <li className="header-link"><a href="">main</a></li>
          <li className="header-link"><a href="">gallery</a></li>
          <li className="header-link"><a href="">project</a></li>
          <li className="header-link"><a href="">certification</a></li>
          <li className="header-link"><a href="">cntacts</a></li>
        </ul>  */}
          </nav>
          <section className="hero-section">
            <div className="hero-text-container">
              <h1 className="hero_title">were future in archtecture</h1>
              <p className="hero_subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                ducimus at hic, amet, nulla sed impedit inventore facere
                consectetur aperiam magni ea tempore quibusdam aut enim debitis.
                Labore, distinctio sit.
              </p>
              <div className="cta">contact us</div>
            </div>
            <picture className="hero-image-container">
              <img
                className="hero_image"
                src="./src/images/heroImage.png"
                alt=""
              />
            </picture>
          </section>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <section className="about">
            <picture className="about_images"></picture>
            <div className="about_content">
              <h1 className="about_title section-title">about</h1>
              <p className="about_details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                quos, ea placeat nemo blanditiis, odio incidunt vel tenetur,
                eveniet sint non enim voluptatum autem? Quam tenetur corrupti
                possimus consectetur nulla.
              </p>
              <div className="about_button">read more</div>
            </div>
          </section>

          <section className="mission">
            <h1 className="mission_title section-title">
              Main Focus/Mission Statement
            </h1>
            <div className="missions">
              <div className="mission_details">
                {/* <!-- <h1 className="mission_number">1</h1> --> */}
                <p className="mission_text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit blanditiis dolores facere. Quibusdam temporibus quia non
                  amet. Rem quia ipsam velit repellendus soluta deleniti at ut,
                  reprehenderit deserunt harum hic?
                </p>
              </div>
              <div className="mission_details">
                {/* <!-- <h1 className="mission_number">2</h1> --> */}
                <p className="mission_text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit blanditiis dolores facere. Quibusdam temporibus quia non
                  amet. Rem quia ipsam velit repellendus soluta deleniti at ut,
                  reprehenderit deserunt harum hic?
                </p>
              </div>
            </div>
          </section>

          <section className="projects">
            <h1 className="project_title section-title">our projects</h1>
            <div className="projects_gallery">
              <a href="" className="project-image-link second">
                <picture>
                  <img
                    src="./src/images/sampleProjectImage/image 15.png"
                    alt=""
                  />
                </picture>
              </a>
              <a href="" className="project-image-link third">
                <picture>
                  <img
                    src="./src/images/sampleProjectImage/image 16.png"
                    alt=""
                  />
                </picture>
              </a>
              <a href="" className="project-image-link fourth">
                <picture>
                  <img
                    src="./src/images/sampleProjectImage/image 17.png"
                    alt=""
                  />
                </picture>
              </a>
              <a href="" className="project-image-link fifth">
                <picture>
                  <img
                    src="./src/images/sampleProjectImage/image 18.png"
                    alt=""
                  />
                </picture>
              </a>
              <a href="" className="project-image-link first">
                <picture>
                  <img
                    src="./src/images/sampleProjectImage/Rectangle 12.png"
                    alt=""
                  />
                </picture>
              </a>
            </div>
            <div className="cta view-all-project-cta">all projects</div>
          </section>

          <section className="contact-us">
            <h1 className="contact-us_title section-title">contact us</h1>
            <div className="contact-us_content">
              <form action="submit" className="contact-us_form">
                <input type="text" name="name" placeholder="name" id="name" />
                <input type="tel" name="phone" placeholder="phone" id="phone" />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  id="email"
                />
                <input
                  type="text"
                  name="interestedIn"
                  placeholder="interested in"
                  id="interestedIn"
                />
                <input
                  type="text"
                  name="message"
                  placeholder="message"
                  id="message"
                />
              </form>
              <picture className="contact-us_image">
                <img src="./src/images/contactImage.png" alt="" />
              </picture>
            </div>
            <div className="cta ">send email</div>
          </section>

          <section className="photo-gallery">
            <h1 className="photo-gallery_title section-title">
              photo <br /> <span className="section-title-span">gallery</span>{" "}
            </h1>
            <div className="photo-gallery_photos">
              <picture>
                <img src="./src/images/galleryImage/Rectangle 22.png" alt="" />
              </picture>
              <picture>
                <img src="/src/images/galleryImage/Rectangle 23.png" alt="" />
              </picture>
              <picture>
                <img src="/src/images/galleryImage/Rectangle 24.png" alt="" />
              </picture>
              <picture>
                <img src="/src/images/galleryImage/Rectangle 25.png" alt="" />
              </picture>
              <picture>
                <img src="/src/images/galleryImage/Rectangle 26.png" alt="" />
              </picture>
              <picture>
                <img src="/src/images/galleryImage/Rectangle 27.png" alt="" />
              </picture>
              <picture>
                <img src="/src/images/galleryImage/Rectangle 28.png" alt="" />
              </picture>
              <picture>
                <img src="/src/images/galleryImage/Rectangle 29.png" alt="" />
              </picture>
              <picture>
                <img src="/src/images/galleryImage/Rectangle 30.png" alt="" />
              </picture>
              <picture>
                <img src="/src/images/galleryImage/Rectangle 31.png" alt="" />
              </picture>
            </div>
          </section>

          <section className="our-projects">
            <h1 className="section-title">
              our <br /> <span className="section-title-span">projects</span>{" "}
            </h1>
            <div className="our-projects_container">
              <div className="our-project">
                <picture>
                  <img
                    src="./src/images/sampleProjectImage/image 18.png"
                    alt=""
                  />
                </picture>
                <div className="our-project_text">
                  <h1 className="our-project_title section-title">
                    sample project
                  </h1>
                  <p className="our-project_description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quo repellat exercitationem enim cumque voluptates?
                    Provident cupiditate illum nisi nemo esse illo doloremque
                    facere aliquam officiis, accusamus architecto fuga veritatis
                    est.
                  </p>
                  <div className="cta our-project_cta">view more</div>
                </div>
              </div>
              <div className="our-project">
                <picture>
                  <img
                    src="./src/images/sampleProjectImage/image 17.png"
                    alt=""
                  />
                </picture>
                <div className="our-project_text">
                  <h1 className="our-project_title section-title">
                    sample project
                  </h1>
                  <p className="our-project_description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quo repellat exercitationem enim cumque voluptates?
                    Provident cupiditate illum nisi nemo esse illo doloremque
                    facere aliquam officiis, accusamus architecto fuga veritatis
                    est.
                  </p>
                  <div className="cta our-project_cta">view more</div>
                </div>
              </div>
              <div className="our-project">
                <picture>
                  <img
                    src="./src/images/sampleProjectImage/image 15.png"
                    alt=""
                  />
                </picture>
                <div className="our-project_text">
                  <h1 className="our-project_title section-title">
                    sample project
                  </h1>
                  <p className="our-project_description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quo repellat exercitationem enim cumque voluptates?
                    Provident cupiditate illum nisi nemo esse illo doloremque
                    facere aliquam officiis, accusamus architecto fuga veritatis
                    est.
                  </p>
                  <div className="cta our-project_cta">view more</div>
                </div>
              </div>
            </div>
          </section>

          <section className="contact-information">
            <div className="contact-information_text">
              <h1 className="section-title contact-information_title">
                contact <br />{" "}
                <span className="section-title-span">information</span>{" "}
              </h1>
              <h1 className="contact-information_company-name">
                comapny name <br />{" "}
                <span>1234 Sample Street Austin Texas 76401</span>
              </h1>

              <h1 className="contactact-information_address">512.333.2222</h1>

              <h1 className="contact-information_email">
                sampleemail@gmail.com
              </h1>
              <div className="cta"> contact us</div>
            </div>

            <img
              className="map map-image"
              src="./src/images/mapImage.png"
              alt=""
            />
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="wrapper">
          <div className="footer_navigation-row">
            <pictur className="footer_logo">
              <img src="./src/images/whiteLogo.svg" alt="" />
            </pictur>
            <div className="footer_information footer_col">
              <h1 className="column-header">information</h1>

              <ul>
                <li className="">
                  <a href="">main</a>
                </li>
                <li>
                  <a href="">gallery</a>
                </li>
                <li>
                  <a href="">projects</a>
                </li>
                <li>
                  <a href="">certification</a>
                </li>
                <li>
                  <a href="">contact</a>
                </li>
              </ul>
            </div>
            <div className="footer_contact footer_col">
              <h1 className="column-header">contacts</h1>
              <ul>
                <li className="">
                  <a className="footer_contact_row">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <div>
                      <p>1234 Sample Street</p>
                      <p>Austin Texas 78704</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="footer_contact_row">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <p>+255 745 557 020</p>
                  </a>
                </li>
                <li>
                  <a className="footer_contact_row">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <p>leoshayo11@gmail.com</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_social footer_col">
              <h1 className="column-header">social media</h1>
              <div>
                <a href="">
                  {" "}
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>{" "}
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-row">
          <p>&copy;2021 All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Copy;
