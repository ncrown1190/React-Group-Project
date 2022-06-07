import searchIcon from "../assets/search1.svg";
import "./SearchRecipe.css";

export default function SearchRecipe() {
  return (
    <form className="SearchBox">
      <div className="searchBar-icon">
        <img src={searchIcon} alt="search icon" className="searchIcon" />
        <input
          className="SearchBar"
          placeholder="search recipe"
          name="SearchBar"
          value=""
          id="SearchBar"
        ></input>
      </div>

      <div className="drop-down-container">
        <div className="meal-type-container">
          <select className="mealType" name="meals" value="">
            <option value="" disabled selected hidden>
              Dish Types
            </option>           
            <option value="lunch">Lunch</option>
            <option value="mainCourse">Main Course</option>
            <option value="mainDish">Main Dish</option>
            <option value="dinner">Dinner</option>
          </select>

          <i className="fa-solid fa-angle-down"></i>
        </div>
        <div className="diet-container">
          <select className="diet" name="diet" id="diet" value="">
            <option value="" disabled selected hidden>
              Dietary Preference
            </option>
            <option value="vegetarian">Vegetarian</option>
            <option value="dairyFree">Dairy Free</option>
            <option value="vegan">Vegan</option>
            <option value="glutenFree">Gluten Free</option>
            <option value="keto">Keto</option>
            <option value="nutFree">Nut Free</option>
          </select>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        <div>
          <input
            className="calories"
            type="number"
            placeholder="Calories"
            name="calories"
            value=""
            id="calories"
          ></input>
        </div>
      </div>
    </form>
  );
}
