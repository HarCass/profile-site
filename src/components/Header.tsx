const Header = () => {
    return <header id="start" className="m-0 flex flex-row justify-between items-baseline">
        <h1 className="text-xl ml-2 md:ml-10 w-1/4 md:text-4xl">HJCCass</h1>
        <ul className="flex flex-row h-full flex-wrap gap-3 text-center content-center text-sm mr-2 md:mr-10 md:text-2xl md:gap-10">
            <li className="cursor-pointer hover:underline"><a href="#about">About</a></li>
            <li className="cursor-pointer hover:underline"><a href="#projects">Projects</a></li>
        </ul>
    </header>
}

export default Header;
