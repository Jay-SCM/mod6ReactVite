// SingleCat.jsx
import React from 'react';

const SingleCat = ({ id, name, latinName, image }) => (
    <div key={id} className="single-cat">
        <img src={image} alt={`${name} cat`} />
        <p>{name}</p>
        <p>{latinName}</p>
    </div>
);

export default SingleCat;

