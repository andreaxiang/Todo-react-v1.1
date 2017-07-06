import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './Welcome.js';//引入一个独立的组件
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Welcome name="Andrea"/>,
  document.getElementById('root')
);














/*//按需更新
function tick(){
  let element = (
    <div>
      <h1>Hello World</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);*/

registerServiceWorker();
