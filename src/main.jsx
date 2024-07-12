import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Appv1 from "./Appv1.jsx";
// import "./index.css";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} by people.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={12}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    <App />
  </React.StrictMode>
);
