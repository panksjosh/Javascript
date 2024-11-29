import "./App.css";
import FoodItems from "./Components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const FoodItemsArr = ["Roti", "Dal", "Sabji", "Puri", "Rice"];

  return (
    <>
      <h1>Healthy Food</h1>
      <FoodItems items={FoodItemsArr}></FoodItems>
    </>
  );
}

export default App;
