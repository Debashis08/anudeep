import { BrowserRouter , Routes  ,  Route } from "react-router-dom"
import Mentor from "./Components/Mentor";
import ProgrammeView from "./Components/ProgrammeView";
import Login from "./Components/Login";
import About from "./Components/About";
import MentorCommitment from "./Components/MentorCommitment";
import Approvals from "./Components/Approvals";
import SessionPlan from "./Components/SessionPlan";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserContextProvider } from "./Context/UserContext";
import Landing from "./Components/Landing";
import SignUp from "./Components/SignUp";
import { ProgrammeContextProvider } from "./Context/PorgrammeContext";

import CommitmentCalendar from "./Components/CommitmentCalendar";



import StudentDetails from "./Components/StudentDetails";
function App() {

  return (
   <>
   <UserContextProvider>
    <ProgrammeContextProvider>
   <BrowserRouter>

   <Routes>  
        {/* Landing */}
         <Route  path="/"  element = {<Landing/>}>
         <Route index  element={<SignUp/>}/> 
         <Route path='/login'  element={<Login/>}/>
         <Route path='/About'  element={<About/>}/> 
         
         </Route>
       {/* Mentor */}
        <Route path="/Mentor" element={<Mentor/>}>
        <Route index  element={<ProgrammeView/>}/>
        <Route path="/Mentor/MentorCommitment" element={<MentorCommitment/>}/> 
        <Route path='/Mentor/CommitmentCalendar '  element={<CommitmentCalendar/>}/> 
        <Route path='/Mentor/ApproveMentor'  element={<Approvals/>}/> 
        <Route path='/Mentor/About'  element={<About/>}/> 
        <Route path='/sessionPlan'  element={<SessionPlan />}/> 
        <Route path='/studentDetails'  element={<StudentDetails />}/> 
        </Route>
              
  </Routes> 
  <ToastContainer/>
  </BrowserRouter>
  </ProgrammeContextProvider>
  </UserContextProvider>
   </>
  );
}

export default App;
