function InputField({ aos, delay, required, onChange, isTextArea = false, icon, placeholder, type, value }) {
    return (
        <div data-aos={aos} data-aos-delay={delay} className="relative inset-0 group ">
            <div className="absolute left-4 top-[21px] text-lg text-slate-400 group-focus-within:text-lightPurple">
                {icon}
            </div>

            {isTextArea ? (
                <textarea
                    value={value}
                    required={required}
                    onChange={onChange}
                    rows="5"
                    className=" resize-none focus:ring-2 focus:ring-[#622a79] placeholder:text-slate-400 text-white text-lg 
                     pr-5 py-4 pl-12 w-full rounded-xl bg-white/10 border border-[#ffffff1a] hover:hover:border-[#622a79] focus:outline-none"
                    placeholder={placeholder}
                />
            ) : (
                <input
                    value={value}
                    type={type}
                    required={required}
                    onChange={onChange}
                    className="focus:ring-2 focus:ring-[#622a79] placeholder:text-slate-400 text-white text-lg  pr-5 py-4 pl-12 w-full rounded-xl bg-white/10 border border-[#ffffff1a] hover:hover:border-[#622a79] focus:outline-none"
                    placeholder={placeholder}
                />
            )}
        </div>
    );
}
export default InputField;
