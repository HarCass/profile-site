import About from "../components/About";
import { useContext } from 'react';
import { SectionContext } from "../utils/contexts/sectionContext";
import SectionContextType from "../@types/sectionContext";
import Projects from "../components/Projects";

const Profile = () => {
    const { activeSection } = useContext(SectionContext) as SectionContextType;
    if (activeSection === 'about') return <div className="w-full h-1/4">
        <About></About>
    </div>;
    if(activeSection === 'projects') return <div className="w-full h-1/4">
    <Projects></Projects>
    </div>;
    return null;
}

export default Profile;
