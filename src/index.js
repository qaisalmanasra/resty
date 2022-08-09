import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './app.js';

// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<Main />, rootElement);
import ReactDOM from "react-dom";

import App from "./app";
const rootElement = document.getElementById("root");
// either <div> or <App />
// ReactDOM.render(<div>hello</div>, rootEl);
// instead of having <div>hello</div> we gonna put the App.js it will be like (replace line 2 with this)
ReactDOM.render(<App />, rootElement);