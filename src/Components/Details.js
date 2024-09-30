import React from 'react'
import '../CSS/Details.css'
import { FaRegHandshake, FaBookOpen,FaGraduationCap } from 'react-icons/fa'; 
import { GoGoal } from "react-icons/go";
import { BiNetworkChart } from "react-icons/bi";
function Details() {
  return (
    <div>
        <section className='my_text'>
            <h4 className='h4'>Interested in joining our prestigious network of alumni?</h4>
            <div className="my_button">
                <a href="/signup"  rel="noopener noreferrer">
                Create Your Profile
            </a>
            </div>
            <div className='My_line'></div>
        </section>
        <section className='benefits'>
        <h5 className='h5'>Our Network helps in developing these things -</h5>
        <div className='icons-info-container'>
          <div className='icon-info'>
            <FaRegHandshake className='icon' />
            <p>Foster Meaningful Connections</p>
          </div>
          <div className='icon-info'>
            <FaBookOpen className='icon' />
            <p>Promote Knowledge Sharing</p>
          </div>
          <div className='icon-info'>
            <BiNetworkChart className='icon' />
            <p>Expand Your Professional Network</p>
          </div>
          <div className='icon-info'>
            <FaGraduationCap className='icon' />
            <p>Strengthen University-Alumni Bonds</p>
          </div>
          <div className='icon-info'>
            <GoGoal className='icon' />
            <p>Support Your Career Development</p>
          </div>
        </div>
      </section>
      <section className='my_text2'>
            <h6 className='h6'>Ready to take the next step? Explore our Alumni Directory, connect with mentors, and start building your future today!</h6>
            <div className="my_button">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                Ready to Start 
            </a>
            </div>
            {/* <div className='My_line'></div> */}
        </section>
    </div>
  );
}

export default Details;