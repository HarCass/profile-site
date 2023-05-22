import {SiTypescript, SiExpress, SiMongodb, SiPostgresql} from 'react-icons/si';

const About = () => {
    return <section id="about" className="w-full h-full flex flex-col items-center gap-2">
        <img src="/profile-pic.jpg" className="rounded-full w-1/3"></img>
        <p className="w-full text-center animate-fade-right animate-duration-1000 animate-delay-500 md:text-xl">Hello 👋 my name is Harry and I code full-stack apps.</p>
        <ul className="flex flex-row gap-2 text-xl animate-fade-up animate-duration-1000 animate-delay-1000 md:mt-10 md:text-4xl">
            <li>
                <i className="fa-brands fa-js" style={{color: "#ffd500"}}></i>
            </li>
            <li className="flex items-center">
                <SiTypescript style={{color: "deepskyblue"}}/>
            </li>
            <li><i className="fa-brands fa-node-js" style={{color: "#2f8f2d"}}></i>
            </li>
            <li>
            <i className="fa-brands fa-html5" style={{color: "#ed461d"}}></i>
            </li>
            <li>
            <i className="fa-brands fa-css3-alt" style={{color: "#2bb7fd"}}></i>
            </li>
            <li>
            <i className="fa-brands fa-react" style={{color: "#2edcff"}}></i>
            </li>
            <li className="flex items-center">
                <SiExpress/>
            </li>
            <li className="flex items-center">
                <SiMongodb style={{color: "lawngreen"}}/>
            </li>
            <li className="flex items-center">
                <SiPostgresql className="rounded-sm" style={{backgroundColor: "cornflowerblue"}}/>
            </li>
        </ul>
        <ul className='flex flex-row gap-2 text-center text-sky-300 animate-fade-up animate-duration-1000 animate-delay-[1200ms]'>
            <li>
                <h2 className='text-lg underline underline-offset-2'>Languages</h2>
                <ul>
                    <li>
                        Javascript
                        <br />
                        Typescript
                    </li>
                </ul>
            </li>
            <li>
            <h2 className='text-lg underline underline-offset-2'>Frontend</h2>
                <ul>
                    <li>
                        HTML5
                        <br />
                        CSS3
                        <br />
                        React
                    </li>
                </ul>
            </li>
            <li>
            <h2 className='text-lg underline underline-offset-2'>Backend</h2>
                <ul>
                    <li>
                        Express
                        <br />
                        MongoDB
                        <br />
                        PSQL
                    </li>
                </ul>
            </li>
        </ul>
    </section>
}

export default About;