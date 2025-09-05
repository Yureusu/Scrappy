import { useState, useRef } from "react";

type changeTheme = {
    isDark: boolean;
}

function Start({ isDark } : changeTheme) {

    const inputRef = useRef<HTMLInputElement>(null);
    const [link, setLink] = useState("");

    const handleSubmit = () => {
        if (inputRef.current) {
            setLink(inputRef.current.value);
            inputRef.current.value = ""; 
        }
    };

    return(
        <div className={`h-[100vh] max-w-[720px] w-full p-[calc(0.6vw+0.4rem)] ${isDark? "text-[var(--bg-color)] bg-[var(--text-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)]"} flex flex-col items-start justify-start gap-[calc(0.6vw+0.4rem)] transition-colors delay-300`}>
            <section className="flex flex-col items-start justify-start gap-[calc(0.6vw+0.4rem)]">
                <span className="text-[calc(1vw+0.6rem)] font-bold">Get Started</span>
                <p className="text-[calc(0.6vw+0.4rem)]">Enter a website URL:</p>
                <div className="h-auto w-full flex flex-row items-center justify-start my-[calc(0.4vw+0.2rem)]">
                    <input type="text" placeholder="Target Link" className={`w-full p-[calc(0.4vw+0.2rem)] text-[calc(0.6vw+0.4rem)] ${isDark? "border-2 border-[#ECEFF1] text-[#ECEFF1]" : "border-2 border-[#263238] text-[#263238]"} cursor-pointer outline-none flex-1`} 
                        ref={inputRef}
                        required></input>
                    <span title="Start" className={`h-full px-[calc(0.6vw+0.4rem)] ${isDark? "bg-[#ECEFF1]" : "bg-[#263238]"} cursor-pointer flex flex-row items-center justify-center`}
                        onClick={handleSubmit}>
                        <i className={`fa-solid fa-chevron-right ${isDark? "bg-[#ECEFF1] text-[#263238]" : "bg-[#263238] text-[#ECEFF1]"} text-[calc(0.6vw+0.4rem)]`}></i>
                    </span>
                </div>
                <div className="flex flex-row items-center justify-start gap-[calc(0.6vw+0.4rem)]">
                    <i className="fa-solid fa-triangle-exclamation text-[calc(0.6vw+0.4rem)]"></i>
                    <p className="text-[calc(0.6vw+0.4rem)]">{`Note: Our scraper only works with publicly available data and respects each website’s Terms of Service. Always use responsibly.`}</p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[calc(0.4vw+0.3rem)]">
                    <p className="text-[calc(0.6vw+0.4rem)] font-semibold">Given link:</p>
                    <p className="text-[calc(0.6vw+0.4rem)]">{link}</p>
                </div>
            </section>
        </div>
    )
}

export default Start
