import { createContext, useState } from "react";
import Props from "../../@types/props";
import SectionContextType from "../../@types/sectionContext";

export const SectionContext = createContext<SectionContextType | null>(null);

export const SectionProvider: React.FC<Props> = ({children}) => {
    const [activeSection, setActiveSection] = useState<'about' | 'projects'>('about');
    return <SectionContext.Provider value={{activeSection, setActiveSection}}>{children}</SectionContext.Provider>
};