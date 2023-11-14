// BigCats.jsx
// import React from 'react';
// import SingleCat from './SingleCat';
//
// const cats = [
//     { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
//     { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
//     { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
//     { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
//     { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
//     { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow_leopard.jpg' },
//     { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
// ];
//
// const BigCats = () => (
//     <div className="big-cats">
//         {cats.map((cat) => (
//             <SingleCat key={cat.id} {...cat} />
//         ))}
//     </div>
// );
//
// export default BigCats;


// impot tge things
import React, { useState } from 'react';
import SingleCat from './SingleCat';
// WoW big set
const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow_leopard.jpg' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },];
const BigCats = () => {
    const [catList, setCatList] = useState(cats); // set the initial state to cats
    const handleSort = () => { // sort the list of cats
        const sortedList = [...catList].sort((a, b) => a.name.localeCompare(b.name));
        setCatList(sortedList);}; // set the state to the sorted list
    const handleReverse = () => {
        const reversedList = [...catList].reverse(); // reverse tge list of cats
        setCatList(reversedList);};
    const handleFilterPanthera = () => {
        const pantheraList = cats.filter((cat) => cat.latinName.includes('Panthera')); // filter the list of cats
        setCatList(pantheraList);}; // set filtered state to pantheraList
    const handleReset = () => {
        setCatList(cats);}; // reset the state to cats
    return (
        // make a div with buttons for sorting, reversing, filtering, and resetting the list of cats
        <div className="big-cats">
            <div>
                <button onClick={handleSort}>ABC</button>
                <button onClick={handleReverse}>Reverse Fury</button>
                <button onClick={handleFilterPanthera}>only Pantheras </button>
                <button onClick={handleReset}>Reset</button>
            </div>
            {catList.map((cat) => (
                <SingleCat key={cat.id} {...cat} />
            ))}
        </div>);}; // close th e div
export default BigCats;
