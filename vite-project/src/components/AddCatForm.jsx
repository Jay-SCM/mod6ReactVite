import React, { useState } from 'react';
const AddCatForm = ({ onAddCat }) => {
    const [newCat, setNewCat] = useState({ name: '', latinName: '', image: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCat((prevCat) => ({ ...prevCat, [name]: value }));};
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if all fields are filled
        if (newCat.name && newCat.latinName && newCat.image) {
            // Pass the new cat to the parent component
            onAddCat({ ...newCat, id: Date.now() });
            // Clear the form after submission
            setNewCat({ name: '', latinName: '', image: '' });
        } else {
            alert('Please fill in all fields.');}};
    return (
        <div>
            <h2>Add a New Cat</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={newCat.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Latin Name:
                    <input type="text" name="latinName" value={newCat.latinName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="text" name="image" value={newCat.image} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add Cat</button>
            </form>
        </div>);};
export default AddCatForm;

// purer fuctions only prefor a single fuction
//for the same params it will only ever  give the same ansewer
// it sows not affect any other variable
//they worek consitantlt and are simple