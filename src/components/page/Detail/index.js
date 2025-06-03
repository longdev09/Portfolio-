import { IoIosArrowBack } from 'react-icons/io';
import { MdArrowForwardIos, MdExitToApp } from 'react-icons/md';

import { FaGithub } from 'react-icons/fa';

const SkillCard = ['Javascrip', 'Reactjs', 'Tailwind', 'Nodejs', 'Express'];

function CardSkill({ text }) {
    return (
        <div className="duration-300 h-7 bg-[#ffffff0d] hidden md:flex items-center p-4 rounded-full border-[#ffffff1a] border-2 hover:bg-[#ffffff1a]">
            <span className="text-white text-sm font-medium">{text}</span>
        </div>
    );
}

function Heading() {
    return (
        <div className="relative flex flex-row items-center gap-5 w-full">
            <div className="duration-300 bg-[#ffffff0d] flex items-center justify-center px-5 py-2 cursor-pointer rounded-lg border-[#ffffff1a] border-2 hover:bg-[#ffffff1a] gap-3">
                <span className="text-white text-sm font-medium">
                    <IoIosArrowBack />
                </span>
                <span className="text-white text-sm font-medium">Back</span>
            </div>

            <div className="flex flex-row items-center gap-2 text-base text-white/50">
                <span>Project</span>
                <span className="text-xs mt-[2px]">
                    <MdArrowForwardIos />
                </span>
                <span className="text-lg text-white font-bold">Zing Mp3</span>
            </div>
        </div>
    );
}

function Content() {
    return (
        <div className="relative mt-10 flex flex-row justify-between gap-6">
            <div className="w-[50%]">
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-darkPurple to-lightPurple bg-clip-text text-transparent">
                        Zing Mp3
                    </h1>
                    <div class="bg-gradient-to-r from-darkPurple to-lightPurple h-1 w-[100px] my-4 rounded-full"></div>
                    <p className="text-white/70 font-semibold">
                        Zing MP3 is a popular online music streaming platform that offers a seamless listening
                        experience with essential features such as playing music, switching tracks, organizing
                        playlists, and creating personalized playlists. With a user-friendly interface and a rich music
                        library, it allows users to enjoy their favorite songs anytime, anywhere.
                    </p>
                    <div className="bg-[#1310229d] px-3 py-3 rounded-xl flex flex-row w-full gap-2">
                        <div className="w-full">
                            <div
                                className={
                                    'border border-[#a18cd15d] bg-[#19192e]  cursor-pointer group hover:border-[#a18cd1] transition-all relative inset-0 duration-500 px-4 py-3 rounded-lg flex items-center justify-between'
                                }
                            >
                                <div className="flex flex-row items-center gap-3">
                                    <div className="p-2  relative inset-0 z-40">
                                        <div className={`absolute inset-0  opacity-20 rounded-lg bg-[#a18cd1]`}></div>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 640 512"
                                            class="MuiTab-iconWrapper MuiTab-icon"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`  text-white text-base font-bold`}>5</span>
                                        <span className={` text-gray-400 text-sm font-semibold`}>
                                            Total Technologies
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div
                                className={
                                    'border border-[#6a0dad6b] bg-[#19192e]  cursor-pointer group hover:border-[#6a0dad] transition-all relative inset-0 duration-500 px-4 py-3 rounded-lg flex items-center justify-between'
                                }
                            >
                                <div className="flex flex-row items-center gap-3">
                                    <div className="p-2  relative inset-0 z-40">
                                        <div className={`absolute inset-0  opacity-20 rounded-lg bg-[#6a0dad]`}></div>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            class="MuiTab-iconWrapper MuiTab-icon"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M11.063 1.456a1.749 1.749 0 0 1 1.874 0l8.383 5.316a1.751 1.751 0 0 1 0 2.956l-8.383 5.316a1.749 1.749 0 0 1-1.874 0L2.68 9.728a1.751 1.751 0 0 1 0-2.956Zm1.071 1.267a.25.25 0 0 0-.268 0L3.483 8.039a.25.25 0 0 0 0 .422l8.383 5.316a.25.25 0 0 0 .268 0l8.383-5.316a.25.25 0 0 0 0-.422Z"></path>
                                            <path d="M1.867 12.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z"></path>
                                            <path d="M1.867 16.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`  text-white text-base font-bold`}>5</span>
                                        <span className={` text-gray-400 text-sm font-semibold`}>Main Features</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LinkPro />

                    <div className="flex flex-wrap gap-3  justify-start">
                        {SkillCard.map((item, index) => (
                            <CardSkill key={index} text={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-[50%]">
                <div>Nguyen bach Long</div>
            </div>
        </div>
    );
}

function LinkPro() {
    return (
        <div className="flex flex-row gap-4">
            <a>
                <div className="relative group  cursor-pointer">
                    <div className="relative text-sm font-semibold text-white flex items-center py-3 px-3 justify-center gap-3 duration-300 z-20 bg-[#8158df43] rounded-lg border border-[#a18cd15d]">
                        <span>Live Demo</span>
                        <span className=" group-hover:-rotate-45 duration-300">
                            <MdExitToApp />
                        </span>
                    </div>
                </div>
            </a>

            <a>
                <div className="relative group  cursor-pointer">
                    <div className="relative text-sm font-semibold text-white flex items-center py-3 px-3 justify-center gap-3 duration-300 z-20 bg-[#6a0dad63] rounded-lg border border-[#6a0dad]">
                        <span>GitHub</span>
                        <span className=" group-hover:-rotate-45 duration-300">
                            <FaGithub />
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
}

function Detail() {
    return (
        <div className="bg-[#030014] overflow-hidden ">
            <div className="py-[70px] container mx-auto px-40 w-full flex  flex-col">
                <Heading />
                <Content />
            </div>
        </div>
    );
}

export default Detail;
