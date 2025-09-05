import Logo from '/src/assets/ui/web-icon.png'
import ThemeButton from './ThemeButton'
import Dropdown from './Dropdown'

type changeTheme = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ isDark, setIsDark } : changeTheme) {

    return (
        <div className={`h-auto w-full ${isDark? "text-[var(--bg-color)] bg-[var(--text-color)] border-b-1 border-[var(--bg-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)] border-b-1 border-[#CFD8DC]"} flex flex-row items-center justify-start gap-[calc(0.6vw+0.4rem)] p-[calc(0.6vw+0.4rem)] transition-colors delay-300`}>
            <img src={Logo} className={`h-[calc(1.6vw+1.4rem)] w-[calc(1.6vw+1.4rem)] cursor-pointer`}></img>
            <span className='text-[calc(1vw+0.6rem)] font-bold cursor-pointer'>Scrappy</span>
            <Dropdown isDark={isDark} title={`Why Scrappy?`} readContent={''}>
                <span className="w-full flex flex-row items-center justify-start text-[calc(0.6vw+0.4rem)] cursor-pointer border-b-1 border-[#CFD8DC] p-[calc(0.3vw+0.5rem)]">
                    <i className="fa-solid fa-globe mr-[calc(0.4vw+0.6rem)] text-[calc(0.6vw+0.4rem)]"></i>
                    Instant extract
                </span>
                <span className="w-full flex flex-row items-center justify-start text-[calc(0.6vw+0.4rem)] cursor-pointer border-b-1 border-[#CFD8DC] p-[calc(0.3vw+0.5rem)] ">
                    <i className="fa-solid fa-star mr-[calc(0.4vw+0.6rem)] text[calc(0.6vw+0.4rem)]"></i>
                    Easy readability
                </span>
                <span className="w-full flex flex-row items-center justify-start text-[calc(0.6vw+0.4rem)] cursor-pointer border-b-1 border-[#CFD8DC] p-[calc(0.3vw+0.5rem)] ">
                    <i className="fa-solid fa-code mr-[calc(0.4vw+0.6rem)] text-[calc(0.6vw+0.4rem)]"></i>
                    Developer-friendly
                </span>
                <span className="w-full flex flex-row items-center justify-start text-[calc(0.6vw+0.4rem)] cursor-pointer p-[calc(0.3vw+0.5rem)]">
                    <i className="fa-solid fa-bolt mr-[calc(0.4vw+0.6rem)] text-[calc(0.6vw+0.4rem)]"></i>
                    Lightweight & fast
                </span>
            </Dropdown>
            <Dropdown isDark={isDark} title={`Resources`} readContent={''}>
                <span className="w-full flex flex-row items-center justify-start text-[calc(0.6vw+0.4rem)] cursor-pointer border-b-1 border-[#CFD8DC] p-[calc(0.3vw+0.5rem)]">
                    <i className="fa-solid fa-up-right-from-square mr-[calc(0.4vw+0.6rem)] text-[calc(0.6vw+0.4rem)]"></i>
                    References
                </span>
                <span className="w-full flex flex-row items-center justify-start text-[calc(0.6vw+0.4rem)] cursor-pointer border-b-1 border-[#CFD8DC] p-[calc(0.3vw+0.5rem)] ">
                    <i className="fa-solid fa-up-right-from-square mr-[calc(0.4vw+0.6rem)] text-[calc(0.6vw+0.4rem)]"></i>
                    Integration
                </span>
                <span className="w-full flex flex-row items-center justify-start text-[calc(0.6vw+0.4rem)] cursor-pointer border-b-1 border-[#CFD8DC] p-[calc(0.3vw+0.5rem)] ">
                    <i className="fa-solid fa-up-right-from-square mr-[calc(0.4vw+0.6rem)] text-[calc(0.6vw+0.4rem)]"></i>
                    Use Cases
                </span>
                <span className="w-full flex flex-row items-center justify-start text-[calc(0.6vw+0.4rem)] cursor-pointer p-[calc(0.3vw+0.5rem)]">
                    <i className="fa-solid fa-up-right-from-square mr-[calc(0.4vw+0.6rem)] text-[calc(0.6vw+0.4rem)]"></i>
                    Help Center
                </span>
            </Dropdown>
            <ThemeButton isDark={isDark} setIsDark={setIsDark}/>
        </div>
    )
}

export default Header
