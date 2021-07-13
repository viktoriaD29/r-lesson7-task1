import React from 'react';

const NumbersList = ({numbers}) => {
  
  return (
    <ul>
      {numbers.map((Login) => <li>{Login}</li>)}
    </ul>
  );
};

export default NumbersList;
