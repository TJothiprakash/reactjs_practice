import React from 'react';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
 render() {
    const { name, age, email } = this.props.data;

    return (
      <>
        <h1>Hello from UserProfile class component</h1>
        <p>Name: {name}</p>
        <p>Age: {age || "18"}</p>  {/* ✅ Default age applied if missing */}
        <p>Email: {email}</p>
      </>
    );
  }
}

// ✅ Correct PropTypes (Fixed)
UserProfile.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.string,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

// ✅ Correct Default Props (Fixed)
UserProfile.defaultProps = {
  data: {
    age: "18",
  },
};

export default UserProfile;
