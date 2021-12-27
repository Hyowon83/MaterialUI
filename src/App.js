import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
