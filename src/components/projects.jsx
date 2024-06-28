import React from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import talkofcode1 from "../assets/projectimages/talkofcode2.png";
import Ecom from "../assets/projectimages/Ecom.png";
import resume from "../assets/projectimages/Resume.png";
import code from "../assets/projectimages/codecompiler.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <div className="flex flex-col items-center pb-10 ">
      <p className="text-3xl text-white font-bold ">
        My <span className="bluegradient">Projects</span>
      </p>

      {/* crousal */}

      <div className="w-3/4 text-center mt-3">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={3}
          navigation={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            modifier: 0,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          initialSlide={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 3,
            },
            // Add more breakpoints if needed
          }}
        >
          <SwiperSlide className="p-4">
            <div className=" flex flex-col  w-[280px] sm:w-[290px] gap-y-2 card duration-300 rounded-lg p-5 h-[465px]">
              <img src={talkofcode1} className="rounded-md" />
              <p className="font-bold text-xl text-center bluegradient">
                Student Community
              </p>
              <hr></hr>
              <p className="flex text-start font-semibold text-white p-1">
                TalkOfCode is a vibrant students and tech community platform
                where users can buy and sell tech products, seek and provide
                solutions to technical queries, and stay updated with the latest
                tech news.
              </p>
              <div className="flex w-full justify-start gap-8 ">
                <button className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2">
                  <FaGithub /> Github
                </button>
                <button className="projectbtns  p-2 rounded-md  text-white font-semibold flex items-center gap-2">
                  {" "}
                  <IoLink />
                  Demo
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-4">
            <div className=" flex flex-col  w-[280px] sm:w-[290px]  gap-y-2 card duration-300 rounded-lg  p-5  h-[465px]">
              <img src={Ecom} className="rounded-md" />
              <p className="font-bold text-xl text-center bluegradient">
                Ecommerce Website
              </p>
              <hr></hr>
              <p className="flex text-start font-semibold text-white p-1">
                Developed an E-commerce website. The site features comprehensive
                admin tools for product and user management, and both user and
                admin functionalities like product search, cart, and payment
                gateway integration. General features include user registration,
                login, and password reset.
              </p>
              <div className="flex w-full justify-start gap-8">
                <button className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2">
                  <FaGithub /> Github
                </button>
                <button className="projectbtns  p-2 rounded-md  text-white font-semibold flex items-center gap-2">
                  {" "}
                  <IoLink />
                  Demo
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-4">
            <div className=" flex flex-col  w-[280px] sm:w-[290px]  gap-y-2 card duration-300 rounded-lg  p-5  h-[465px]">
              <img src={resume} className="rounded-md" />
              <p className="font-bold text-xl text-center bluegradient">
                Resume Builder
              </p>
              <hr></hr>
              <p className="flex text-start font-semibold text-white p-1">
                A basic website where user can enter his/her details and
                generate a resume. After generating the resume the user can aslo
                download an image of the generated resume.
              </p>
              <div className="flex w-full justify-start gap-8">
                <button className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2">
                  <FaGithub /> Github
                </button>
                <button className="projectbtns  p-2 rounded-md  text-white font-semibold flex items-center gap-2">
                  {" "}
                  <IoLink />
                  Demo
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-4">
            <div className=" flex flex-col  w-[280px] sm:w-[290px]  gap-y-2 card duration-300 rounded-lg  p-5  h-[465px]">
              <img src={code} className="rounded-md" />
              <p className="font-bold text-xl text-center bluegradient">
                Online Code Compiler
              </p>
              <hr></hr>
              <p className="flex text-start font-semibold text-white p-1">
                Developed an online code compiler. This project was developed
                using React.js it supports programming languages such as C++,
                Java, and Python. Additionally, the compiler features three
                different themes and adjustable text size functionality.
              </p>
              <div className="flex w-full justify-start gap-8">
                <button className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2">
                  <FaGithub /> Github
                </button>
                <button className="projectbtns  p-2 rounded-md  text-white font-semibold flex items-center gap-2">
                  {" "}
                  <IoLink />
                  Demo
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
