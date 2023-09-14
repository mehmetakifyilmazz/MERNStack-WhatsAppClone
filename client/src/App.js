import { useSelector } from "react-redux";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import ChatDetail from "./pages/ChatDetail";
import Sidebar from "./companents/Sidebar";
import PageContainer from "./containers/PageContainer";

function App() {

  const {user} =(useSelector(state => state.user))
  
  
  return (
    <>
    {
      !user ? <Login/>:
      <Router>
        <PageContainer>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Chat/>}/>
          <Route path="chat/:id" element={<ChatDetail/>}/>
          </Routes>
          </PageContainer>
      </Router>   
      }
    </>  
  );
}

export default App;
