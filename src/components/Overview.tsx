
type changeTheme = {
    isDark: boolean;
}

function Overview({ isDark } : changeTheme) {

    return(
        <div className={`h-auto max-w-[720px] w-full p-[calc(0.6vw+0.4rem)] ${isDark? "text-[var(--bg-color)] bg-[var(--text-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)]"} flex flex-col items-start justify-start gap-[calc(0.6vw+0.4rem)] transition-colors delay-300`}>
            <section className="flex flex-col items-start justify-start gap-[calc(0.6vw+0.4rem)]">
                <span className="text-[calc(1vw+0.6rem)] font-bold">Overview</span>
                <p className="text-[calc(0.6vw+0.4rem)]">Scrappy is a lightweight web scraper built in React designed to extract textual information from websites. Its main goal is to allow users to gather structured text content from any publicly accessible web page for analysis, research, or data collection.</p>
            </section>
            <section className="flex flex-col items-start justify-start gap-[calc(0.6vw+0.4rem)]">
                <span className="text-[calc(1vw+0.6rem)] font-bold">Why use it?</span>
                <ul className="list-disc pl-5 text-[calc(0.6vw+0.4rem)]">
                    <li>Saves time when collecting information across multiple sites.</li>
                    <li>Useful for research, content analysis, and data aggregation.</li>
                    <li>Helps developers quickly integrate external website content into their apps.</li>
                </ul>
            </section>
            <section className="flex flex-col items-start justify-start gap-[calc(0.6vw+0.4rem)]">
                <span className="text-[calc(1vw+0.6rem)] font-bold">Key Features</span>
                <span className="text-[calc(0.8vw+0.4rem)] font-bold">Text Extraction</span>
                <ul className="list-disc pl-5 text-[calc(0.6vw+0.4rem)]">
                    <li>Scrapes all visible text content from a webpage.</li>
                    <li>{`Can optionally target specific HTML elements like <p>, <h1>, <h2>, <div>, or <span>.`}</li>
                </ul>
                <span className="text-[calc(0.8vw+0.4rem)] font-bold">User Input</span>
                <ul className="list-disc pl-5 text-[calc(0.6vw+0.4rem)]">
                    <li>Accepts a URL as input.</li>
                    <li>Optionally, allows filtering by CSS selectors for more precise scraping.</li>
                </ul>
                <span className="text-[calc(0.8vw+0.4rem)] font-bold">Output</span>
                <ul className="list-disc pl-5 text-[calc(0.6vw+0.4rem)]">
                    <li>Displays extracted text in a readable format.</li>
                    <li>Supports export options (e.g., copy to clipboard, download as .txt or .json).</li>
                </ul>
                <span className="text-[calc(0.8vw+0.4rem)] font-bold">Lightweight & Fast</span>
                <ul className="list-disc pl-5 text-[calc(0.6vw+0.4rem)]">
                    <li>Minimal dependencies.</li>
                    <li>Designed to fetch only the text content, avoiding unnecessary HTML, CSS, or JavaScript.</li>
                </ul>
                <span className="text-[calc(1vw+0.6rem)] font-bold">Core Components</span>
                <span className="text-[calc(0.8vw+0.4rem)] font-bold">Input Form</span>
                <ul className="list-disc pl-5 text-[calc(0.6vw+0.4rem)]">
                    <li>Users enter a website URL and optional selectors.</li>
                </ul>
                <span className="text-[calc(0.8vw+0.4rem)] font-bold">Fetch & Parse</span>
                <ul className="list-disc pl-5 text-[calc(0.6vw+0.4rem)]">
                    <li>{`Uses fetch() or axios to get the page HTML.`}</li>
                    <li>Uses DOMParser or a lightweight library to extract text.</li>
                </ul>
                <span className="text-[calc(0.8vw+0.4rem)] font-bold">Display Results</span>
                <ul className="list-disc pl-5 text-[calc(0.6vw+0.4rem)]">
                    <li>Shows the scraped content in a scrollable container.</li>
                    <li>Optional filtering or cleaning (e.g., removing scripts, ads, or repeated text).</li>
                </ul>

            </section>
        </div>
    )
}

export default Overview
