import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const styleH3 = {
    textAlign: "left",
    marginBottom: 15,
  };
  
  const Image = { borderRadius: "10px", height: 230 };

const onePunchManComp = () => {
    const [onePunchMan, setOnePunchMan] = useState([])

    const getOnePunchMan = async () => {
        try{
            let res = await axios.get('https://www.omdbapi.com/?apikey=20e7f455&s=one-punch-man')
            setOnePunchMan(res.data.Search);
        } catch(e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getOnePunchMan()
    }, [])
  return(
    <div className="mt-4 cont">
        <h4 style={{textAlign: "left"}}>One Punch Man</h4>
      <>
        <div className="rw_imags">
          {onePunchMan.map((onePunch, index) => {
            return (
              <>
              <div className="container">
                <img
                  
                  key={index}
                  className="imagg"
                  style={Image}
                  src={onePunch.Poster}
                />
                </div>
              </>
            );
          })}
        </div>
      </>
    
  </div>

  ) 
};

export default onePunchManComp;
