function ItemSkill({ img, name, aos, duration }) {
    return (
        <div
            data-aos={aos}
            data-aos-duration={duration}
            className="group overflow-hidden flex items-center justify-center w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] relative inset-0 rounded-xl py-6 px-10"
        >
            <div className="cardSkill opacity-0 group-hover:opacity-100 duration-200"></div>
            <div className="cardSkill2 opacity-0 group-hover:opacity-100 duration-200"></div>
            <div className="absolute bg-[#1e293b] duration-500  inset-1 rounded-xl flex justify-center items-center ">
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="w-[50px]  sm:w-[80px]">
                        <img className=" group-hover:scale-105 duration-300 object-cover w-full h-full" src={img} />
                    </div>
                    <div className="text-slate-300 font-bold text-sm sm:text-lg text-center">
                        <span>{name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemSkill;
