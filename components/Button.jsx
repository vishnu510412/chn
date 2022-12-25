import React from 'react'
// const background = 'linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0) 125%)';

const Button = ({ btnImage, classStyles, btnType, handleClick }) => (
    <button
      type="button"
      
      className={
          btnType === 'primary' ? 'button-s' : `${background}`
      }
      onClick={handleClick}
    >
      {btnImage}
    </button>
  );

export default Button