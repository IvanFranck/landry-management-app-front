import { NavMobile } from "./components/NavMobile"
import { CommandsList } from "./pages/CommandsList"

function App() {

  return (
    <div className="w-full min-h-screen bg-slate-200 relative">
      <NavMobile />
      <div className="w-full">
        <CommandsList />
      </div>
    </div>
  )
}

export default App
