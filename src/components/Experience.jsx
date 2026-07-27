import React, { useState } from "react";
import { Tag } from "antd";
import { Modal } from "antd";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import techhunters from "../assets/experienceimages/techhinters.jpeg";
import salesqueen from "../assets/experienceimages/salesqueen.jpeg";
import imc from "../assets/experienceimages/imc.jpg";
import Aws from "../assets/experienceimages/Aws.jpeg";
import SalesQueencertificate from "../assets/experienceimages/ayushcertificate.png";
import hack from "../assets/experienceimages/hack.jpg";
import Imccertificate from "../assets/experienceimages/Imccertificate.jpg";
import Gssoc from "../assets/experienceimages/girlscriptsoc_logo.jpeg";
import gssoccert from "../assets/experienceimages/gssoc.jpg";
import stepup from "../assets/experienceimages/stepup.png";
import freecodecamp from "../assets/experienceimages/freecodecamp.png";
import iips from "../assets/experienceimages/iips.svg";
import { FaCode } from "react-icons/fa6";

const Experience = () => {
  const [certificate, setcertificate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (c) => {
    setcertificate(c);
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-y-5 px-2 sm:px-4 overflow-x-hidden"
      id="Experience"
    >
      <p className="text-3xl text-white font-bold mt-5">
        My <span className="bluegradient">Experience</span>
      </p>

      <VerticalTimeline>
        {/* StepUp Analytics */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="June 2025 – Present"
          icon={
            <img
              src={stepup}
              className="rounded-full w-full h-full object-cover bg-white"
              alt="StepUp Analytics"
            />
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Full Stack Developer
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            StepUp Analytics · Remote, Netherlands
          </h4>

          <p>
            Built the full admin panel for stepupanalytics.com — lead
            extraction, blog, review, and project management with JWT-secured
            login — and contributed to the public-facing website UI.
          </p>
          <p>
            Engineered high-performance React.js frontends across 7 client
            sites (Lighthouse 95+), implemented multilingual routing for SEO,
            introduced caching (~50% faster data retrieval), shared AWS SES
            email service, and automated CI/CD with GitHub Actions (~70% faster
            deploys) via Nginx on DigitalOcean.
          </p>
          <p className="text-sm opacity-80">
            Key domains: stepupanalytics.com, 0900dentist.com, hasibo.nl,
            belqees.nl, maidicare.nl, hiddencourtyard.nl
          </p>
          <div className="flex mt-1 items-center gap-1 flex-wrap">
            <Tag
              color="#cd201f"
              icon={<FaCode />}
              className="flex items-center gap-1"
            >
              Skills:
            </Tag>
            <Tag color="blue">React.js</Tag>
            <Tag color="lime">Node.js</Tag>
            <Tag color="green">MongoDB</Tag>
            <Tag color="orange">AWS SES</Tag>
            <Tag color="cyan">CI/CD</Tag>
            <Tag color="purple">Nginx</Tag>
          </div>
          <div className="flex gap-x-4 items-center flex-wrap">
            <a href="https://stepupanalytics.com" target="blank">
              <button className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4">
                Visit Website
              </button>
            </a>
          </div>
        </VerticalTimelineElement>

        {/* gssoc */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="May 2024 - July 2024"
          icon={<img src={Gssoc} className="rounded-full" alt="GSSoC"></img>}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Open Source Contributor — GirlScript Summer of Code
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Top Contributor · 128 Merged PRs (4225 points)
          </h4>

          <p>
            Ranked among the top contributors with 128 merged pull requests.
            Also had 4 pull requests merged into the FreeCodeCamp repository.
          </p>
          <div className="flex mt-1 items-center gap-1 flex-wrap">
            <Tag
              color="#cd201f"
              icon={<FaCode />}
              className="flex items-center gap-1"
            >
              Skills:
            </Tag>

            <Tag color="magenta">MERN</Tag>

            <Tag color="orange">Git </Tag>
            <Tag color="cyan">Github </Tag>
          </div>
          <div className="flex gap-x-4 items-center flex-wrap">
            <button
              className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4"
              onClick={() => {
                showModal("Gssoc");
              }}
            >
              View Certificate
            </button>
            <a href="https://shorturl.at/lybao" target="blank">
              <button className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4">
                LinkedIn post
              </button>
            </a>
          </div>
        </VerticalTimelineElement>

        {/* FreeCodeCamp */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="Open Source"
          icon={
            <img
              src={freecodecamp}
              className="rounded-full w-full h-full object-cover bg-white"
              alt="FreeCodeCamp"
            />
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">
            FreeCodeCamp Contributor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            4 Pull Requests Merged
          </h4>
          <p>
            Contributed to the FreeCodeCamp open source repository with 4 merged
            pull requests, improving documentation and codebase quality.
          </p>
          <div className="flex mt-1 items-center gap-1 flex-wrap">
            <Tag
              color="#cd201f"
              icon={<FaCode />}
              className="flex items-center gap-1"
            >
              Skills:
            </Tag>
            <Tag color="orange">Git</Tag>
            <Tag color="cyan">GitHub</Tag>
            <Tag color="magenta">Open Source</Tag>
          </div>
          <a href="https://github.com/freeCodeCamp/freeCodeCamp" target="blank">
            <button className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4">
              View Repository
            </button>
          </a>
        </VerticalTimelineElement>

        {/* sales queeen  */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="May 2024 - July 2024"
          icon={
            <img
              src={salesqueen}
              className="rounded-full"
              alt="Salesqueen"
            ></img>
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Frontend developer intern
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Salesqueen software solutions, Chennai
          </h4>

          <p>
            Worked as frontend developer i was responsible for developing user
            and admin dashboard.
          </p>
          {/* tags */}
          <div className="flex mt-1 items-center gap-1 flex-wrap">
            <Tag
              color="#cd201f"
              icon={<FaCode />}
              className="flex items-center gap-1"
            >
              Skills:
            </Tag>
            <Tag color="orange" className="flex items-center">
              React.js
            </Tag>
            <Tag color="blue">Css</Tag>
            <Tag color="">Bootstrap</Tag>
          </div>

          <button
            className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4"
            onClick={() => {
              showModal("Salesqueen");
            }}
          >
            View Certificate
          </button>
        </VerticalTimelineElement>

        {/* hackhive */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work border-gradient-left "
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="March 2024"
          icon={
            <img
              src={techhunters}
              className="rounded-full"
              alt="Techhunters"
            ></img>
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Hackhive Hackathon
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Techhuntersss</h4>
          <p>
            I was selected for Central india's biggest 36 hours hackathon
            (Hackhive) in which our team developed a job portal for students.
          </p>
          <div className="flex mt-1 items-center gap-1 flex-wrap">
            <Tag
              color="#cd201f"
              icon={<FaCode />}
              className="flex items-center gap-1"
            >
              Skills:
            </Tag>
            <Tag color="blue" className="flex items-center">
              React
            </Tag>
            <Tag color="lime">Nodejs</Tag>
            <Tag color="green">Mongodb</Tag>
          </div>
          <button
            className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4"
            onClick={() => {
              showModal("Hackhive");
            }}
          >
            View Certificate
          </button>
        </VerticalTimelineElement>

        {/* imc  */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work border-gradient-left "
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="July 2023 - October 2023"
          icon={<img src={imc} className="rounded-full" alt="IMC"></img>}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Full Stack Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Indore municiple corporation (IT department)
          </h4>
          <p>
            Worked as a full stack developer and developed a lucky draw website
            to conduct lucky draw in indore
          </p>
          <div className="flex mt-1 items-center gap-1 flex-wrap">
            <Tag
              color="#cd201f"
              icon={<FaCode />}
              className="flex items-center gap-1"
            >
              Skills:
            </Tag>
            <Tag color="blue" className="flex items-center">
              React
            </Tag>
            <Tag color="lime">Nodejs</Tag>
            <Tag color="green">Mongodb</Tag>
          </div>
          <div className="flex gap-x-4 items-center flex-wrap">
            <button
              className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4"
              onClick={() => {
                showModal("IMC");
              }}
            >
              View Certificate
            </button>
            <a
              href="https://www.linkedin.com/posts/ayush-sharma-a155a8267_intership-imc-activity-7124027220016193536-o7Mo?utm_source=share&utm_medium=member_desktop"
              target="blank"
            >
              <button className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4">
                LinkedIn post
              </button>
            </a>
          </div>
        </VerticalTimelineElement>

        {/* aws */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="March 2024 - Present"
          icon={<img src={Aws} className="rounded-full" alt="AWS"></img>}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            AWS cloud club (Core team member & Web Developer)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            IIPS DAVV, Indore
          </h4>
          <p>
            I'am part of dynamic Aws Cloud team where we organise events related
            to AWS Cloud Technologies.
          </p>
          <div className="flex mt-1 items-center gap-1 flex-wrap">
            <Tag
              color="#cd201f"
              icon={<FaCode />}
              className="flex items-center gap-1"
            >
              Skills:
            </Tag>
            <Tag color="orange">AWS</Tag>
            <Tag color="blue" className="flex items-center">
              React
            </Tag>
            <Tag color="magenta">Event Management</Tag>
          </div>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7186322706936582144?utm_source=share&utm_medium=member_desktop"
            target="blank"
          >
            <button className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4">
              LinkedIn post
            </button>
          </a>
        </VerticalTimelineElement>

        {/* Education */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="2021 – 2026"
          icon={
            <img
              src={iips}
              className="rounded-full w-full h-full object-cover"
              alt="IIPS DAVV"
            />
          }
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Integrated Masters of Computer Applications (MCA)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            International Institute of Professional Studies, DAVV, Indore
          </h4>
          <p>
            Graduated June 2026 · CGPA: 8.1/10 · Indore, Madhya Pradesh
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <Modal
        title="Certificate"
        open={isModalOpen}
        keyboard={true}
        width={800}
        okText={null}
        footer={null}
        onCancel={handleCancel}
        className="flex justify-center"
      >
        {certificate == "Salesqueen" ? (
          <img
            src={SalesQueencertificate}
            className="h-[500px]"
            alt="Sales Queen Certificate"
            loading="lazy"
          />
        ) : certificate == "Hackhive" ? (
          <img
            src={hack}
            className="h-[500px]"
            alt="Hackhive Certificate"
            loading="lazy"
          />
        ) : certificate == "Gssoc" ? (
          <img
            src={gssoccert}
            className="h-[500px]"
            alt="gssoc certificate"
            loading="lazy"
          />
        ) : (
          <img
            src={Imccertificate}
            className="h-[500px]"
            alt="IMC certificate"
            loading="lazy"
          />
        )}
      </Modal>
    </div>
  );
};

export default Experience;
