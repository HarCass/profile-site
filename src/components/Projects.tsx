const Projects = () => {
    return <div id="projects" className="m-2">
        <ul className="flex flex-col gap-2 mb-10 items-center">
            <li className="flex flex-col items-center border-2 border-solid border-slate-300 rounded-md p-1 animate-fade-right animate-duration-700 animate-delay-500">
                <img src="/ncnews.jpg" className="h-3/4 w-3/4 rounded"/>
                <a className="hover:text-white hover:underline visited:text-slate-300" href="https://hc-nc-news.netlify.app/">NC News</a>
                <p>A news website</p>
                <a className="hover:text-white visited:text-slate-300" href="https://github.com/HarCass/nc-news-site" target="_blank"><i className="fa fa-github"></i></a>
            </li>
            <li className="flex flex-col items-center border-2 border-solid border-slate-300 rounded-md p-1 animate-fade-right animate-duration-700 animate-delay-700">
                <img src="/purrviews.jpg" className="h-1/2 w-1/2 md:h-1/5 md:w-1/5 rounded"/>
                <h2>Purrviews</h2>
                <p>A an app to discover local cats</p>
                <a className="hover:text-white visited:text-slate-300" href="https://github.com/ElenaCKay/Purrviews-FE" target="_blank"><i className="fa fa-github"></i></a>
            </li>
        </ul>
    </div>
}

export default Projects;