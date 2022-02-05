import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const styleH3 = {
    textAlign: "left",
    marginBottom: 15,
  };
  
  const Image = { borderRadius: "10px", height: 230 };

const OnePieceComp = () => {
    const [onePiece, setOnePiece] = useState([])

    const getOnePiece = async () => {
        try{
            let res = await axios.get('https://www.omdbapi.com/?apikey=20e7f455&s=one-piece')
            setOnePiece(res.data.Search);
        } catch(e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getOnePiece()
    }, [])
  return(
    <div className="mt-5 cont">
        <h4 style={{textAlign: "left"}}>One Piece</h4>
      <>
        <div className="rw_imags">
          {onePiece.map((one, index) => {
            return (
              <>
              <div className="container">
                <img
                  
                  key={index}
                  className="imagg"
                  style={Image}
                  src={one.Poster}
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

export default OnePieceComp;
