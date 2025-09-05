import { useState } from "react";
import Overview from "./Overview";
import Start from "./Start";

type changeTheme = {
    isDark: boolean;
}

function Content({ isDark } : changeTheme) {

    const [isActive, setIsActive] = useState(true);

    const handleOverview = () => {
        setIsActive(true)
    }
     const handleStart = () => {
        setIsActive(false)
    }
    
    return(
        <div className={`h-auto max-w-[720px] w-full p-[calc(0.6vw+0.4rem)] ${isDark? "text-[var(--bg-color)] bg-[var(--text-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)]"} flex flex-col items-start justify-start gap-[calc(0.6vw+0.4rem)] transition-colors delay-300`}>
            <section id='creator' className='w-full p-[calc(0.6vw+0.4rem)] text-[calc(0.6vw+0.4rem)] font-600 flex flex-row items-center justify-start gap-[calc(0.6vw+0.4rem)] border-b-1 border-[#CFD8DC]'>
                <p className="text-[calc(0.6vw+0.4rem)] font-600 text-[#0071BC]">By Jutsy</p>
                <p className="text-[calc(0.6vw+0.4rem)] font-600 text-[#90A4AE]">September 5 2025</p>
                <div className="flex flex-row items-center justify-center ml-auto gap-[calc(0.6vw+0.4rem)]">
                    <i className="fa-brands fa-google text-[calc(0.8vw+0.6rem)] cursor-pointer"></i>
                    <i className="fa-brands fa-facebook text-[calc(0.8vw+0.6rem)] cursor-pointer"></i>
                    <i className="fa-brands fa-github text-[calc(0.8vw+0.6rem)] cursor-pointer"></i>
                </div>
            </section>
            <section id='title' className='w-full text-[calc(2.4vw+1.6rem)] p-[calc(0.6vw+0.4rem)] font-bold uppercase'>Website <br />Text Scraper</section>
            <section className={`w-full flex flex-row items-center justify-start gap-[calc(0.6vw+0.4rem)] p-[calc(0.6vw+0.4rem)] pb-0  border-b-2 border-[#CFD8DC]`}>
                <span className={`${isActive? "border-[#0071BC]" : "border-none"} text-[calc(0.4vw+0.6rem)] font-semibold cursor-pointer border-b-4 p-[calc(0.6vw+0.4rem)]`} onClick={handleOverview}>Overview</span>
                <span className={`${isActive? "border-none" : "border-[#0071BC]"} text-[calc(0.4vw+0.6rem)] font-semibold cursor-pointer border-b-4 p-[calc(0.6vw+0.4rem)]`} onClick={handleStart}>Start</span>
            </section>
            {isActive? <Overview isDark={isDark}/> : <Start isDark={isDark}/>}
        </div>
    )
}

export default Content
