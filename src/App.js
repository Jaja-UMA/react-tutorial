import logo from './logo.svg';
import {List} from "./List";
import { useState } from 'react';
import {Form} from "./Form"
import './App.css';

function App() {
  const[tab,setTab]=useState('list');

  return (
    <div>
      <header>
        <ul>
          <li onClick={()=> setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr />
      {}
      {
        tab === 'list' ? <List title="取り扱い言語"/>:<form />
      }
    </div>
  );
}

export default App;
