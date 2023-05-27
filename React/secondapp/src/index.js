import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const AppOne = ()=>(
  <div>
      Hello from App One component 
  </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App/>
  
);

//removing React.sctrictMode because useEffect are runng two time with this