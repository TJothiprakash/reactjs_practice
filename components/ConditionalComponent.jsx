const  ConditionalComponent = ({ show }) => {
  if (!show) {
    return null;
  }
  return <h1>Now you see me!</h1>;
};

export default  ConditionalComponent;