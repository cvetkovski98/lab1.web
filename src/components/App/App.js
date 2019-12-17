import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Navbar} from '../Navbar/navbar'
import {IngredientList} from "../Ingredients/ingredient-list";
import {AddIngredientForm} from "../Ingredients/add-ingredient";

export class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        const routing = (
            <Router>
                <Navbar/>
                <main role="main" className="mt-5">
                    <div className="container">
                        <Route path={"/ingredients"} exact render={
                            () => <IngredientList/>
                        }>
                        </Route>
                        <Route path={"/ingredients/new"} exact render={
                            () => <AddIngredientForm clicked={this.onSubmit}/>
                        }>
                        </Route>
                    </div>
                </main>
            </Router>
        );
        return (
            <div className="App">
                {routing}
            </div>
        )
    }

    onSubmit = (ingredient) => {
        console.log(ingredient);
    }
}

export default App;
