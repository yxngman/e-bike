import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Herosection from './components/HeroSection/Herosection'
import FeaturesSection from './components/Features/Features'
import BestSeller from './components/BestSeller/BestSeller'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative h-full'>
      <Navbar />
      <Herosection />
      <FeaturesSection />
      <BestSeller />
    </div>
  )
}

export default App
