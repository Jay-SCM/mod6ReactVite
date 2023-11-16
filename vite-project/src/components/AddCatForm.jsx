//exercise 5
//addcatform.jsx
// Import React and useState hook from the 'react' library.
import React, { useState } from 'react';
// Define the functional component AddCatForm that takes a prop 'onAddCat'.
const AddCatForm = ({ onAddCat }) => {
    // state variable 'newCat' and function 'setNewCat' to update it, initialized with an empty cat object.
    const [newCat, setNewCat] = useState({ name: '', latinName: '', image: '' });
    //function 'handleChange' to update 'newCat' based on user input.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCat((prevCat) => ({ ...prevCat, [name]: value }));};
    //'handleSubmit' to handle submission.
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if thr fields are filled
        if (newCat.name && newCat.latinName && newCat.image) {
            // Pass the new cat to the parent component using'onAddCat' prop.
            onAddCat({ ...newCat, id: Date.now() });
            // Clear form
            setNewCat({ name: '', latinName: '', image: '' });
        } else {
            // Display alert for empty form fields
            alert('Please fill in all fields.');}};
    // Return JSX structure for the AddCatForm component.
    return (
        <div>
            <h2>Add a New Cat</h2>
            {/* Form element with an onSubmit event handler */}
            <form onSubmit={handleSubmit}>
                {/* Input for Cat Name */}
                <label>
                    Name:
                    <input type="text" name="name" value={newCat.name} onChange={handleChange} />
                </label>
                <br />
                {/* Input for Latin Name */}
                <label>
                    Latin Name:
                    <input type="text" name="latinName" value={newCat.latinName} onChange={handleChange} />
                </label>
                <br />
                {/* Input Image URL  */}
                <label>
                    Image URL:
                    <input type="text" name="image" value={newCat.image} onChange={handleChange} />
                </label>
                <br />
                {/* Submit button */}
                <button type="submit">Add Cat</button>
            </form>
        </div>);};
export default AddCatForm;


// purer fuctions only prefor a single fuction
//for the same params it will only ever  give the same ansewer
// it sows not affect any other variable
//they worek consitantlt and are simple