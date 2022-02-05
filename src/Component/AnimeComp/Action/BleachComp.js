import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const styleH3 = {
    textAlign: "left",
    marginBottom: 15,
  };
  
  const Image = { borderRadius: "10px", height: 230 };

const BleachComp = () => {
    const [bleach, setBleach] = useState([])

    const getBleach = async () => {
        try{
            let res = await axios.get('https://www.omdbapi.com/?apikey=20e7f455&s=bleach')
            setBleach(res.data.Search);
        } catch(e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getBleach()
    }, [])
  return(
    <div className="mt-4 cont">
        <h4 style={{textAlign: "left"}}>Bleach</h4>
      <>
        <div className="rw_imags">
          {bleach.map((blea, index) => {
            return (
              <>
              <div className="container">
                <img
                  
                  key={index}
                  className="imagg"
                  style={Image}
                  src={blea.Poster}
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

export default BleachComp;
