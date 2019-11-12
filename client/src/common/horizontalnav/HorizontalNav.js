import React from "react";
import "./HorizontalNav.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// views 
import Main from "../../Views/main/Main";
import Section from "../../Views/section/Section";
import Blog from "../../Views/blog/Blog";    

const HorizontalNav = (props) => {

    return (
        <Router>
            <ul>
                {props.menuOptions.map( ( { name, id }, index) => (
                    <li key = { name + id + index }>
                        <Link to = {index === 0 ? '/' : id } > { name } </Link>
                    </li>
                ))}
            </ul>
            <Switch>
                <Route exact path = "/"> 
                    <Main/>
                </Route>
            </Switch>
            <Switch>
                <Route path="/menu-1" children={ <Section id="menu-1" menuOptions={ props.menuOptions }/> } />
            </Switch>
            <Switch>
                <Route path="/menu-2" children={ <Section id="menu-2" menuOptions={ props.menuOptions }/> } />
            </Switch>
            <Switch>
                <Route path="/menu-3" children={ <Section id="menu-3" menuOptions={ props.menuOptions }/> } />
            </Switch>
            <Switch>
                <Route path="/menu-4" children={ <Section id="menu-4" menuOptions={ props.menuOptions }/> } />
            </Switch>                                    
            {/* <Switch>
                <Route path="/:id" children={ <Blog  menuOptions={ props.blogData }/> } />
            </Switch>                   */}
        </Router>
    )

}
export default HorizontalNav;
