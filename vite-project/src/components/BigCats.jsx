import React, { useState } from 'react';
import SingleCat from './SingleCat.jsx';
import AddCatForm from './AddCatForm.jsx';
// cat data
const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow_leopard.jpg' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },];
const BigCats = () => {
    const [catList, setCatList] = useState(cats);
    const handleAddCat = (newCat) => {
        setCatList([...catList, newCat]);};
    const handleDeleteCat = (id) => {
        const updatedCatList = catList.filter((cat) => cat.id !== id);
        setCatList(updatedCatList);};
    const handleSort = () => {
        const sortedList = [...catList].sort((a, b) => a.name.localeCompare(b.name));
        setCatList(sortedList);};
    const handleReverse = () => {
        const reversedList = [...catList].reverse();
        setCatList(reversedList);};
    const handleFilterPanthera = () => {
        const pantheraList = catList.filter((cat) => cat.latinName.includes('Panthera'));
        setCatList(pantheraList);};
    const handleReset = () => {
        setCatList(cats);};
    return (
        <div className="big-cats">
            <AddCatForm onAddCat={handleAddCat} />
            <div>
                <button onClick={handleSort}>ABC</button>
                <button onClick={handleReverse}>Reverse Fury</button>
                <button onClick={handleFilterPanthera}>Only Pantheras</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            {catList.map((cat) => (
                <div key={cat.id}>
                    <SingleCat {...cat} />
                    <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
                </div>))}
        </div>);};
export default BigCats;






