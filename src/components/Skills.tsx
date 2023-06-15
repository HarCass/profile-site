import { useState } from 'react';
import {SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiCss3} from 'react-icons/si';

const Skills = () => {
    const [tab, setTab] =  useState("lang");

    const tabHandler = (tabName: string) => {
        setTab(tabName);
    }

    return <div className='p-1 pt-0 bg-slate-900 rounded text-center animate-fade-up animate-duration-1000 animate-delay-1000 h-[350px]'>
        <div>
            <button className='p-1 bg-slate-900 rounded-s-md md:text-2xl shadow-inner shadow-slate-400 hover:bg-slate-800' onClick={() => tabHandler("lang")}>Languages</button>
            <button className='p-1 bg-slate-900 md:text-2xl shadow-inner shadow-slate-400 hover:bg-slate-800' onClick={() => tabHandler("front")}>Frontend</button>
            <button className='p-1 bg-slate-900 rounded-e-md md:text-2xl shadow-inner shadow-slate-400 hover:bg-slate-800' onClick={() => tabHandler("back")}>Backend</button>
        </div>
        {tab === "lang" ? <Languages/> : tab === "front" ? <Frontend/> : <Backend/>}
    </div>
}

const Languages = () => {
    return <ul className="animate-fade-up animate-duration-1000">
        <li>
            <SiJavascript className="rounded-sm text-4xl inline" style={{color: "#ffd500"}}/>
            <p className='text-xl md:text-2xl inline'>JavaScript</p>
        </li>
        <li>
            <SiTypescript className="text-4xl inline" style={{color: "deepskyblue"}}/>
            <p className='text-xl md:text-2xl inline'>TypeScript</p>
        </li>
    </ul>
}

const Frontend = () => {
    return <ul className="animate-fade-up animate-duration-1000">
        <li>
            <SiHtml5 className='text-4xl' style={{color: "#ed461d"}}/>
            <p className='text-xl md:text-2xl inline'>HTML</p>
        </li>
        <li>
            <SiCss3 className='text-4xl' style={{color: "#2bb7fd"}}/>
            <p className='text-xl md:text-2xl inline'>CSS</p>
        </li>
        <li>
            <SiReact className='text-4xl' style={{color: "#2edcff"}}/>
            <p className='text-xl md:text-2xl inline'>React</p>
        </li>
    </ul>
}

const Backend = () => {
    return <ul className="animate-fade-up animate-duration-1000">
        <li>
            <SiNodedotjs className='text-4xl' style={{color: "#2f8f2d"}}/>
            <p className='text-xl md:text-2xl inline'>NodeJS</p>
        </li>
        <li>
            <SiExpress className='text-4xl'/>
            <p className='text-xl md:text-2xl inline'>ExpressJS</p>
        </li>
        <li>
            <SiMongodb className='text-4xl' style={{color: "lawngreen"}}/>
            <p className='text-xl md:text-2xl inline'>MongoDB</p>
        </li>
        <li>
            <SiPostgresql className="text-4xl rounded-sm p-1" style={{backgroundColor: "cornflowerblue"}}/>
            <p className='text-xl md:text-2xl inline'>PostgresQL</p>
        </li>
    </ul>
}

export default Skills;