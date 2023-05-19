import Feed from './Component/Feed'
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Widgets from './Component/Widgets';
import Login from './Component/Login';
import {AuthContext} from './Component/Context/AuthContext';
import {useContext} from 'react'



function App() {
  const {user}  = useContext(AuthContext)
  
  return (
    <>
    {!user ?<Login />:(
      <div className='App'>
      <Header />
      <div className="body__app">
       <Sidebar />
       <Feed />
       <Widgets />
      </div>
      </div>
    )}
    </>
   
  );
}

export default App;
