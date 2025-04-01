import React from 'react'
import PropTypes from 'prop-types'


class Greeting extends React.Component{


  render(){

    return (
      <>
      <h1>  Hello {this.props.name}!</h1>
      </>
    )
  }
}



Greeting.PropTypes = {
 name :PropTypes.string.isRequired,
}

Greeting.defaultProps = {
  name : "Guest ",
};

export default Greeting;

// 
{/*import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// ✅ Add PropTypes to ensure 'name' is a string
Greeting.propTypes = {
  name: PropTypes.string,
};

// ✅ Set default prop for 'name' as "Guest"
Greeting.defaultProps = {
  name: "Guest",
};

export default Greeting;
 */}