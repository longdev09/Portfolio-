import { useState, useEffect } from 'react';

const Word = ['Hello Word!', "I'm a web developer", 'Great to see you here <3'];
const TYPING_SPEED = 100;
const ERASING_SPEED = 100;

function TextRun() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [checkTyping, setCheckTyping] = useState(true);
    const [indexWord, setIndexWord] = useState(0);

    // hàm đễ gõ chữ
    const handleText = () => {
        if (checkTyping) {
            //kiểm tra gõ
            if (index < Word[indexWord].length) {
                setText((prev) => prev + Word[indexWord][index]); // Cập nhật text
                setIndex((prev) => prev + 1); // Cập nhật index
            } else {
                setTimeout(() => setCheckTyping(!checkTyping), 2000);
            }
        } else {
            if (index > 0) {
                setText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            } else {
                setIndexWord((prev) => (prev + 1) % Word.length);
                setCheckTyping(!checkTyping);
            }
        }
    };

    useEffect(() => {
        const timeout = setTimeout(handleText, TYPING_SPEED);
        return () => clearTimeout(timeout); // Dọn dẹp timeout
    }, [index, text, checkTyping]);

    return (
        <div className="flex items-center h-8 pl-1" data-aos="fade-up" data-aos-delay="500">
            <span className="text-white text-lg md:text-xl font-medium">{text}</span>
            <span className="w-1 h-7 bg-slate-100 ml-1 bg-gradient-to-t from-darkPurple to-lightPurple"></span>
        </div>
    );
}

export default TextRun;
