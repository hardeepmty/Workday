import React from "react";
import { FaMicrosoft, FaApple, FaFacebook } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 10,
      icon: <FaMicrosoft />,
      color: "#f9de8d", // Orange color for Microsoft
    },
    {
      id: 2,
      title: "Tesla",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 5,
      icon: <SiTesla />,
      color: "#f4b4cb", // Blue color for Tesla
    },
    {
      id: 3,
      title: "Apple",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 20,
      icon: <FaApple />,
      color: "#c6bbfa", // Green color for Apple
    },
    {
      id: 4,
      title: "Meta",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 20,
      icon: <FaFacebook />,
      color: "#f5c398", // Indigo color for Meta
    },
  ];

  return (
    <div className="companies">
      <div className="container">
        <h3 style={{color: "#1b2b57"}}>Industry veterans Trust us</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id} style={{ backgroundColor: element.color }}>
                <div className="content">
                  <div className="icon" style={{color:"black"}}>{element.icon}</div>
                  <div className="text" >
                    <p style={{color:"black"}}>{element.title}</p>
                    <p style={{color:"black"}}>{element.location}</p>
                  </div>
                </div>
                <button style={{color:"black"}}>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
