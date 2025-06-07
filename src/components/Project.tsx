import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";

import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <div>
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </div>
          <div>
            <h2>Fielder : Book your Turf</h2>
          </div>
          <p>
            Designed an intuitive UI/UX for Fielder, focusing on seamless user
            interaction and clean visual hierarchy. Prioritized user-centered
            design to enhance functionality and overall user experience.
          </p>
        </div>
        <div className="project">
          <a href="https://www.bhoomipro.com" target="_blank" rel="noreferrer">
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.bhoomipro.com" target="_blank" rel="noreferrer">
            <h2>BhoomiPro – Real Estate Platform UI with Next.js</h2>
          </a>
          <p>
            Developed a dynamic and responsive real estate web platform using
            Next.js, focusing on performance, SEO optimization, and smooth user
            experience. Integrated modern UI/UX practices to streamline property
            listings, search, and user navigation.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.perthshireboxoffice.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.perthshireboxoffice.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Perthshire Box Office – Full-Stack Event Booking Platform</h2>
          </a>
          <p>
            Developed a full-stack event booking platform using NestJS for the
            backend, Firebase Authentication for secure user login, and Prisma
            ORM with MySQL for efficient data management. Delivered a seamless
            booking experience with fast, scalable APIs and an optimized,
            user-friendly frontend.
          </p>
        </div>
        <div className="project">
          <a href="https://www.cyncly.com/en/" target="_blank" rel="noreferrer">
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.cyncly.com/en/" target="_blank" rel="noreferrer">
            <h2>Cyncly – Modern B2B Website</h2>
          </a>
          <p>
            Built high-performance B2B website for Cyncly using Next.js for the
            frontend and NestJS for the backend, delivering a seamless and
            modern user experience. Focused on responsive UI/UX, fast
            server-side rendering, and scalable architecture to support Cyncly’s
            global design software solutions.
          </p>
        </div>
        <div className="project">
          <a
            href="http://www.greenlyfegrow.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="http://www.greenlyfegrow.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Greenlyfe grow - Global exports</h2>
          </a>
          <p>
            Built a professional export company platform using Next.js for the
            frontend and NestJS for the backend. Developed a custom admin panel
            enabling administrators to easily manage product data, showcasing
            Greenlyfe Grow’s agricultural exports with a clean, modern UI and
            seamless data flow.
          </p>
        </div>
        <div className="project">
          <div>
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </div>
          <div>
            <h2>Allure Diamonds – Luxury E-Commerce UI/UX Design</h2>
          </div>
          <p>
            Designed a refined and elegant UI/UX for Allure Diamonds, focusing
            on premium aesthetics and a smooth shopping experience tailored for
            high-end jewelry. Prioritized intuitive navigation, mobile
            responsiveness, and visual storytelling to elevate the brand’s
            digital presence.
          </p>
        </div>
        <div className="project">
          <a
            href="https://yallacompare.com/properties/uae/en/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yallacompare.com/properties/uae/en/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Yallacompare Properties</h2>
          </a>
          <p>
            Developed an interactive property comparison tool using React,
            Node.js, and MongoDB. This project helps users quickly identify
            suitable properties based on their preferences and requirements.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.mozartcompany.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.mozartcompany.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Mozart & Co.</h2>
          </a>
          <p>
            Designed and developed a sleek, responsive website for Mozart & Co.
            using Next.js, focusing on fast performance and seamless user
            experience. The modern UI/UX highlights the agency’s creative
            portfolio while ensuring intuitive navigation and mobile-first
            design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
