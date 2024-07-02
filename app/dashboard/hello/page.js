"use client"
import React, { useState } from "react";

const DynamicForm = () => {
  const [fields, setFields] = useState([{ value: "" }]);

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { value: "" }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with fields:", fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Enter a value"
            value={field.value}
            onChange={(e) => handleChange(index, e)}
          />
          <button type="button" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        Add Field
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
