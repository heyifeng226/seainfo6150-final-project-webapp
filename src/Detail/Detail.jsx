import React from "react";
import DetailItem from "./DetailItem.jsx";

const Detail = (props) => {
  return (
    <div>
      {props.recipes.map((recipe) =>
        DetailItem(recipe, props.recipeID)
      )}
    </div>

  );
};



export default Detail;