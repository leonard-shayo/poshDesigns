// import styles from "./AppLayout.module"

import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { useInView } from "react-intersection-observer";

// import Gallery from "../gallery/Gallery";
const AppLayout = () => {
  // hamburger menu
  const humburgerBtn = useRef(null);

  const humburgerMenuContainer = useRef(null);

  const [isHamburgerActive, setIsHamburgerActive] = useState(true);

  function handleRevealLinks(e) {
    e.preventDefault();

    setIsHamburgerActive(
      humburgerMenuContainer.current.classList.contains("active")
    );

    humburgerMenuContainer.current.classList.toggle("active");
  }

  function handleLinkClick(e) {
    const linkClicked = e.target.closest(".hamburger-menu_link");

    if (!linkClicked) return;

    setIsHamburgerActive(
      humburgerMenuContainer.current.classList.contains("active")
    );

    humburgerMenuContainer.current.classList.toggle("active");

    humburgerBtn.innerHTML = `<i class="fa fa-bars menu-icon" aria-hidden="true"></i>`;

    // const id = linkClicked.getAttribute("href").split("").slice(1).join("");

    document.querySelector("#header").scrollIntoView({ behavior: "smooth" });
  }

  function handleGoToPage(linkClass, e) {
    console.log(e);
    e.preventDefault();
    const linkClicked = e.target.closest(`.${linkClass}`);
    if (!linkClicked) return;
    document.querySelector("#header").scrollIntoView({ behavior: "smooth" });
  }

  const { ref: header, inView } = useInView();

  const main = useRef();
  //   const headerContainer = useRef();

  const date = new Date();

  return (
    <>
      <Toaster />
      <header id="header" ref={header}>
        {/* <header> */}
        <div className={`header-container wrapper  ${!inView ? "sticky" : ""}`}>
          <nav className="header-navigation">
            <div
              onClick={handleGoToPage.bind(undefined, "loga-image-container")}
              className="loga-image-container"
            >
              <NavLink to={"/main"}>
                <img
                  className="logo-image"
                  src="./../../../public/images/blackLogo.png"
                  alt=""
                />
              </NavLink>
            </div>
            <ul
              onClick={handleGoToPage.bind(undefined, "header-link")}
              className="header-links"
            >
              <li className="header-link">
                <NavLink className=" nav-link" to={"/main"}>
                  main
                </NavLink>
              </li>
              <li className="header-link">
                <NavLink className=" nav-link" to={"/gallery"}>
                  gallery
                </NavLink>
              </li>
              <li className="header-link">
                <NavLink className=" nav-link" to={"/projects"}>
                  projects
                </NavLink>
              </li>
              <li className="header-link">
                <NavLink className=" nav-link" to={"/aboutUS"}>
                  about us
                </NavLink>
              </li>
              <li className="header-link">
                <NavLink className=" nav-link" to={"/contacts"}>
                  contacts
                </NavLink>
              </li>
            </ul>
            <nav
              ref={humburgerBtn}
              className="menu"
              onClick={handleRevealLinks}
            >
              {isHamburgerActive ? (
                <GiHamburgerMenu size={"3rem"} />
              ) : (
                <FaTimes size={"3rem"} />
              )}
            </nav>
          </nav>
          <div
            ref={humburgerMenuContainer}
            className="hamburger-menu-container"
            onClick={handleLinkClick}
          >
            <nav className="hamburger-menu_links">
              <NavLink to={"/main"} className="hamburger-menu_link nav-link  ">
                main
              </NavLink>

              <NavLink
                to={"/Gallery"}
                className="hamburger-menu_link nav-link  "
              >
                gallery
              </NavLink>
              <NavLink
                to={"/projects"}
                className="hamburger-menu_link nav-link  "
              >
                projects
              </NavLink>
              <NavLink
                to={"/aboutUs"}
                className="hamburger-menu_link nav-link  "
              >
                about us
              </NavLink>

              <NavLink
                to={"/contacts"}
                className="hamburger-menu_link nav-link  "
              >
                contacts
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
      {/* <main ref={main}> */}
      <main ref={main} id="main">
        <div className="wrapper">
          {" "}
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="wrapper">
          <div className="footer_navigation-row">
            <picture className="footer_logo">
              <img src="../../../public/images/whiteLogo.svg" alt="" />
            </picture>
            <div className="footer_information footer_col">
              <h1 className="column-header">information</h1>

              <ul onClick={handleGoToPage.bind(undefined, "footer-link")}>
                <li className="footer-link">
                  <NavLink className=" nav-link" to={"/main"}>
                    main
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink className=" nav-link" to={"/gallery"}>
                    gallery
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink className=" nav-link" to={"/projects"}>
                    projects
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink className=" nav-link" to={"/aboutUs"}>
                    about us{" "}
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink className=" nav-link" to={"/contacts"}>
                    contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer_contact footer_col">
              <h1 className="column-header">contacts</h1>
              <ul>
                <li className="">
                  <a className="footer_contact_row">
                    <FaLocationDot />
                    <div>
                      <p>1234 Sample Street</p>
                      <p>Austin Texas 78704</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="footer_contact_row">
                    <FaPhoneAlt /> <p>+255 745 557 020</p>
                  </a>
                </li>
                <li>
                  <a className="footer_contact_row">
                    <MdEmail /> <p>leoshayo11@gmail.com</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_social footer_col">
              <h1 className="column-header">social media</h1>
              <div>
                <a href="">
                  {" "}
                  <FaSquareXTwitter />{" "}
                </a>
                <a href="">
                  <FaPinterest />{" "}
                </a>
                <a href="">
                  <FaInstagramSquare />{" "}
                </a>
                <a href="">
                  <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-row">
          <p>&copy;{date.getFullYear()} All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default AppLayout;
