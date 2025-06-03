import { useEffect, useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { database, onValue, ref } from '../../firebaseConfig';

const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const now = new Date();
    const diffMinutes = Math.floor((now - date) / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(date);
};

function ItemComment({ avata, name, message, time }) {
    return (
        <div className="bg-white/10 border border-[#ffffff1a] rounded-xl">
            <div className="px-4 py-3">
                <div className="flex gap-3 items-start">
                    {avata != 'no_image' ? (
                        <img className="object-cover w-12 h-12 rounded-full border border-darkPurple" src={avata} />
                    ) : (
                        <div className="p-3 bg-[#6940e42f] rounded-full">
                            <span className="text-2xl text-darkPurple">
                                <RxAvatar />
                            </span>
                        </div>
                    )}

                    <div></div>
                    <div className="flex flex-col gap-1 w-full">
                        <div className="flex items-center justify-between">
                            <span className="text-white font-semibold ">{name}</span>
                            <span className="text-gray-400 font-semibold text-sm">{formatDate(time)}</span>
                        </div>

                        <p className="text-gray-400 text-sm ">{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ListComment({ data }) {
    return (
        <div data-aos="fade-up" data-aos-duration="200" className="px-6 pb-6">
            <div className="h-[340px] overflow-auto">
                <div className="flex gap-3 flex-col">
                    {data &&
                        [...data]
                            .reverse()
                            .map((item, index) => (
                                <ItemComment
                                    key={index}
                                    name={item.name}
                                    message={item.message}
                                    avata={item.image}
                                    time={item.timestamp}
                                />
                            ))}
                </div>
            </div>
        </div>
    );
}
export default ListComment;
