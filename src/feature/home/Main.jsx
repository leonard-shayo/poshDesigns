import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Testimonial from "../testimonial/Testimonial";
import Faqs from "../../utilities/Faqs";

/* eslint-disable react/no-unescaped-entities */
const Main = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm();

  const contactSection = useRef(null);

  function onFormSubmission(data) {
    console.log(data);
    emailjs
      .sendForm(
        "service_d3v14ap",
        "template_lb6ols3",
        form.current,
        "mUAx85XrZTBdf3zqo"
      )
      .then(
        () => {
          toast.success("Email sent successfull ", {
            style: {
              fontSize: "2rem",
            },
          });
          reset();
        },
        (error) => {
          console.log(error);
          toast.error("Fail to send email ", {
            style: {
              fontSize: "2rem",
            },
          });
        }
      );
  }

  function handleToContact(e) {
    e.preventDefault();
    contactSection.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <section className="hero-section">
        <div className="hero-text-container">
          <h1 className="hero_title ">Crafting Homes, Building Pride</h1>
          <p className="hero_subtitle">
            We have made thousands of people feel at home, combining comfort and
            style. By using the finest materials sourced from Turkey and Europe,
            ensuring top-notch quality that our customers excited about!.
          </p>
          <div onClick={handleToContact} className="cta">
            contact us
          </div>
        </div>
        <picture className="hero-image-container">
          <img
            className="hero_image"
            src="./../../../public/images/heroImage.png"
            alt=""
          />
        </picture>
      </section>
      <section className="about">
        <picture className="about_images">
          <img src="./../../../public/images/aboutUs.jpg" alt="" />
        </picture>
        <div className="about_content">
          <h1 className="about_title section-title">Unveiling Our Story</h1>
          <p className="about_details">
            Hey there! We're excited to share a bit about who we are. At
            poshhdesigns, we're not just builders; we're like dream makers. We
            create homes that are not just houses – they're cozy, stylish, and
            something you'll be proud to call your own.
          </p>
          <div className="about_button">
            {" "}
            <Link to={"/aboutUs"}> read more</Link>
          </div>
        </div>
      </section>

      <section className="projects">
        <h1 className="project_title section-title">our projects</h1>
        <div className="projects_gallery">
          <a href="" className="project-image-link second">
            <picture>
              <img
                src="./../../../public/images/projects/roberto-nickson-tleCJiDOri0-unsplash.jpg"
                alt=""
              />
            </picture>
          </a>
          <a href="" className="project-image-link third">
            <picture>
              <img
                src="./../../../public/images/projects/toa-heftiba-FV3GConVSss-unsplash.jpg"
                alt=""
              />
            </picture>
          </a>
          <a href="" className="project-image-link fourth">
            <picture>
              <img
                src="./../../../public/images/projects/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg"
                alt=""
              />
            </picture>
          </a>
          {/* <a href="" className="project-image-link fifth">
            <picture>
              <img
                src="./../../../public/images/projects/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg"
                alt=""
              />
            </picture>
          </a> */}
          <a href="" className="project-image-link first">
            <picture>
              <img
                src="./../../../public/images/projects/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg"
                alt=""
              />
            </picture>
          </a>
        </div>
        <div className="cta view-all-project-cta">
          <Link to={"/projects"}> all projects</Link>
        </div>
      </section>

      <Testimonial />

      <Faqs />

      <section ref={contactSection} className="contact-us">
        <h1 className="contact-us_title section-title">contact us</h1>
        <div className="contact-us_content">
          <form
            action="submit"
            onSubmit={handleSubmit(onFormSubmission)}
            className="contact-us_form"
            ref={form}
            // this is used to elimante browser form validation
            // noValidate
          >
            <input
              {...register("name", { required: "This field is require " })}
              type="text"
              name="name"
              placeholder="name"
              id="name"
              className={`${errors?.name?.message ? `error` : ``}`}
            />
            {errors?.name?.message ? (
              <p className="form-error">{errors?.name?.message}</p>
            ) : null}
            <input
              {...register("phone", { required: "This field is require " })}
              type="tel"
              name="phone"
              className={`${errors?.phone?.message ? `error` : ``}`}
              placeholder="phone"
              id="phone"
            />
            {errors?.phone?.message ? (
              <p className="form-error">{errors?.phone?.message}</p>
            ) : null}
            <input
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: `Enter a correct format i.e x@y.com`,
                },
                required: { value: true, message: `this field is required` },
              })}
              type="email"
              name="email"
              className={`${errors?.email?.message ? `error` : ``}`}
              placeholder="email"
              id="email"
            />
            {errors?.email?.message ? (
              <p className="form-error">{errors?.email?.message}</p>
            ) : null}
            <input
              {...register("interestedIn", {
                required: "This field is require ",
              })}
              className={`${errors?.interestedIn?.message ? `error` : ``}`}
              type="text"
              name="interestedIn"
              placeholder="interested in"
              id="interestedIn"
            />
            {errors?.interestedIn?.message ? (
              <p className="form-error">{errors?.interestedIn?.message}</p>
            ) : null}
            <input
              {...register("message", { required: "This field is require " })}
              className={`${errors?.message?.message ? `error` : ``}`}
              type="text"
              name="message"
              placeholder="message"
              id="message"
            />
            {errors?.message?.message ? (
              <p className="form-error">{errors?.message?.message}</p>
            ) : null}

            <button
              disabled={!isValid || !isDirty}
              type="submti"
              className="cta "
            >
              {isSubmitting ? `submtting...` : `send email`}
            </button>
          </form>
          <picture className="contact-us_image">
            <img src="./../../../public/images/contactImage.png" alt="" />
          </picture>
        </div>
      </section>
    </>
  );
};

export default Main;
