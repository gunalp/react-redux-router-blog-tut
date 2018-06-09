import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

//import App from './components/app'; giriş noktası bu app değil o yüzden component da kaldırıldı.
import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));



/* router test etmek ve öğrenmek için yazıldı
class Hello extends React.Component {
  render(){ return<div>Hello!</div>}
}
class Goodbye extends React.Component {
  render(){ return<div>Goodbye!</div>}
}

// div içinde olmazsa hata veriyor.
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        Header
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
*/

/* Roter eklemeden önceki hali
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
*/
