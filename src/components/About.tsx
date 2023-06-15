import Skills from './Skills';

const About = () => {
    return <section id="about" className="w-full h-full flex flex-col items-center gap-2">
        <img src="https://harcass.github.io/profile-site/profile-pic.jpg" className="rounded-full w-1/3 md:w-1/4"></img>
        <p className="w-full text-center animate-fade-right animate-duration-1000 animate-delay-500 text-xl md:text-3xl">Hello 👋 my name is Harry and I code full-stack apps.</p>
        <Skills/>
        <div className='animate-fade-down animate-delay-1000'>
            <i className="fa fa-circle-arrow-down text-4xl mt-10 animate-bounce" style={{color: "#7dd3fc"}}></i>
        </div>
    </section>
}

export default About;