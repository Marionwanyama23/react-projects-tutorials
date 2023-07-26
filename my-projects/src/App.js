//import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello'
//import Message from './components/Message'
import Profile from './components/Profile'
import ClassProp from './components/ClassProps';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
     <Profile name = "Marion"/>
     <ClassProp message = "This is a prop in a class based component"/>
     <Counter/>
    </div>
  );
}

export default App;
