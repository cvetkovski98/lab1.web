import React from "react";
import {IngredientsService} from "../../repository/ingredientsService";
import {IngredientRow} from "./ingredient-row";
import {Link} from "react-router-dom";

export class IngredientList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            ingredients: []
        }
    }

    componentDidMount() {
        const promise = IngredientsService.fetchIngredients();
        let responseData;
        promise.then((data) => {
            responseData = data.data;
            this.setState({
                ingredients: responseData
            });
        });
    }

    onDelete = (event, name) => {
        const promise = IngredientsService.deleteIngredient(name);
        promise.then(
            this.setState((oldState) => {
                return {
                    ingredients: oldState.ingredients.filter(i => i.name !== name)
                }
            })
        )
    };

    render() {
        const ingredientRows = [];
        this.state.ingredients.map((ingredient, index) =>
            ingredientRows.push(
                <IngredientRow value={ingredient}
                               key={ingredient.name}
                               handleDelete={this.onDelete}
                />
            )
        );

        return (
            <div className="row">
                <h4 className="text-upper text-left">Ingredients</h4>
                <div className="table-responsive">
                    <table className="table tr-history table-striped small">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Spicy</th>
                            <th scope="col">Veggie</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {ingredientRows}
                        </tbody>
                    </table>
                </div>
                <Link to={"/ingredients/new"} className="btn btn-outline-secondary">
                    <span><strong>Add new ingredient</strong></span>
                </Link>
            </div>
        )
    }
}