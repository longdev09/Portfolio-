import emailjs from 'emailjs-com';
import { useState } from 'react';
import { BsFillSendFill } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import InputField from './InPutField';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const InPutGetInTouch = [
    { icon: <FaRegUser />, placeholder: 'Your Name', key: 'name', aos: 'fade-up', delay: '200' },
    { icon: <MdOutlineEmail />, placeholder: 'Your Email', key: 'email', types: 'email', aos: 'fade-up', delay: '300' },
    {
        icon: <FaRegMessage />,
        placeholder: 'Your Message',
        type: true /*true  = isTextArea , null or false : input  */,
        key: 'message',
        aos: 'fade-up',
        delay: '400',
    },
];

function FormEmail() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleValue = (key, value) => {
        setData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const sendEmail = async () => {
        try {
            setLoading(true);
            const check = await emailjs.send(
                'service_4wmtyru', // Thay bằng Service ID
                'template_qvg1a9p',
                data,
                '7V5shEm-ZVRB468Ts', // Thay bằng Public Key
            );
            if (check) {
                console.log('Email sent successfully!', check);
                setData((prev) => ({
                    ...prev,
                    name: '',
                    email: '',
                    message: '',
                }));
            }
            setLoading(false);
        } catch (error) {
            console.log('Failed to send email:', error);
        }
    };
    const handleSumbit = (e) => {
        e.preventDefault();
        sendEmail();
    };

    return (
        <form onSubmit={handleSumbit} className="mt-5 w-full flex flex-col gap-5 tex">
            {InPutGetInTouch.map((item, index) => (
                <InputField
                    aos={item.aos}
                    delay={item.delay}
                    value={data[item.key]}
                    type={item.types}
                    key={index}
                    required={true}
                    onChange={(e) => handleValue(item.key, e.target.value)}
                    isTextArea={item.type}
                    icon={item.icon}
                    placeholder={item.placeholder}
                />
            ))}
            <div data-aos="fade-up" data-aos-delay="500" className="w-full">
                <button
                    disabled={loading} // Vô hiệu hóa khi loading là true
                    type="submit"
                    className={`w-full hover:shadow-lg hover:shadow-lightPurple/20 duration-300 flex items-center gap-3 justify-center p-4 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-darkPurple to-lightPurple ${
                        loading
                            ? 'bg-gradient-to-r from-darkPurple to-lightPurple opacity-50 cursor-not-allowed'
                            : 'bg-gradient-to-r from-darkPurple to-lightPurple'
                    }`}
                >
                    {loading ? (
                        <>
                            <span className="spin-icon">
                                <AiOutlineLoading3Quarters className="animate-spin" />
                            </span>
                            <span>Send.....</span>
                        </>
                    ) : (
                        <>
                            <span>
                                <BsFillSendFill />
                            </span>
                            <span>Send Message</span>
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}

export default FormEmail;
