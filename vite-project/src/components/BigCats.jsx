//exercise 4
//bigcar.jsx
// imports imports
import React, { useState } from 'react';

// Import components used in BigCats.
import SingleCat from './SingleCat.jsx';
import AddCatForm from './AddCatForm.jsx';
// array for cats feline array.
const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow_leopard.jpg' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },];
// Define the functional component BigCats.
const BigCats = () => {
    // Declare state variable 'catList' and a function 'setCatList' to update it, initialized by 'cats' array.
    const [catList, setCatList] = useState(cats);
    // Function to handle adding a new cat
    const handleAddCat = (newCat) => {
        setCatList([...catList, newCat]);};
    // Function to handle deleting a cat from the cat list.
    const handleDeleteCat = (id) => {
        const updatedCatList = catList.filter((cat) => cat.id !== id);
        setCatList(updatedCatList);};
    // Function to handle sorting the cat list alphabetically.
    const handleSort = () => {
        const sortedList = [...catList].sort((a, b) => a.name.localeCompare(b.name));
        setCatList(sortedList);};
    // reversing the order of the cat list.
    const handleReverse = () => {
        const reversedList = [...catList].reverse();
        setCatList(reversedList);};
    //  filtering the cat list to show only cats with 'Panthera' in their Latin name.
    const handleFilterPanthera = () => {
        const pantheraList = catList.filter((cat) => cat.latinName.includes('Panthera'));
        setCatList(pantheraList);};
    //  resetting the cat list to the original array.
    const handleReset = () => {
        setCatList(cats);};
    // Return the JSX structure
    return (
        <div className="big-cats">
            {/* R AddCatForm component with an 'onAddCat' prop */}
            <AddCatForm onAddCat={handleAddCat} />
            {/* Buttons for sorting, reversing, filtering, and resetting the cat list */}
            <div>
                <button onClick={handleSort}>ABC</button>
                <button onClick={handleReverse}>Reverse Fury</button>
                <button onClick={handleFilterPanthera}>Only Pantheras</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            {/* Map through the cat list and render SingleCat component for each cat */}
            {catList.map((cat) => (
                <div key={cat.id}>
                    <SingleCat {...cat} />
                    <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
                </div>))}
        </div>);};
export default BigCats;





