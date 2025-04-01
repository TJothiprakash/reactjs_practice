import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    const { name, price, description } = this.props;
    return (
      <div style={styles.container}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.price}>Price: ${price}</p>
        <p style={styles.description}>{description}</p>
      </div>
    );
  }
}

// ✅ PropTypes for validation
Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

// Default styles for better visual appeal
const styles = {
  container: {
    border: '1px solid #ddd',
    padding: '16px',
    borderRadius: '8px',
    width: '250px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  name: {
    fontSize: '1.5em',
    color: '#333',
    marginBottom: '8px',
  },
  price: {
    fontSize: '1.2em',
    color: '#007BFF',
    marginBottom: '12px',
  },
  description: {
    fontSize: '1em',
    color: '#555',
  },
};

export default Item;
