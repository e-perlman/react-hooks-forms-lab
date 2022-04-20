import React from "react";
//import { v4 as uuid } from "uuid";

function ItemForm({itemName,itemCategory,onNameForm,onCategoryForm,onItemFormSubmit}) {
 
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={onNameForm}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={onCategoryForm}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
