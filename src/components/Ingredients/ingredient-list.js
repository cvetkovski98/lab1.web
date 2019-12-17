import React from "react";
import {IngredientsService} from "../../repository/ingredientsService";

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
            console.log(responseData);
            this.setState({
                ingredients: responseData
            });
        });
    }

    render() {
        const ingredientRows = [];
        this.state.ingredients.map((value, index) => {
            ingredientRows.push(
                <tr>
                    <td scope="col">{value.name}</td>
                    <td scope="col">{value.amount}</td>
                    <td scope="col">{value.spicy ? "true" : "false"}</td>
                    <td scope="col">{value.veggie ? "true" : "false"}</td>
                    <td scope="col">
                        <button className="btn btn-sm btn-secondary">
                            <span className="fa fa-edit"/>
                            <span><strong>Edit</strong></span>
                        </button>
                        <button className="btn btn-sm btn-outline-secondary ">
                            <span className="fa fa-remove"/>
                            <span><strong>Remove</strong></span>
                        </button>
                        <button className="btn btn-sm btn-outline-dark">
                            <span><strong>Details</strong></span>
                        </button>
                    </td>
                </tr>
            )
        });

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
                <button className="btn btn-outline-secondary">
                    <span><strong>Add new ingredient</strong></span>
                </button>
            </div>
        )
    }
}