import React from "react";
import {useEffect, useState} from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Footer from "./Footer/Footer.jsx";
import Nav from "./Nav/Nav.jsx";
import Error from "./Error/Error.jsx";
import AboutUs from "./About/AboutUs.jsx";
import Contact from "./Contact/Contact.jsx";
import AllCategory from "./AllCategory/AllCategory.jsx";
import Category from "./Category/Category.jsx";
import Detail from "./Detail/Detail.jsx";
import Register from "./Register/Register.jsx";
import Login from "./Login/Login.jsx";
import RecipesList from "./Recipes/RecipesList.jsx";
import { isEmpty } from "lodash";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const allCategorys = {
  Soup: { id: "1", name: "Soup" },
  Appetizer: { id: "2", name: "Appetizer" },
  MainCourse: { id: "3", name: "Main Course" },
  Snack: { id: "4", name: "Snack" },
  Dessert: { id: "5", name: "Dessert" },
};

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo9484100.mockable.io/recipes");
      const responseJson = await response.json();
      setFetchedData(Object.values(responseJson));
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
    
      <header>
          <Nav/>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route exact path="/recipes"><RecipesList recipes={fetchedData} /></Route>
        <Route path="/category" exact component={AllCategory} />
        {/* passing parameters via a route path */}
        <Route
          path="/category/:categoryName"
          exact
          render={({ match }) => (
            <Category
              categoryName={match.params.categoryName}
              categorys={allCategorys}
              recipes={fetchedData}
            />
          )}
        />
        <Route
          path="/recipe/:recipeID"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Detail
              recipeID={match.params.recipeID}
              recipes={fetchedData}
            />
          )}
        />
        <Route path="/about" exact component={AboutUs} />
        <Route path="/contact" exact component={Contact} />
        <Route component={Error} />
      </Switch>
      <footer>
        <Footer/>
      </footer>
    
    </div>
    
  );
}

export default App;
