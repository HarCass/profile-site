import { useState } from 'react';

const Skills = () => {
    const [tab, setTab] =  useState("lang");

    const tabHandler = (tabName: string) => {
        setTab(tabName);
    }

    return <div className='pt-0 bg-slate-900 rounded text-center animate-fade-up animate-duration-1000 animate-delay-1000 h-[350px]'>
        <div>
            <button className='p-1 bg-slate-900 rounded-s-md md:text-2xl shadow-inner shadow-slate-400 hover:bg-slate-800' onClick={() => tabHandler("lang")}>Languages</button>
            <button className='p-1 bg-slate-900 md:text-2xl shadow-inner shadow-slate-400 hover:bg-slate-800' onClick={() => tabHandler("front")}>Frontend</button>
            <button className='p-1 bg-slate-900 rounded-e-md md:text-2xl shadow-inner shadow-slate-400 hover:bg-slate-800' onClick={() => tabHandler("back")}>Backend</button>
            <button className='p-1 bg-slate-900 rounded-e-md md:text-2xl shadow-inner shadow-slate-400 hover:bg-slate-800' onClick={() => tabHandler("test")}>Testing</button>
        </div>
        {tab === "lang" ? <Languages/> : tab === "front" ? <Frontend/> : tab === "back" ? <Backend/> : <Testing/>}
    </div>
}

const Languages = () => {
    return <ul className="animate-fade-up animate-duration-1000">
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/javascript.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>JavaScript</p>
        </li>
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/typescript.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>TypeScript</p>
        </li>
    </ul>
}

const Frontend = () => {
    return <ul className="animate-fade-up animate-duration-1000">
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/html.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>HTML</p>
        </li>
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/css.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>CSS</p>
        </li>
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/react.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>React</p>
        </li>
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/react-native.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>React Native</p>
        </li>
    </ul>
}

const Backend = () => {
    return <ul className="animate-fade-up animate-duration-1000">
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/nodejs.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>NodeJS</p>
        </li>
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/expressjs.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>ExpressJS</p>
        </li>
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/mongodb.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>MongoDB</p>
        </li>
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/postgresql.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>PostgresQL</p>
        </li>
    </ul>
}

const Testing = () => {
    return <ul className="animate-fade-up animate-duration-1000">
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/jest.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>Jest</p>
        </li>
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/mocha.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>Mocha</p>
        </li>
        <li className="mt-2">
            <img src="https://harcass.github.io/profile-site/logos/cypress.svg" className="h-10 inline"></img>
            <p className='ml-2 text-xl md:text-2xl inline'>Cypress</p>
        </li>
    </ul> 
}

export default Skills;