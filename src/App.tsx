import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetComponent } from './Components/Helmet';

function App() {
  return (
    <Router>
      <HelmetComponent/>
      <Routes>
        <Route path='' element={<Main/>}/>
      </Routes>
      <ToastContainer limit={2} newestOnTop/>
    </Router>
  );
}

export default App;
