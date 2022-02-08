// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { useParams } from "react-router-dom";

// const MovieIdComp = () => {
//   const { imdbID } = useParams();
//   const [dataa, setData] = useState([])

//   const getData = async () => {
//     try{
//      let res = await axios.get("https://www.omdbapi.com/?apikey=20e7f455&i=" + imdbID)
//       setData(res.data)
//     } catch(e){
//       console.log(e.message);
//     }
//   }

//   useEffect(() => {
//     if (imdbID) {
//         getData()
//     }
//   }, [imdbID]);
  

//   return (
//     <div>
//       <Container className="mt-5 pt-5">
//         <Row>
//             ke - {imdbID}
//             <hr />
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default MovieIdComp;




import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} />
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup
