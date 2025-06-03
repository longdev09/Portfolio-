import { FaCode } from 'react-icons/fa6';
import { SiLucide } from 'react-icons/si';
import { TbFileCv } from 'react-icons/tb';
import backend from '../../../assets/bg_item/backend-565fc01f.png';
import creator from '../../../assets/bg_item/creator-dbbffaec.png';
import mobile from '../../../assets/bg_item/mobile-896ef2f5.png';
import web from '../../../assets/bg_item/web-0d05165f.png';

import avata from '../../../assets/avata/avata2.jpg';

const ListItemSkills = [
    {
        name: 'Front-End',
        subName: 'Development',
        src: web,
        aos: 'fade-right',
    },
    {
        name: 'ReactJS',
        subName: 'Library',
        src: creator,
        aos: 'fade-up',
    },
    {
        name: 'Working ',
        subName: 'Restful api',
        src: mobile,
        aos: 'fade-up',
    },
    {
        name: 'Understanding',
        subName: 'Express.js',
        src: backend,
        aos: 'fade-left',
    },
];

function BtnCv() {
    return (
        <div className="flex-col lg:flex-row gap-4 flex mt-5" id="About">
            <button
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-lg rounded-lg font-medium
             text-white flex flex-row items-center justify-center bg-gradient-to-r from-darkPurple to-lightPurple px-7 py-3 gap-2"
            >
                <span>
                    <TbFileCv />
                </span>
                <span>Download CV</span>
            </button>
            <a
                href="#Postfolio"
                data-aos="fade-up"
                data-aos-duration="1000"
                className="hover:bg-[#c15ee819] justify-center duration-300 text-lg rounded-lg font-medium
             text-white flex flex-row items-center border-lightPurple border px-7 py-3 gap-2"
            >
                <span className="text-lightPurple">
                    <FaCode />
                </span>
                <span className="text-lightPurple">View Projects</span>
            </a>
        </div>
    );
}

function Avatar() {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-full lg:w-1/2 flex justify-center lg:justify-end  "
        >
            <div className="relative inset-0 p-8 group">
                <div className="absolute rounded-full  inset-0  bg-gradient-to-r from-darkPurple to-lightPurple  opacity-40 blur-2xl"></div>
                <div className="relative z-40 w-80 h-80 inset-0 rounded-full overflow-hidden hover:scale-110 duration-500 ">
                    <div className="absolute z-20 inset-0 border-[#7b7979] transition-all group-hover:border-0 rounded-full border-4"></div>
                    <img
                        className=" object-cover opacity-75 w-full h-full group-hover:scale-110 duration-500 group-hover:rotate-2 transition-all"
                        src={avata}
                    />

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                        <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Content() {
    return (
        <div className="pt-14 w-full h-full">
            <div className="flex flex-col-reverse lg:flex-row gap-10 items-center ">
                <div className="flex flex-col  text-center lg:text-left font-bold gap-3 w-full lg:w-1/2 text-3xl sm:text-4xl lg:text-5xl">
                    <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col gap-4">
                        <span className=" bg-gradient-to-r from-darkPurple to-lightPurple bg-clip-text text-transparent">
                            Hello, I'm
                        </span>
                        <span data-aos="fade-right" data-aos-duration="1300" className="text-white">
                            Nguyễn Bạch Long
                        </span>
                    </div>

                    <p
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        className="text-gray-400 text-lg text-justify mt-5"
                    >
                        As a fresher front-end developer, I have a solid foundation in JavaScript and TypeScript, with
                        experience in building dynamic user interfaces using React.js. Additionally, I have basic
                        knowledge of backend development with Express.js, allowing me to work efficiently with APIs and
                        server-side logic. I’m eager to learn, adapt, and collaborate to create smooth and user-friendly
                        web experiences!
                    </p>
                    <BtnCv />
                </div>

                <Avatar />
            </div>
        </div>
    );
}

function ItemSkill({ img, name, subName, aos }) {
    return (
        <div data-aos={aos} data-aos-duration="1300" className="w-full">
            <div
                className="bg-[#1e293b60] rounded-xl border border-[#ffffff1a] w-full 
        overflow-hidden group hover:scale-105 duration-300 cursor-pointer hover:shadow-2xl relative inset-0"
            >
                <div className="absolute inset-0 group-hover:bg-gradient-to-r from-darkPurple to-lightPurple group-hover:opacity-20"></div>
                <div className="flex flex-col items-center gap-2 p-4">
                    <div className="relative w-28 h-28 p-4">
                        <img className="w-full h-full" src={img} />
                    </div>
                    <div className="font-bold text-2xl md:text-xl lg:text-2xl text-slate-300 text-center leading-9">
                        <div data-aos="fade-up" data-aos-duration="800" data-aos-anchor-placement="top-bottom">
                            {name}
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                            {subName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function About() {
    return (
        <div className="overflow-hidden bg-[#030014]" id="About">
            <div className="px-4 container mx-auto mt-24 relative z-40 pb-5">
                <div className="flex flex-col items-center justify-center">
                    <h2
                        data-aos="zoom-in-up"
                        data-aos-duration="600"
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-darkPurple to-lightPurple bg-clip-text text-transparent"
                    >
                        About Me
                    </h2>
                    <div
                        className="text-darkPurple flex items-center gap-2 mt-3 text-xl"
                        data-aos="zoom-in-up"
                        data-aos-duration="800"
                    >
                        <span>
                            <SiLucide />
                        </span>
                        <span className="text-gray-400 text-sm sm:text-lg text-center ">
                            Transforming creativity into interactive designs
                        </span>
                        <span>
                            <SiLucide />
                        </span>
                    </div>
                </div>

                <Content />

                <div className="mt-10 flex flex-col md:flex-row gap-5">
                    {ListItemSkills.map((item) => (
                        <ItemSkill img={item.src} name={item.name} subName={item.subName} aos={item.aos} />
                    ))}
                </div>
            </div>
            {/* my skill */}
        </div>
    );
}

export default About;
