import React from "react";

class FishForm extends React.Component {
    createFish = event => {
        event.preventDefault();
        console.log("Making fish")
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="price" placeholder="Price" />
                <select name="status" placeholder="Status" >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" placeholder="Desc" />
                <input type="text" name="image" placeholder="Image" />
                <button type="submit">Add Fish</button>
            </form>

        );
    }
}

export default FishForm;