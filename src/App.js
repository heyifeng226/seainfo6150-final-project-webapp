import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import recipes from "./data/recipes.json";
import Home from "./Home/Home.jsx";
import Footer from "./Footer/Footer.jsx";
import Nav from "./Nav/Nav.jsx";
//import Bar from "./Bar/Bar.jsx";
import Error from "./Error/Error.jsx";
//import styles from "./nav.module.css";
import AboutUs from "./About/AboutUs.jsx";
import AllCategory from "./AllCategory/AllCategory.jsx";
import Category from "./Category/Category.jsx";
import Detail from "./Detail/Detail.jsx";
import Register from "./Register/Register.jsx";
import Login from "./Login/Login.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

const allCategorys = {
  Soup: { id: "1", name: "Soup" },
  Appetizer: { id: "2", name: "Appetizer" },
  MainCourse: { id: "3", name: "Main Course" },
  Snack: { id: "4", name: "Snack" },
  Dessert: { id: "5", name: "Dessert" },
};

function App() {
  return (
    <>
      <header>
          <Nav/>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/category" exact component={AllCategory} />
        
        {/* passing parameters via a route path */}
        
        <Route
          path="/category/:categoryID"
          exact
          render={({ match }) => (
            <Category
              categoryID={match.params.categoryID}
              categorys={Object.values(allCategorys)}
              content={Object.values(recipes)}
            />
          )}
        />
        <Route
          path="/category/:categoryID/:recipeID"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Detail
              categoryID={match.params.categoryID}
              recipeID={match.params.recipeID}
              content={Object.values(recipes)}
            />
          )}
        />
      
        
        <Route path="/about" exact component={AboutUs} />
        
        <Route component={Error} />
      </Switch>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
