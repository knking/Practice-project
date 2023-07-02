
import 'bootstrap/dist/css/bootstrap.min.css'
import Task from './components/Task.jsx';
import './App.css'

function App() {
  return (
    <div className='main'>
      <div className='notes'>
      <h2>Add Your Note </h2>
      
      <Task/>
      </div>
      
    </div>
  );
}

export default App;