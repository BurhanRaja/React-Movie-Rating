import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import './App.css';
import ReactRouter from './ReactRouter';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <ReactRouter />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
