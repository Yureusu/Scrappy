import React from 'react'

type changeTheme = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

function ThemeButton({isDark, setIsDark} : changeTheme) {

    const handleTheme = () => {
        if(isDark == false){
        setIsDark(true)
        }
        else{
        setIsDark(false)
        }
    }

    return (
        <div className={`flex flex-col items-center justify-center cursor-pointer ml-auto rounded-full ${isDark? "bg-[var(--text-color)]" : "bg-[#CFD8DC]"} p-[calc(0.3vw+0.2rem)]`} onClick={handleTheme}>
            <i className={`${isDark? "fa-regular fa-moon" : "fa-solid fa-moon"} text-[calc(0.8vw+0.6rem)]`}></i>
        </div>
    )
}

export default ThemeButton
