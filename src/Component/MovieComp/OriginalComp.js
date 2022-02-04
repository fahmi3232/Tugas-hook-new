import React, { useEffect, useState } from "react";
import Axios from "../Axios";

const image_uri = "https://image.tmdb.org/t/p/original/";

const styleH3 = {
    textAlign: "left",
    marginBottom: 15
  }
  
  const Image = { borderRadius: "15px"}
  

const OriginalComp = ({ url, title }) => {
  const [original, setOriginal] = useState([]);
  const [loading, setLoading] = useState(false)

  const getOriginal = async () => {
      setLoading(true)
    try {
      let resp = await Axios.get(url);
      setLoading(false)
      setOriginal(resp.data.results);
    } catch (e) {
        setLoading(true)
      console.log(e.message);
    }
  };

  useEffect(() => {
    getOriginal();
  }, []);
  return (
    <div className="mt-5 cont">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h4 style={styleH3}>{title}</h4>
          <div className="rw_images">
            {original.map((origin, index) => {
              return (
                  <img
                    className="rw_imag"
                    style={Image}
                    src={`${image_uri}${origin.poster_path}`}
                  />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default OriginalComp;
