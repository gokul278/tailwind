import './App.css'
import { TailwindCss } from './Components/TailwindCss/TailwindCss'

function App() {

  return (
    <>
      <div className="w-[100%]" align="center">
        <div className="w-[90%] flex justify-center gap-x-10" align="center">
          <div className="w-[100%] lg:w-[50%] bg-[#F5F7F8]">
            <TailwindCss />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
