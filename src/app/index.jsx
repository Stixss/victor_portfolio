import React from "react"
import  ReactDOM  from "react-dom"
import { Router, Route, browserHistory, IndexRoute, history } from "react-router"

import {Base} from "./components/Base.jsx"
import {Home} from "./components/Home.jsx"
import {Cv} from "./components/Cv.jsx"
import {Projets} from "./components/Projets.jsx"


export class App extends React.Component{
    render(){
        return(
            <div>
                <Router history={browserHistory}>
                    <Route exact path="/" component={Base}>
                        <IndexRoute component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/cv" component={Cv}/>
                        <Route path="/projets" component={Projets}/>
                    </Route>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,document.getElementById('app')
)
