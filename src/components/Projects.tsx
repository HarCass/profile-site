const Projects = () => {
    return <div id="projects" className="m-2 mb-0">
        <ul className="flex flex-col gap-5 mb-0 items-center">
            <li className="flex justify-center items-center columns-2 text-center gap-5 animate-fade-right animate-duration-700 animate-delay-500 w-fit">
                <img src="https://harcass.github.io/profile-site/ncnews.jpg" className="h-1/2 w-1/2 md:h-1/3 md:w-1/3 rounded"/>
                <div className="w-1/2 md:w-1/4">
                    <a className="hover:text-white hover:underline visited:text-slate-300 text-xl md:text-4xl" href="https://hc-nc-news.netlify.app/">NC News</a>
                    <p className="md:text-2xl">A news website that allows users to post and view articles of various topics, as well as comment on and like the articles. This project was part of the Northcoders Bootcamp. The backend is a RESTful API and was created using Express and PostgresQL. The frontend was designed using React and Axios.</p>
                    <br></br>
                    <a className="hover:text-white visited:text-slate-300 text-xl md:text-4xl" href="https://github.com/HarCass/nc-news-site" target="_blank"><i className="fa fa-github"></i></a>
                </div>
            </li>
            <li className="flex justify-center columns-2 text-center gap-5 animate-fade-right animate-duration-700 animate-delay-700 mb-10">
                <img src="https://harcass.github.io/profile-site/purrviews.jpg" className="h-1/4 w-1/4 md:h-1/6 md:w-1/6 rounded"/>
                <div className="w-1/2 md:w-1/4">
                    <h2 className="text-xl md:text-4xl">Purrviews</h2>
                    <p className="md:text-2xl">A an app that lets users share pictures of local cats and chat together, as well as setup their own cat profiles and report them missing. This app used the MERN stack with React Native.</p>
                    <br></br>
                    <a className="hover:text-white visited:text-slate-300 text-xl md:text-4xl" href="https://github.com/ElenaCKay/Purrviews-FE" target="_blank"><i className="fa fa-github"></i></a>
                </div>
            </li>
        </ul>
    </div>
}

export default Projects;