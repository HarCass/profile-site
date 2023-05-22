import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SectionProvider } from './utils/contexts/sectionContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SectionProvider>
    <App />
  </SectionProvider>
)
