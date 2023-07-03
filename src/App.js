import logo from './logo.svg';
import {List} from "./List";
import { useState } from 'react';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {description :'あいうえお'}
  }
  changeDescription(){
    this.setState({
      description:'あかさたな'
    })
  }


  render(){
    const {description}=this.state
    return(
      <div>
        {description}
        <List title="アバレンジャー一覧" />
        <button onClick={()=> this.changeDescription()}>不支持ボックス</button>
      </div>
    );
  }
}

export default App;
