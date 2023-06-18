
import React from 'react';
import Provider from './Provider';
import Context from './Context';


const Agetns = () => {
  return <AgetnOne />
}

const AgetnOne = () => {
  return <AgetnTwo />
}

const AgetnTwo = () => {
  return <AgetnBond />
}

const AgetnBond = () => {
  return (
    <Context.Consumer>
      {
        (context) => (
          <>
            <h3>Agent Information</h3>
            <p>Mission name: {context.data.mname}</p>
            <h2>Mission Status: {context.data.accept}</h2>
            <button onClick={context.isMissonAccepted}>Choose to accept</button>
          </>
        )
      }
    </Context.Consumer>
  )
}


function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <Provider>
        <Agetns />
      </Provider>
    </div>
  );
}

export default App;
