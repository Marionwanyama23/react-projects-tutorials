//import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello'
//import Message from './components/Message'
import Profile from './components/Profile'
import ClassProp from './components/ClassProps';
import Counter from './components/Counter';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
     <Profile firstName = "Marion" lastName = "Wanyama"/>
     <Resume name ="Marion Wanyama" age = "20" profession = "Software Engineer"/>
    </div>
  );
}

export default App;
