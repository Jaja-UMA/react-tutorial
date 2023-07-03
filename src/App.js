import logo from './logo.svg';
import {List} from "./List";
import { useState } from 'react';
import './App.css';

function App() {
  const [descriotion,setDescription] = useState('クリック前の表示');

  const changeDescriontion= () =>{
    setDescription('クリック後の表示')
  }

  return (
    <div>
      {descriotion}{}
      <List title="まみむめも音楽"/>{/* */}
      <button onClick={changeDescriontion}>ボタン</button>
    </div>
  );
}

export default App;
