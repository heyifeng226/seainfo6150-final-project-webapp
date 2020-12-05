import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Foo from "./Foo/Foo.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import styles from "./nav.module.css";
import AboutUs from "./About/AboutUs.jsx";
import AllCategory from "./AllCategory/AllCategory.jsx";
import Category from "./Category/Category.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
};

function App() {
  return (
    <>
      <header>
        <nav>
        <Link to="/">
            <img
              className={styles.logo}
              src="/images/chef.png"
              alt="myrecipes logo"
            />
          </Link>
          <Link className={styles.title} to="/">
            MyRecipes
          </Link>
          <Link className={styles.navTab} to="/category">
            All Category
          </Link>
          <Link className={styles.navTab} to="/collection">
            My Recipes
          </Link>
          <Link className={styles.navTab} to="/about">
            About Us
          </Link>
          <Link className={styles.navTab} to="/contact">
            Contact Us
          </Link>
          <Link className={styles.subscribe} to="/subscribe">
            Login
          </Link>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={AllCategory} />
        <Route path="/foo" exact component={Foo} />
        {/* passing parameters via a route path */}
        <Route
          path="/bar/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Bar
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
          )}
        />
        <Route path="/about" exact component={AboutUs} />
        <Route
          path="/baz"
          exact
          render={() => <Baz content={externalContent} />}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
