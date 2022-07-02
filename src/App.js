import { Route, Routes } from "react-router-dom";
import Calender from "./Components/Calender/Calender";
import Completed_Task from "./Components/Completed_Task/Completed_Task";
import Header from "./Components/Header/Header";
import Todo from "./Components/Calender/Todo";
import { ToastContainer } from 'react-toastify';
import HomeTodo from "./Components/Calender/HomeTodo";
import './App.css'
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
        <Route path='/' element={<Calender></Calender>}></Route>
        <Route path='/todo' element={<HomeTodo></HomeTodo>}></Route>
        <Route path='/completed-task' element={<Completed_Task></Completed_Task>}></Route>
        </Routes>
        <ToastContainer />
        <Footer></Footer>
    </div>
  );
}

export default App;
