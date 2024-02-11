import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Music from './components/Music';
import Chat from './components/Chat'
import Home from './components/Home'
import Movie from './components/Movie';
import Room from './components/Room'
import Footer from './components/Footer'
function App() {
  return (
   <>
    <Navbar/>
      <div>
    <Routes>        
      <Route path="/"  element={<Home />} />
      <Route path="/chat"  element={<Chat />}/>
      <Route path="/music"  element={<Music/>}/>
      <Route path="/movie"  element={<Movie/>}/>
      <Route path="/room"  element={<Room/>}/>
    </Routes>
    </div>
 <Footer/>
    </>
   
  );
}

export default App;