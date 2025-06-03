// icon
import { Player } from '@lottiefiles/react-lottie-player';
import { FiGithub } from 'react-icons/fi';
import { IoMail } from 'react-icons/io5';
import { MdExitToApp } from 'react-icons/md';
import { FaPause } from 'react-icons/fa';
import { SlSocialFacebook, SlSocialLinkedin } from 'react-icons/sl';
import { FaPlay } from 'react-icons/fa';
import gif from '../../../assets/Animation - 1736144559195.json';
import TextRun from '../../common/TextRun';
import { useRef, useState } from 'react';

import dontCoi from '../../../assets/music/thecdi.ca - Don t Côi - RPT Orijinn x Ronboogz (Visualizer) (64 KBps).mp3';

const SkillCard = ['Javascrip', 'Reactjs', 'Tailwind', 'Nodejs', 'Express'];

function PlayMusic() {
    const [play, setPlay] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (play) {
            audioRef.current.pause(); // Dừng nhạc nếu đang phát
        } else {
            audioRef.current.play(); // Phát nhạc nếu đang dừng
        }

        setPlay(!play);
    };

    return (
        <div
            className="relative inset-0 rounded-full group border border-[#ffffff1a] w-[200px] cursor-pointer select-none"
            onClick={togglePlay}
        >
            <div className="absolute -inset-[0.60rem] bg-gradient-to-r opacity-30 blur rounded-full from-darkPurple to-lightPurple group-hover:opacity-40 duration-300"></div>

            <div className="relative flex flex-row justify-center items-center gap-3 p-2">
                {play ? <FaPause className="text-[#6366f1]" /> : <FaPlay className="text-[#6366f1]" />}
                <span className="bg-gradient-to-r from-darkPurple to-lightPurple bg-clip-text text-transparent font-semibold">
                    Ready to Innovate
                </span>
            </div>

            {/* Thẻ audio được điều khiển bằng useRef */}
            <audio ref={audioRef} src={dontCoi} />
        </div>
    );
}

function Title() {
    return (
        <div
            className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1]"
            id="Home"
            data-aos="fade-up"
            data-aos-delay="400"
        >
            <div className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-darkPurple to-lightPurple opacity-20 blur-2xl"></span>
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent relative">
                    Frontend
                </span>
            </div>
            <br />
            <div className="relative inline-block mt-2">
                <span className="absolute -inset-2  bg-gradient-to-r from-darkPurple to-lightPurple opacity-20 blur-2xl"></span>
                <span class="relative bg-gradient-to-r from-darkPurple to-lightPurple bg-clip-text text-transparent">
                    Developer
                </span>
            </div>
        </div>
    );
}

function CardSkill({ text }) {
    return (
        <div className="duration-300 h-7 bg-[#ffffff0d] hidden md:flex items-center p-4 rounded-full border-[#ffffff1a] border-2 hover:bg-[#ffffff1a]">
            <span className="text-white text-sm font-medium">{text}</span>
        </div>
    );
}

function Btn() {
    return (
        <div className="flex flex-row gap-3 items-center" data-aos="fade-up" data-aos-delay="800">
            <a href="#Postfolio">
                <div className="relative group w-[160px] cursor-pointer">
                    <div className="absolute w-full -inset-0.5 blur-md bg-gradient-to-r from-darkPurple to-lightPurple opacity-50 group-hover:opacity-90 duration-300 rounded-lg"></div>
                    {/* Nội dung chính */}
                    <div className="relative text-sm font-semibold text-white flex items-center py-3 px-14 justify-center gap-3 group-hover:gap-4 duration-300 z-20 bg-black rounded-lg ">
                        <span>Projects</span>
                        <span className="-rotate-45 group-hover:-rotate-3 duration-300">
                            <MdExitToApp />
                        </span>
                    </div>

                    {/* Hiệu ứng hover */}
                    <div className="absolute top-0 left-0 h-full z-50 bg-gradient-to-r from-darkPurple to-lightPurple rounded-lg opacity-20 w-0 transition-all duration-500 ease-in-out group-hover:w-full"></div>
                </div>
            </a>

            <a href="#Contact">
                <div className="relative group w-[160px] cursor-pointer">
                    <div className="absolute w-full -inset-0.5 blur-md bg-gradient-to-r from-darkPurple to-lightPurple opacity-50 group-hover:opacity-90 duration-300 rounded-lg"></div>
                    {/* Nội dung chính */}
                    <div className="relative text-sm font-semibold text-white flex items-center py-3 px-14 justify-center gap-3 group-hover:gap-4 duration-300 z-20 bg-black rounded-lg ">
                        <span>Contact</span>
                        <span className="-rotate-45 group-hover:-rotate-3 duration-300">
                            <IoMail />
                        </span>
                    </div>

                    {/* Hiệu ứng hover */}
                    <div className="absolute top-0 left-0 h-full z-50 bg-gradient-to-r from-darkPurple to-lightPurple rounded-lg opacity-20 w-0 transition-all duration-500 ease-in-out group-hover:w-full"></div>
                </div>
            </a>
        </div>
    );
}

function NavIcon({ icon, url }) {
    return (
        <a href={url} target="_blank" className="hidden md:block relative p-3 cursor-pointer group">
            <div className=" group-hover:opacity-40 absolute w-full inset-0 blur bg-gradient-to-r from-darkPurple to-lightPurple opacity-20  duration-300 rounded-lg"></div>
            <div className="relative">
                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                <div className="relative p-3">
                    <span className="text-lg text-white opacity-60 group-hover:opacity-90 duration-300">{icon}</span>
                </div>
            </div>
        </a>
    );
}

function Home() {
    return (
        <div className="bg-[#030014] overflow-hidden" id="Home">
            <div className="py-[70px] container mx-auto px-4 w-full flex flex-col lg:flex-row items-center gap-10 justify-between">
                {/* #1 left */}
                <div className="flex gap-6 w-full lg:w-1/2 flex-col" data-aos="fade-right" data-aos-delay="200">
                    <PlayMusic />
                    <Title />
                    <TextRun />
                    <div
                        className="text-white 2xl:text-[18px] xl:text-base font-extralight pl-1 "
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <span>I'm Front-End develop, user interfaces and web applications</span>
                    </div>
                    {/* card skill */}
                    <div className="flex flex-wrap gap-3  justify-start" data-aos="fade-up" data-aos-delay="700">
                        {SkillCard.map((item, index) => (
                            <CardSkill key={index} text={item} />
                        ))}
                    </div>
                    <Btn />
                    <div className="flex flex-row gap-4 mt-3 justify-start" data-aos="fade-up" data-aos-delay="900">
                        <NavIcon icon={<FiGithub />} url={'https://github.com/longdev09'} />
                        <NavIcon icon={<SlSocialFacebook />} url={'https://www.facebook.com/long.dev.09'} />
                        <NavIcon
                            icon={<SlSocialLinkedin />}
                            url={'https://www.linkedin.com/in/nguy%E1%BB%85n-b%E1%BA%A1ch-long-814206318/'}
                        />
                    </div>
                </div>
                <div
                    className="relative inset-0 w-full lg:w-1/2 flex justify-end py-3 "
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-darkPurple to-lightPurple blur-3xl opacity-10 rounded-full"></div>
                    <div className="text-white relative inset-0 scale-[130%] sm:scale-[120%] md:scale-[123%] lg:scale-[130%] xl:scale-[110%]  ">
                        <Player src={gif} autoplay loop />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
