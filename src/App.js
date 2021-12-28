import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import WebHard from './components/WebHard';
import WebHardUser from './components/WebHardUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/webhard" element={<WebHard />} />
          <Route path="/webhardUser" element={<WebHardUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
