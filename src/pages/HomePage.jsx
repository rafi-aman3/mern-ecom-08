import React from "react";
import toast from "react-hot-toast";

const HomePage = () => {


	const  handleClick = () => {
		toast.success("Successful Installation")
	}




  return (
    <div>
      <button onClick={handleClick} className="btn btn-soft btn-warning">Warning</button>
      <button className="btn btn-soft btn-error">Error</button>
    </div>
  );
};

export default HomePage;
