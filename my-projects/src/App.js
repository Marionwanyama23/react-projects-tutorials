//import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello'
//import Message from './components/Message'
import Profile from './components/Profile'
import ClassProp from './components/ClassProps';

function App() {
  return (
    <div className="App">
     <Profile name = "Marion"/>
     <ClassProp message = "This is a prop in a class based component"/>
    </div>
  );
}

export default App;
