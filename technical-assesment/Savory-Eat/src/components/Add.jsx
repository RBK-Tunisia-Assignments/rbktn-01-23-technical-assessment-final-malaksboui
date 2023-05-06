import React, {useState} from "react";
import "../App.css";
import axios from "axios"

const Add = () => {
 
  const [recepie_Name, setName] = useState("");
  const [cook_Time, setTime] = useState("");
  const [Prep_Time, setPrepTime] = useState("");
  const [serves, setServes] = useState("");
  const [recepie_Ingredients, setIngredients] = useState("");
  const [recepie_Image,setImage] = useState("");
  const[categorie, setCategories]= useState("");
  const[recepie_Description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecepie = {
      recepie_Name:recepie_Name,
      Cook_Time: Cook_Time,
      Prep_Time : Prep_Time,
      recepie_Ingredients : recepie_Ingredients,
      recepie_Image :recepie_Image,
      categorie : categorie,
      recepie_Description: recepie_Description
    };

    axios
      .post("http://localhost:4000", newRecepie)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

   setName("")
   setTime("")
   setPrepTime("")
   setServes("")
   setIngredients("")
   setImage("")
   setCategories("")
   setDescription("")
  };

   
  return (
    <div className="add-recipe-form ">
       <form placeholder= {handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" 
        placeholder="Name" 
        value = {recepie_Name}
        onChange={(event)=> setName(event.target.value)}
        required
        />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number"
         placeholder="Cooking Time" 
         value = {cook_Time}
         onChange={event=> setTime(event.target.value)}
         required
         />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number"
         placeholder="Preparation Time" 
           value = { Prep_Time}
         onChange={event=> setPrepTime(event.target.value)}
         required/>
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" 
        placeholder="serves"
        value = {serves}
        onChange={(event)=> setServes(event.target.value)}
        required

         />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" 
        placeholder="Category"
        value = {categorie}
        onChange={(event)=> setCategories(event.target.value)}
        required
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" 
        placeholder="Description" 
        value={recepie_Description}
        onChange={(event)=> setDescription(event.target.value)}
        required
        />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" 
        value={recepie_Ingredients }
        onChange={(event)=>  setIngredients(event.target.value)}
        required

        />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" 
        placeholder="Image URL" 
        value={recepie_Image }
        onChange={(event)=>  setImage(event.target.value)}
        required/>
      </div>
      <button className="create-recipe-btn">Create Recipe</button>
      </form>
    </div>
  )
};
export default Add;
