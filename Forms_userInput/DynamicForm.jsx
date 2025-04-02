import React, { useState } from "react";
import "./DynamicForm.css"; // Import CSS

function DynamicForm() {
  const [skills, setSkills] = useState([""]); // Initialize with one empty skill field

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const addSkillField = () => {
    setSkills([...skills, ""]);
  };

  const removeSkillField = (index) => {
    if (skills.length > 1) {
      setSkills(skills.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Skills:", skills);
    alert("Skills Submitted: " + skills.join(", "));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dynamic Skill Form</h2>

      {skills.map((skill, index) => (
        <div key={index} className="skill-container">
          <input
            type="text"
            placeholder={`Skill ${index + 1}`}
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
          />
          <button
            type="button"
            className="remove-btn"
            onClick={() => removeSkillField(index)}
          >
            ❌
          </button>
        </div>
      ))}

      <button type="button" className="add-btn" onClick={addSkillField}>
        ➕ Add Skill
      </button>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default DynamicForm;
