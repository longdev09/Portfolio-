import * as React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6';

function CartProject({ aos, aosDuraton, img, title, describe, linkDemo, linkGit }) {
    return (
        <div
            data-aos={aos}
            data-aos-duration={aosDuraton}
            className="w-full bg-[#27185386] border border-[#ffffff1a] rounded-xl duration-300 group hover:border-[#622a79] cursor-pointer"
        >
            <div className="p-5 relative inset-0 ">
                <div className="overflow-hidden rounded-xl">
                    <div className="relative pb-[55%] inset-0 ">
                        <img
                            className="absolute inset-0 w-full object-cover rounded-xl hover:scale-105 duration-300"
                            src={img}
                        />
                    </div>
                </div>

                <div className="mt-3 flex flex-col gap-3 ">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                        {title}
                    </h3>
                    <p className="text-gray-300  text-sm leading-relaxed line-clamp-2">{describe}</p>
                    <div className="flex flex-row justify-between mt-4">
                        <a
                            href={linkDemo}
                            className="flex flex-row items-center gap-2 text-lightPurple text-sm font-bold cursor-pointer hover:text-[#cd86ea] duration-300"
                        >
                            {/* <span>Live Demo</span>
                            <span>
                                <FaArrowUpRightFromSquare />
                            </span> */}
                        </a>
                        <div className="flex items-center flex-row gap-3">
                            {/* <button className="flex flex-row items-center font-semibold rounded-md text-sm px-4 py-2 gap-2 text-white bg-[#252563d5] hover:scale-105 duration-300">
                                <span>Details</span>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </button> */}

                            <a href={linkGit} title="Github" className="text-white text-2xl cursor-pointer">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProject;
