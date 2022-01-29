import React from 'react';

import './custom-button.styles.css';

const CustomButton = ({ children, inverted, ...props }) => (
  <button className={`customButtonContainer ${inverted ? 'invertedButtonStyles' : 'buttonStyles'}`} {...props}>
    {children}
  </button>
);

export default CustomButton;
