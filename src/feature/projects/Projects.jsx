const Projects = () => {
  return (
    <>
      <section className="our-projects">
        <h1 className="section-title">
          our <br /> <span className="section-title-span">projects</span>{" "}
        </h1>
        <div className="our-projects_container">
          <div className="our-project">
            <picture>
              <img
                src="./../../../public/images/projects/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg"
                alt=""
              />
            </picture>
            <div className="our-project_text">
              <h1 className="our-project_title section-title">
                sample project
              </h1>
              <p className="our-project_description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                repellat exercitationem enim cumque voluptates? Provident
                cupiditate illum nisi nemo esse illo doloremque facere aliquam
                officiis, accusamus architecto fuga veritatis est.
              </p>
              <div className="cta our-project_cta">view more</div>
            </div>
          </div>
          <div className="our-project">
            <picture>
              <img
                src="./../../../public/images/projects/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg"
                alt=""
              />
            </picture>
            <div className="our-project_text">
              <h1 className="our-project_title section-title">
                sample project
              </h1>
              <p className="our-project_description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                repellat exercitationem enim cumque voluptates? Provident
                cupiditate illum nisi nemo esse illo doloremque facere aliquam
                officiis, accusamus architecto fuga veritatis est.
              </p>
              <div className="cta our-project_cta">view more</div>
            </div>
          </div>
          <div className="our-project">
            <picture>
              <img
                src="./../../../public/images/projects/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg"
                alt=""
              />
            </picture>
            <div className="our-project_text">
              <h1 className="our-project_title section-title">
                sample project
              </h1>
              <p className="our-project_description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                repellat exercitationem enim cumque voluptates? Provident
                cupiditate illum nisi nemo esse illo doloremque facere aliquam
                officiis, accusamus architecto fuga veritatis est.
              </p>
              <div className="cta our-project_cta">view more</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
