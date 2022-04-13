
import './App.css';
import About from './components/about';
import Header from './components/header';
import Currentskill from './components/currentskills';
import Project from './components/project';
import ContactUs from './components/contact';
function App() {
  return (
    <div className="App" >
    <Header></Header>
    <About></About>
    <Currentskill></Currentskill>
    <Project></Project>
     <ContactUs></ContactUs>
    </div>
  );
}

export default App;
