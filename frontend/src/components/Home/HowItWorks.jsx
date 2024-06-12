import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3 style={{color: "#1b2b57"}}>How Workday Works</h3>
          <div className="banner">
            <div className="card" style={{backgroundColor:"#e0e0e0"}}>
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
            <div className="card" style={{backgroundColor:"#e0e0e0"}}>
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
            <div className="card" style={{backgroundColor:"#e0e0e0"}}>
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, culpa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;