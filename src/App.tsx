import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './pages/Profile'

function App() {
  return (
    <section id='app' className='min-h-screen bg-fixed bg-auto bg-gradient-to-br from-slate-700 to-slate-900'>
      <Header/>
      <Profile/>
      <Footer/>
    </section>
  )
}

export default App
