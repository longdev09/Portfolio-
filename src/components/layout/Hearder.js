import { useEffect, useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';
const Items = [
    { id: 1, name: 'Home', to: 'Home' },
    { id: 2, name: 'About', to: 'About' },
    { id: 3, name: 'Postfolio', to: 'Postfolio' },
    { id: 4, name: 'Contact', to: 'Contact' },
];

function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [active, setActive] = useState('Home');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            // khi cuon
            const sections = Items.map((item) => {
                const id = document.getElementById(item.to);
                return {
                    to: item.to,
                    height: id.offsetHeight,
                    offset: id.offsetTop - 543,
                };
            });

            const scroll = window.scrollY;

            const isActive = sections.find((i) => scroll >= i.offset && scroll < i.height + i.offset);
            if (isActive) {
                setActive(isActive.to);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToElement = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(!isOpen);
    };

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={`w-full fixed z-50 transition-all duration-300  ${isOpen ? 'bg-[#030014]' : ''}  ${
                scrollY > 20 ? (isOpen ? 'bg-[#030014]' : 'bg-[#030014]/50 backdrop-blur-xl') : ''
            }`}
        >
            <div className="px-4 container mx-auto ">
                <div className=" flex flex-row items-center h-[var(--h-header)] justify-between">
                    <div className="text-white">
                        {/* logo */}
                        <a className="font-bold text-xl bg-gradient-to-r from-darkPurple to-lightPurple bg-clip-text text-transparent">
                            LongDev
                        </a>
                    </div>

                    {/* menu pc */}
                    <ul className="hidden md:flex flex-row justify-center text-white">
                        {Items.map((item, index) => (
                            <a
                                key={index}
                                onClick={() => scrollToElement(item.to)}
                                className={`flex p-2 cursor-pointer ml-5 item-menu relative ${
                                    active == item.to ? 'active' : ''
                                }`}
                            >
                                <li>
                                    <span
                                        className={`font-bold text-sm ${
                                            active == item.to
                                                ? 'bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-lightPurple'
                                                : ''
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                </li>
                            </a>
                        ))}
                    </ul>

                    {/* menu mobile */}
                    <button
                        onClick={handleOpenMenu}
                        className={`${
                            isOpen ? 'rotate-90 scale-125' : 'rotate-0 scale-100'
                        }  transition-transform duration-300 ease-in-out transform relative z-50 md:hidden`}
                    >
                        {isOpen ? (
                            <IoMdClose className="text-2xl font-bold text-white" />
                        ) : (
                            <LuMenu className="text-2xl font-bold text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* menu mobile */}

            <div
                className={`bg-[#030014] fixed inset-0 h-2/5 top-[60px] transition-all duration-300 md:hidden ${
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
                }`}
            >
                <ul className={`p-3 ${isOpen ? 'flex flex-col' : 'hidden'}`}>
                    {Items.map((item, index) => (
                        <a
                            key={index}
                            onClick={() => scrollToElement(item.to)}
                            className={`flex p-3  mt-2 cursor-pointer text-white`}
                        >
                            <span
                                className={`font-medium text-lg ${
                                    active == item.to
                                        ? 'bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-lightPurple'
                                        : ''
                                }`}
                            >
                                {item.name}
                            </span>
                        </a>
                    ))}
                </ul>
            </div>
            {/* <ul
                className={`bg-[#030014] fixed inset-0 flex flex-col justify-center text-white opacity-0 px-4 pb-16 h-full ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                {Items.map((item, index) => (
                    <a
                        key={index}
                        onClick={() => scrollToElement(item.to)}
                        className={`flex p-3  mt-2 cursor-pointer relative  `}
                    >
                        <li>
                            <span
                                className={`font-medium text-lg ${
                                    active == item.to
                                        ? 'bg-clip-text text-transparent bg-gradient-to-r from-darkPurple to-lightPurple'
                                        : ''
                                }`}
                            >
                                {item.name}
                            </span>
                        </li>
                    </a>
                ))}
            </ul> */}
        </header>
    );
}
export default Header;
