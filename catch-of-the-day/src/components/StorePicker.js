import React from 'react';

class StorePicker extends React.Component {
    constructor() {
        super();
        console.log("Creating comps");
    }

    myInput = React.createRef();

    goToStore = event => {
        event.preventDefault();
        //Get text from input
        const storeName = this.myInput.current.value;
        //Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        // return  <p className="corkboard">Bongiourno</p> // JSX is syntactic sugar for (below) React.createElement
        // return React.createElement('p', { className: 'corkboard' }, 'Hola!');
        return (
            // <>
            //     <li>1</li>
            //     <li>2</li>
            //     {/* <li>3</li> */}
            //     {/* Comment inside JSX MUST */}
            // </>
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2> Please Enter A Store</h2>

                <button onClick={this.handleClick}>Click me!</button>
                <input type="text" ref={this.myInput} required placeholder="Store name" />
                <button type="submit">Visit Store </button>
            </form>
        )
    }
}

export default StorePicker;