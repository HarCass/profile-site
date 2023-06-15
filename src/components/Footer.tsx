const Footer = () => {
    return <footer className="fixed left-0 bottom-0 w-full">
        <ul className="mb-1 text-3xl flex flex-row flex-wrap gap-10 justify-center">
            <li><a className="hover:text-white visited:text-slate-300" href="https://github.com/HarCass" target="_blank"><i className="fa fa-github"></i></a></li>
            <li><a className="hover:text-white" href="#start" ><i className="fa fa-chevron-up"></i></a></li>
            <li><a className="hover:text-white visited:text-slate-300" href="https://www.linkedin.com/in/harryjccass/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
        </ul>
    </footer>
}

export default Footer;
