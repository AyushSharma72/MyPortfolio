import React from "react";
import { Tag } from "antd";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import techhunters from "../assets/experienceimages/techhinters.jpeg";
import { FaCode } from "react-icons/fa6";
const Experience = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-y-5"
      id="Experience"
    >
      <p className="text-3xl text-white font-bold mt-5">
        My <span className="bluegradient">Experience</span>
      </p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work border-gradient-left "
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="May 2024 - July 2024 "
          icon={<img src={techhunters} className="rounded-full"></img>}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Hachive Hackathon
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Techhuntersss</h4>
          <p>
            I was selected for Central india's biggest hackathon (Hackhive) our
            team developed a job portal for students
          </p>
          <div className="flex mt-1 items-center gap-1">
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
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
