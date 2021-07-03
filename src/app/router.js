import React,{Suspense} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from "../views/main/main";


const RouterPage = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path={'/'}
                        render={matchprops => {
                            const urls = matchprops.location.pathname
                            return (
                                <Suspense fallback={"Loading"}>
                                    <Main urls={urls}/>
                                </Suspense>
                            )
                        }}/>
                </Switch>
            </div>
        </Router>
    );
}
export default RouterPage