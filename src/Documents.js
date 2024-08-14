import React from "react";
import { useNavigate } from "react-router-dom";
import img3 from '../src/image/accountingicon.jpg';

const RotatingImage = ({ targetPath }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(targetPath);
  };

  return (
    <div
    Documents
      className="w-32 h-32 rounded-full overflow-hidden cursor-pointer transition-transform transform hover:scale-110 active:rotate-180"
      onClick={handleClick}
    >
      <img
        src={img3}
        alt="Circular Rotating"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default RotatingImage;
