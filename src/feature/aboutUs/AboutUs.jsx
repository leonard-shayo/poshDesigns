/* eslint-disable react/no-unescaped-entities */
const AboutUs = () => {
  return (
    <section className="aboutUs-page">
      <h1 className=" section-title">
        Unveiling
        <br /> <span className="section-title-span"> Our story</span>{" "}
      </h1>

      <div className="aboutUs-page_content">
        <p className="aboutUs-page__paragraph">
          Hey there! We're excited to share a bit about who we are. At Posh
          design, we're not just builders; we're like dream makers. We create
          homes that are not just houses – they're cozy, stylish, and something
          you'll be proud to call your own.
        </p>

        <div className="abouUs-page_video">
          {" "}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/H0AgID38M6s?si=ucS5r2egeHQidG9s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <p className="aboutUs-page__paragraph">
          Our mission is pretty straightforward – we want your home to feel like
          you. We put a lot of thought into making each place special, so it's
          not just a place to live but a space where your personality shines
          through.
        </p>
        <p className="aboutUs-page__paragraph">
          We love turning spaces into something to be proud of. It's not just
          about building walls; it's about creating an environment where you
          feel awesome every time you step inside. Your place should be a
          reflection of you, and we're here to make that happen.
        </p>
        <p className="aboutUs-page__paragraph">
          What makes us different? Well, we believe in using top-quality
          materials. We get the good stuff from Turkey and Europe to make sure
          your place not only looks fantastic but lasts a long time too. Your
          space deserves the best, and that's what we're all about.
        </p>
        <p className="aboutUs-page__paragraph">
          Come along with us on this journey of making dreams come true. Your
          home is a canvas, and together, we're painting something amazing.
        </p>
        <p className="aboutUs-page__paragraph">
          Thanks for thinking about us for your special place. Let's build
          something incredible!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
