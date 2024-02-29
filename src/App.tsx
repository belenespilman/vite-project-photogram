import {Routes, Route} from 'react-router-dom'
import "./globals.css"


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*public routes */}
        <Route path='/sign-in'/>



        {/*private routes */}
        <Route index/>

      </Routes>

    </main>
  )
}

export default App
