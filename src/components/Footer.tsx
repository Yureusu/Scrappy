
type changeTheme = {
    isDark: boolean;
}

function Footer({ isDark } : changeTheme) {

    const handleCoffee = () => {
        window.open("https://www.starbucks.com/", "_blank");
    }


    return(
        <div className={`h-auto w-full p-[calc(0.8vw+0.6rem)] ${isDark? "text-[var(--bg-color)] bg-[var(--text-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)]"} 
            flex flex-row items-center justify-start gap-[calc(0.6vw+0.4rem)] transition-colors delay-300 border-t-1 border-[#CFD8DC]`}>
            <span className=" text-[calc(0.6vw+0.4rem)] cursor-pointer hover:text-[#0071BC]">Terms and conditions</span>
            <span className=" text-[calc(0.6vw+0.4rem)] cursor-pointer hover:text-[#0071BC]">Privacy Policies</span>
            <span className=" text-[calc(0.6vw+0.4rem)] cursor-pointer hover:text-[#0071BC]">Cookies</span>
            <div className="flex flex-row items-center justify-center gap-[calc(0.4vw+0.3rem)] hover:text-[#0071BC] cursor-pointer ml-auto" onClick={handleCoffee}>
                <span className=" text-[calc(0.6vw+0.4rem)]">Buy me a Coffee</span>
                <i className="fa-solid fa-mug-hot text-[calc(0.6vw+0.4rem)]"></i>
            </div>
        </div>
    )
}

export default Footer
