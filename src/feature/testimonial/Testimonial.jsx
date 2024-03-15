import { useCallback, useEffect } from "react";

const Testimonial = () => {
  // Slider
  const slider = useCallback(function () {
    const slides = document.querySelectorAll(".slide");
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");
    const dotContainer = document.querySelector(".dots");

    let curSlide = 0;
    const maxSlide = slides.length;

    // Functions
    const createDots = function () {
      dotContainer.innerHTML = "";
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = function (slide) {
      document
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        ?.classList.add("dots__dot--active");
    };

    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };

    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const init = function () {
      goToSlide(0);
      createDots();

      activateDot(0);
    };
    init();

    // Event handlers
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") prevSlide();
      e.key === "ArrowRight" && nextSlide();
    });

    dotContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  }, []);

  useEffect(
    function () {
      slider();
    },
    [slider]
  );

  return (
    <section className="testimoniaSectiion">
      <div className="section__title section__title--testimonials">
        <h3 className="section-title">Real Stories, Real Satisfaction</h3>
      </div>
      <div className="slider">
        <div className="slide">
          <div className="testimonial">
            <address className="testimonial__author">
              <img
                src="./../../../public/images/testimonial/user-2.jpg"
                alt=""
                className="testimonial__photo"
              />
              <h6 className="testimonial__name">Aarav Lynn</h6>
              <p className="testimonial__location">San Francisco, USA</p>
            </address>

            <blockquote className="testimonial__text">
              The designers took the time to understand my style and
              preferences, and the end result is stunning
            </blockquote>
          </div>
        </div>

        <div className="slide">
          <div className="testimonial">
            <address className="testimonial__author">
              <img
                src="./../../../public/images/testimonial/user-1.jpg"
                alt=""
                className="testimonial__photo"
              />
              <h6 className="testimonial__name">Francisco Gomes</h6>
              <p className="testimonial__location">Lisbon, Portugal</p>
            </address>

            <blockquote className="testimonial__text">
              The interior designers here are true professionals. They took my
              ideas and brought them to life with a touch of elegance.
            </blockquote>
          </div>
        </div>

        <div className="slide">
          <div className="testimonial">
            <address className="testimonial__author">
              <img
                src="./../../../public/images/testimonial/user-3.jpg"
                alt=""
                className="testimonial__photo"
              />
              <h6 className="testimonial__name">Aarav Lynn</h6>
              <p className="testimonial__location">San Francisco, USA</p>
            </address>
            <blockquote className="testimonial__text">
              Every room feels like a piece of art. I'm beyond thrilled with the
              results!, thanks to their creative touch. They not only understood
              my vision but elevated it to a whole new level.
            </blockquote>
          </div>
        </div>

        <button className="slider__btn slider__btn--left">&larr;</button>
        <button className="slider__btn slider__btn--right">&rarr;</button>
        <div className="dots"></div>
      </div>
    </section>
  );
};

export default Testimonial;
