import { useState } from 'react';

type changeTheme = {
    isDark: boolean;
}

type content = {
    readContent: string;
    title: string; 
    children?: React.ReactNode;
};

type allProps = changeTheme & content;

function Dropdown({isDark, readContent, title, children}: allProps) {

    const [isVisible, setIsVisible] = useState(false);

    const handleHover = () => {
        setIsVisible(true);
    }

    const handleMouseLeave = () => {
        setIsVisible(false);
    }

    return (
        <div className={`h-auto w-auto flex flex-col items-start justify-start`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            <div className="font-semibold flex flex-row items-center justify-center gap-[calc(0.2vw+0.3rem)] cursor-pointer ml-[calc(0.4vw+0.6rem)]">
                <p className="text-[calc(0.6vw+0.4rem)]">{title}</p>
                <i className="fa-solid fa-chevron-down text-[calc(0.6vw+0.4rem)]"></i>
            </div>
            {isVisible && <div className={`${isDark? "bg-[var(--text-color)] text-[var(--bg-color)]" : "bg-[var(--bg-color)] text-[var(--text-color)]"} max-w-[calc(12vw+10rem)] flex flex-col items-start justify-start absolute mt-[calc(0.6vw+0.8rem)] shadow-lg`}>
                {children ?? readContent}
            </div>}
        </div>
    )
}

export default Dropdown
