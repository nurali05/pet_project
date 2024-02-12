import './App.css';

import {Routes,Route}from 'react-router-dom'
import Exercises from './components/Exercises';
import Header from './components/Header';
import Todos from './components/Todos/index'
// import Header from './components/Exercises';
function App() {
  // functions
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Todos/>}/>
        <Route path='/about-us' element={<Exercises/>}/>
        <Route path='*' element={<Todos/>}/>
      </Routes>
    </div>
  );
}

export default App;
