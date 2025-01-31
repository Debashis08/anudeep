import React    from 'react'
import {Link, Outlet } from "react-router-dom"
import { Navbar , Footer } from 'flowbite-react'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import UserContext from '../Context/UserContext';
import UserAvatarButton from './UserAvatarButton';
export default function Mentor() {

  console.log("Mentor")
  return (
   <>
    <Navbar
    fluid={true}
    rounded={true}
    className= "bg-lime-200 shadow-xl relative z[1]"
   >
    <Navbar.Brand>
       <img width="100" height="200"
        src="https://www.anudip.org/wp-content/uploads/2018/07/logow.png"
       
        alt="Anudip Logo"
      />
      
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse  className='[&>*]:items-center'>
     
     

    <Navbar.Link>

<Link to="/Mentor">Programmes</Link>
 </Navbar.Link>


      <Navbar.Link>

      <Link to="MentorCommitment">MentorCommitment</Link>
       </Navbar.Link>



       <Navbar.Link>
  
       <Link to="CommitmentCalendar">Commitment Calendar</Link>
       </Navbar.Link>



       <Navbar.Link>
  
  
         <Link to="ApproveMentor">Approve Mentors</Link>
       </Navbar.Link>
  
       <Navbar.Link
       
        
       >
  
    
  
  
         <Link to="About">About</Link>
       </Navbar.Link>
      
      <li><UserAvatarButton /></li>
       
  
    </Navbar.Collapse>

    
  </Navbar>
  
    
      
      <div className='grow p-10 mid-container'>
      <Outlet />
      </div>


    <footer  className="flex justify-around p-10 bg-lime-200 shadow-xl">
      
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
      
   
    </div>


    

    </footer>
   
  </>
  )
}
