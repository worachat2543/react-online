
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import './App.css';

function App() {
  return (
    <div className="logo">
      <Logo />
     <Header />
     <Footer title={"tni"} website="www.google.com" address="Bangkok" postcode={10310} isOpen={false}></Footer>
    </div>
  );
}

export default App;
