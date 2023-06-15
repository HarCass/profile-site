import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './pages/Profile'

function App() {
  return (
    <section id='app' className='min-h-screen bg-fixed bg-cover bg-gradient-to-br from-slate-900 to-slate-600'>
      <Header/>
      <Profile/>
      <Footer/>
    </section>
  )
}

export default App;
