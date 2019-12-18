import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Navbar} from '../Navbar/navbar'
import {IngredientList} from "../Ingredients/ingredient-list";
import {AddIngredientForm} from "../Ingredients/add-ingredient";
import {IngredientsService} from "../../repository/ingredientsService";
import {Details} from "../Ingredients/details";

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
                        <Route path={"/ingredients/edit/:name"} exact render={
                            (props) => <AddIngredientForm clicked={this.onEdit} {...props}
                            />
                        }>
                        </Route>
                        <Route path={"/ingredients/:name/details"} exact render={
                            (props) => <Details {...props}/>
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

    onSubmit = (event, data) => {
        event.preventDefault();
        IngredientsService.addIngredient(data).catch(
            error => {
                console.log(error);
            }
        );
        window.location.href = "http://localhost:3000/ingredients";
    };

    onEdit = (event, data, oldName) => {
        event.preventDefault();
        IngredientsService.updateIngredient(data, oldName).catch(
            error => {
                console.log(error);
            }
        );
        window.location.href = "http://localhost:3000/ingredients";
    }
}

export default App;
