import { Outlet } from 'react-router-dom'
import Nav from "./components/Nav"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <>
    <Nav />
    <main className="mx-3">
      <Outlet />
    </main>
  </>
);
}

export default App;
