import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import WebHard from './components/WebHard';
import WebHardUser from './components/WebHardUser';
import UserInfo from './components/UserInfo';
import AdminInfo from './components/AdminInfo';

import UserListComponent from './components/user/UserListComponent';
import AddUserComponent from './components/user/AddUserComponent';
import EditUserComponent from './components/user/EditUserComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route exact path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/webhard" element={<WebHard />} />
          <Route path="/webhardUser" element={<WebHardUser />} />
          <Route path="/myInfo" element={<UserInfo />} />
          <Route path="/AdminInfo" element={<AdminInfo />} /> */}
          <Route path="/" element={<UserListComponent />} />
          <Route path="/users" element={<UserListComponent />} />
          <Route path="/add-user" element={<AddUserComponent />} />
          <Route path="/edit-user" element={<EditUserComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
