import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';

const styleH3 = {
    textAlign: "left",
    marginBottom: 15,
  };
  
  const Image = { borderRadius: "10px", height: 230 };

const HaikyuuComp = () => {
    const [haikyuu, setHaikyuu] = useState([])

    const getHaikyuu = async () => {
        try{
            let res = await axios.get('https://www.omdbapi.com/?apikey=20e7f455&s=haikyuu')
            setHaikyuu(res.data.Search);
        } catch(e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getHaikyuu()
    }, [])
  return(
    <div className="mt-4 cont">
        <h4 style={{textAlign: "left"}}>Haikyuu</h4>
      <>
        <div className="rw_imags">
          {haikyuu.map((haik, index) => {
            return (
              <>
              <div className="container">
                <img
                  
                  key={index}
                  className="imagg"
                  style={Image}
                  src={haik.Poster}
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

export default HaikyuuComp;
