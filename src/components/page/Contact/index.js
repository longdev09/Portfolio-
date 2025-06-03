import { useEffect, useState } from 'react';
import { FiMessageCircle, FiShare2 } from 'react-icons/fi';
import FormComment from '../../common/FormComment';
import FormEmail from '../../common/FormEmail';
import ListComment from '../../common/ListComment';
import SocialLink from '../../common/SocialLink';
import { database, onValue, ref } from '../../../firebaseConfig';
function GetInTouch() {
    return (
        <div data-aos="fade-right" data-aos-duration="1200" className="w-full lg:w-[45%] 2xl:w-[35%]">
            <div className="flex flex-col p-6 bg-white/5 backdrop-blur-xl rounded-3xl gap-4">
                <div className="flex flex-row items-center justify-between">
                    <h2 className=" text-4xl font-bold text-darkPurple  ">Get in Touch</h2>
                    <span className="text-[#6366f1] text-4xl">
                        <FiShare2 />
                    </span>
                </div>
                <p className="text-slate-400 text-base">
                    Looking for a frontend developer? Let's connect and create something amazing!
                </p>

                <FormEmail />

                <div className=" mt-6 pt-6 border-t border-[#ffffff1a]">
                    <div className="bg-white/10 rounded-xl px-4 py-8">
                        <div className="flex items-center gap-1">
                            <div className="w-8 h-[4px] rounded-xl bg-gradient-to-r from-darkPurple to-lightPurple mr-2 "></div>
                            <h3 className="text-white text-xl font-semibold">Connect With Me</h3>
                        </div>

                        <SocialLink />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Comments() {
    const [data, setData] = useState();

    useEffect(() => {
        // Tạo reference đến đường dẫn trong database
        const dataRef = ref(database, 'users-comments'); // Đổi path thành đúng với database của bạn

        // Lắng nghe thay đổi trong database
        const unsubscribe = onValue(dataRef, (snapshot) => {
            const value = snapshot.val();
            setData(value && Object.values(value));
        });

        // Cleanup listener khi component unmount
        return () => unsubscribe();
    }, []);

    return (
        <div className="w-full lg:w-[55%] 2xl:w-[65%]">
            <div className=" p-6 bg-white/5 rounded-xl backdrop-blur-xl">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-xl"
                >
                    <div
                        data-aos="fade-down"
                        data-aos-duration="800"
                        className="flex items-center p-6 border-b border-[#ffffff1a] gap-3"
                    >
                        <div className="relative inset-0 p-2 ">
                            <div className="absolute inset-0 bg-darkPurple opacity-20 rounded-lg"></div>
                            <span className="text-darkPurple text-2xl">
                                <FiMessageCircle />
                            </span>
                        </div>

                        <span className="text-white text-2xl font-semibold">Comments</span>
                        <span className="text-darkPurple  text-2xl font-semibold">({data ? data.length : 0})</span>
                    </div>
                    <FormComment />

                    <ListComment data={data} />
                </div>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className="overflow-hidden bg-[#030014]" id="Contact">
            <div className="px-4 container mx-auto mt-24 relative z-40 pb-5">
                <div className="flex flex-col items-center justify-center">
                    <span
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-darkPurple to-lightPurple bg-clip-text text-transparent"
                    >
                        Contact Me
                    </span>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1100"
                        className="text-slate-400 max-w-2xl mx-auto  mt-4 text-center text-sm sm:text-lg"
                    >
                        Got a question? Send me a message, and I'll get back to you soon.
                    </p>
                </div>

                <div className="mt-12">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <GetInTouch />
                        <Comments />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
