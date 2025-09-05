import { useState } from 'react'
import '../styles/index.css'
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

function Landing() {

    const [isDark, setIsDark] = useState(false);

    return (
        <div className={`h-auto w-full ${isDark? "text-[var(--bg-color)] bg-[var(--text-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)]"} flex flex-col items-center justify-start transition-colors delay-300`}>
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <Content isDark={isDark}/>
            <Footer isDark={isDark}/>
        </div>
    )
}

export default Landing
