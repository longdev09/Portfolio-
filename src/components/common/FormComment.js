import { IoImagesOutline } from 'react-icons/io5';
import { BsFillSendFill } from 'react-icons/bs';
import { useRef, useState, useEffect } from 'react';
import { database, ref, set, serverTimestamp } from '../../firebaseConfig';
import { push } from 'firebase/database';
import axios from 'axios';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { CiCircleRemove } from 'react-icons/ci';

function FormComment() {
    const [data, setData] = useState({});
    const file = useRef(null);
    const [fileImage, setFileImage] = useState('');
    const [fileCloud, setFileCloud] = useState('');
    const [loading, setLoading] = useState(false);
    const handleData = (key, value) => {
        setData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleFile = () => {
        file.current.click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const objectURL = URL.createObjectURL(file); // Tạo URL tạm thời
            setFileImage(objectURL);
            setFileCloud(file);
        }
    };
    const handleRemovePhoto = () => {
        setFileImage('');
    };

    const uploadToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'postfolio_v1'); // Thay "your_upload_preset" bằng preset của bạn
        formData.append('cloud_name', 'dfs2bnvhq');
        formData.append('folder', 'Postfolio/avata_comments');
        try {
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/dfs2bnvhq/image/upload', // Thay "your_cloud_name" bằng tên cloud của bạn
                formData,
            );
            // setImageUrl(response.data.secure_url); // Lưu URL của ảnh vào state
            setFileImage(null);
            setFileCloud(null);
            return response.data;
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    //tien hanh gui api vao firebase
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let url;
        if (fileCloud) {
            url = await uploadToCloudinary(fileCloud);
        } else {
            url = 'no_image';
        }
        await handleAddComment(data, url);
        setLoading(false);
    };

    // ghi comment vao fire base

    const handleAddComment = async (data, url) => {
        try {
            await set(push(ref(database, 'users-comments')), {
                name: data.name,
                message: data.message,
                image: url != 'no_image' ? url.url : url,
                timestamp: serverTimestamp(),
            });
            console.log('Thêm dữ liệu thành công');
            setData((prev) => ({
                ...prev,
                name: '',
                message: '',
                image: '',
            }));
        } catch (error) {
            console.error('Lỗi:', error);
        }
    };

    return (
        <form className="p-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
                <div data-aos="fade-up" data-aos-duration="1000" className="flex gap-2 flex-col">
                    <label className="flex items-center gap-1 font-semibold">
                        <span className="text-white">Name</span> <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        value={data.name}
                        onChange={(e) => handleData('name', e.target.value)}
                        placeholder="Enter your name"
                        className="focus:ring-2 focus:ring-[#622a79] placeholder:text-slate-400 text-white text-lg p-3
                         w-full rounded-xl bg-white/10 border border-[#ffffff1a] hover:hover:border-[#622a79] focus:outline-none"
                    />
                </div>

                <div data-aos="fade-up" data-aos-duration="1200" className="flex gap-2 flex-col mt-1">
                    <label className="flex items-center gap-1 font-semibold">
                        <span className="text-white">Message</span> <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        value={data.message}
                        onChange={(e) => handleData('message', e.target.value)}
                        rows={4}
                        placeholder="Write your message here..."
                        className="resize-none focus:ring-2 focus:ring-[#622a79] placeholder:text-slate-400 text-white text-lg 
                     p-3 w-full rounded-xl bg-white/10 border border-[#ffffff1a] hover:hover:border-[#622a79] focus:outline-none"
                    />
                </div>

                <div data-aos="fade-up" data-aos-duration="1400" className="flex gap-2 flex-col mt-1 ">
                    <label className="flex items-center gap-1 font-semibold">
                        <span className="text-white">Profile Photo </span>{' '}
                        <span className="text-gray-400">(optional)</span>
                    </label>
                    <div className="bg-white/10 border border-[#ffffff1a] p-3 rounded-xl flex flex-col justify-center gap-3 ">
                        <div className="relative inset-0 group">
                            {fileImage ? (
                                <div className="flex items-center flex-row gap-4">
                                    <img
                                        className="object-cover w-16 h-16 rounded-full border border-darkPurple"
                                        src={fileImage}
                                    />
                                    <div className="relative inset-0 group">
                                        <div className="absolute inset-0 bg-red-500 opacity-25 group-hover:opacity-30 rounded-3xl"></div>
                                        <button
                                            onClick={handleRemovePhoto}
                                            type="button"
                                            className="relative inset-0 cursor-pointer flex flex-row items-center px-3 py-2 gap-2 text-base  text-red-300  "
                                        >
                                            <span>
                                                <CiCircleRemove />
                                            </span>
                                            <span>Remove Photo</span>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <input onChange={handleFileChange} ref={file} type="file" className="hidden " />
                                    <div className="absolute z-10 inset-0 bg-[#c05ee8] opacity-20 group-hover:opacity-50 duration-300 rounded-xl"></div>
                                    <button
                                        type="button"
                                        onClick={handleFile}
                                        className="relative z-30 cursor-pointer flex items-center p-3  gap-2 justify-center w-full border rounded-xl border-dashed border-[#c05ee8] "
                                    >
                                        <IoImagesOutline className="text-[#c05ee8]" />
                                        <span className="font-semibold text-[#c05ee8]">Choose Profile Photo</span>
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="text-center text-gray-400 text-base font-semibold">Max file size: 5MB</div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="w-full">
                    <button
                        disabled={loading} // Vô hiệu hóa khi loading là true
                        type="submit"
                        className={`w-full hover:shadow-lg hover:shadow-lightPurple/20 duration-300 flex items-center gap-3 justify-center p-2 rounded-xl font-semibold text-white text-lg ${
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
                                <span>Posting.....</span>
                            </>
                        ) : (
                            <>
                                <span>
                                    <BsFillSendFill />
                                </span>
                                <span>Post Comment</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FormComment;
