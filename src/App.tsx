import Navbar from './components/Navbar'
import WatchMovies from './sections/WatchMovies'
import WatchNow from './sections/WatchNow'
import GreatEntertainment from './sections/GreatEntertainment'
import Features from './sections/Features'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <WatchMovies />
      <WatchNow />
      <GreatEntertainment />
      <Features />
      <Footer />
    </div>
  )
}

export default App