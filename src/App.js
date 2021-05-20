import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './pages/Dashboard';
import attendeeData from './data/attendee.json';

function App() {
  localStorage.setItem("attendeeData", JSON.stringify(attendeeData));
  return <Dashboard/>
}

export default App;
