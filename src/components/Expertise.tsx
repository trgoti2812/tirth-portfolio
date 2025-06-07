import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import NextjsLogo from "../assets/logo/Nextjs.svg";
import Dart from "../assets/logo/Dart.svg";
import Flutter from "../assets/logo/Flutter.svg";
import Reactt from "../assets/logo/Reactt.svg";
import Firebase from "../assets/logo/Firebase.svg";
import Nestjs from "../assets/logo/Nestjs.svg";
import Nextjs from "../assets/logo/Nextjs.svg";
import GoogleCloud from "../assets/logo/GoogleCloud.svg";
import AWS from "../assets/logo/AWS.svg";
import DigitalOcean from "../assets/logo/DigitalOcean.svg";
import TypeScript from "../assets/logo/TypeScript.svg";

const labelsFirst = [
  "React",
  "Next.js",
  "NestJS",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "SASS",
  "MongoDB",
  "SQL",
];

const labelsSecond = [
  "DigitalOcean",
  "Aws",
  "Google Cloud",
  "Git",
  "CI/CD",
  "Docker",
];

const labelsThird = ["Flutter", "Dart", "Firebase", "Android", "IOS"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <div className="skill-logos">
              <img src={Reactt} width={50} alt="Avatar" />
              <img src={Nestjs} width={50} alt="Avatar" />
              <img src={Nextjs} width={50} alt="Avatar" />
              <img src={TypeScript} width={50} alt="Avatar" />
            </div>

            <h3>Full Stack Web Development</h3>
            <p>
              I specialize in building high-performance, scalable web
              applications using modern frameworks like React, Next.js, and
              NestJS. With TypeScript across the stack, I ensure type-safe,
              maintainable codebases.
            </p>
            <div className="flex-chips">
              {/* <span className="chip-title">Tech stack:</span> */}
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="skill-logos">
              <img src={DigitalOcean} width={50} alt="Avatar" />
              <img src={GoogleCloud} width={50} alt="Avatar" />
              <img src={AWS} width={50} alt="Avatar" />
            </div>

            <h3>DevOps & Automation</h3>
            <p>
              Once the application is built, I help clients set up DevOps
              testing, CI/CD pipelines, and deployment automation to support the
              successful Go-Live.
            </p>
            <div className="flex-chips">
              {/* <span className="chip-title">Tech stack:</span> */}
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="skill-logos">
              <img src={Flutter} width={40} alt="Avatar" />
              <img src={Dart} width={40} alt="Avatar" />
              <img src={Firebase} width={40} alt="Avatar" />
            </div>

            <h3>Mobile Development</h3>
            <p>
              I build smooth, cross-platform mobile apps using Flutter and Dart,
              backed by scalable Firebase services. My apps focus on clean UI,
              fast performance, and production-ready architecture.
            </p>
            <div className="flex-chips">
              {/* <span className="chip-title">Tech stack:</span> */}
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
