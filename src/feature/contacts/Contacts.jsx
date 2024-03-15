// import JSEncrypt from "jsencrypt";

const Contacts = () => {
  return (
    <>
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

          <h1 className="contact-information_company-name">
            Address <br /> <span>512.333.2222</span>
          </h1>

          <h1 className="contact-information_company-name">
            Email
            <br /> <span>sampleemail@gmail.com</span>
          </h1>

          <h1 className="contact-information_company-name">
            Phone
            <br /> <span>+255 745 557 020</span>
          </h1>

          {/* <h1 className="contactact-information_address">512.333.2222</h1> */}

          {/* <h1 className="contact-information_email">sampleemail@gmail.com</h1> */}
          {/* <div className="cta"> contact us</div> */}
        </div>

        {/* <img
          className="map map-image"
          src="./../../../public/images/mapImage.png"
          alt=""
        /> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8057208466403!2d39.21212577413954!3d-6.793478466438659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c577f3bfdb8ef%3A0xa0ab8863dc09a465!2sSHEMITA%20ARCHITECTS!5e0!3m2!1sen!2stz!4v1710140921431!5m2!1sen!2stz"
          //   width="600"
          //   height="450"
          className="map map-image"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Contacts;
