import React, { useState } from "react";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div>
      {
        submittedForm ? (
          <div>Your form entry was {submittedForm.get("myText")} and {submittedForm.get("myDropdown")}</div>
        ) : (
          <form onSubmit={onSubmit}>
            <label htmlFor="myTextId">Input</label>
            <input type="text" required="required" name="myText" id="myTextId" placeholder="Name"/><br />
            <input type="e-mail" required="required" placeholder="E-mail" name="e"></input><br />
            <input type="phone" required="required" placeholder="Phone" name="p"></input><br /> 
            <label htmlFor="myDropdownId">Input</label>
            <select name="myDropdown" id="myDropdownId">
              <option value="soup">Soup</option>
              <option value="appetizer">Appetizer</option>
              <option value="mainCourse">Main Course</option>
              <option value="snack">Snack</option>
              <option value="dessert">Dessert</option>
            </select>
            <input type="submit" value="Send it" />
          </form>
        )
      }
    </div>
  )
}

export default Form