import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import {useState} from 'react';
//import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Test(){
//   const [movieRating, setMovieRating] = useState();
//   return (
//     <div>
//       <StarRating color='blue' maxRating={10} onSetRating={setMovieRating}/>
//       <p> This movie was rated {movieRating} rating. </p>
//     </div>
//   );
// }


root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating />
    <StarRating maxRating="SSS" color="purple" size={24} className="green" messages = {["Terrible", "Bad", "Okey", "Good", "Amazing"]} defaultRating={3}  />
    <Test />  */}
  </React.StrictMode>
);


