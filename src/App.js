import './styles/main.css';
import './styles/responsive.css'
import Header from './components/Header';
import RickAndMortyApp from './components/RickAndMortyApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />
      <div>
    <div className="squares1"></div>
    <div className="squares2"></div>
    <div className="squares3"></div>
    <div className="squares4"></div>
  </div>
      <RickAndMortyApp />
      <div>
    <div className="squares1"></div>
    <div className="squares2"></div>
    <div className="squares3"></div>
    <div className="squares4"></div>
  </div>
  <Footer />
    </div>
  );
}

export default App;
