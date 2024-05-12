import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Encryption from './pages/Encryption';
import Navbar from './components/Navbar';
import DecryptionBox from './components/Decryptionbox';

function App() {
  return (
    <div className="App">
     <Navbar />
     <DecryptionBox />
    </div>
  );
}

export default App;
