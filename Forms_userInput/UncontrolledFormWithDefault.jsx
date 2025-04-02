

import React, {useRef} from "react";


const UncontrolledFormWithDefault = () => {
    const inputName = useRef("");

  return (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            alert(`Name: ${inputName.current.value}`);
        }}>
            <label>
                Name:
                <input type="text" ref={inputName} defaultValue="John Doe" /> {/* Attach the ref to the input */}
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}



export default UncontrolledFormWithDefault
   