import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items,onItemChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search,setSearch]=useState('');
  const [itemName,setItemName]=useState('');
  const [itemCategory,setItemCategory]=useState('Produce')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event){
    setSearch(event.target.value)

  }
  function handleNameForm(e){
    setItemName(e.target.value)
  }
  function handleCategoryForm(e){
    setItemCategory(e.target.value)
  }
  function handleFormSubmit(event){
    event.preventDefault();
    const newItem={
      id:uuid(),
      name:itemName,
      category:itemCategory
    }
    const dataArray=[...items,newItem]
    onItemChange(dataArray)
  }

  const itemsToDisplay = items
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter(item=>item.name.includes(search));

  return (
    <div className="ShoppingList">
      <ItemForm 
        itemName={itemName} 
        itemCategory={itemCategory}
        onNameForm={handleNameForm}
        onCategoryForm={handleCategoryForm} 
        onItemFormSubmit={handleFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
