import React from 'react';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  }
  
  goToStore = Event => {
    //Stop the form from submitting
    Event.preventDefault();

    //Get the text from input
    const storeName = this.myInput.current.value;
    // console.log(this.myInput.current.value);
    
    //Change the page to store/whatever-you-want
    this.props.history.push(`store/${storeName}`);
  };
  
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input ref={this.myInput} type="text" required placeholder="Store Name" defaultValue={'potato'}/>
        <button type='submit'>Visite Store</button>
      </form>
    )
  }
}

export default StorePicker;