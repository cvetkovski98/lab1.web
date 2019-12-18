import React from "react";
import {IngredientsService} from "../../repository/ingredientsService";

export class Details extends React.Component {


    constructor(props, context) {
        super(props, context);
        console.log(this.state)

        this.state = {
            ingredient: {},
            pizzas: []
        };
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        console.log(name);
        IngredientsService.fetchIngredient(name).then(
            resp => {
                this.setState(() => {
                    return {
                        ingredient: resp.data
                    }
                })
            }
        );
        IngredientsService.fetchPizzasForIngredient(name).then(
            resp => {
                this.setState(() => {
                    console.log(resp.data);
                    return {
                        pizzas: resp.data
                    }
                })
            }
        );
        console.log(this.state)
    }

    renderPizzaNames = () => {
        const data = [];
        this.state.pizzas.map(pizza => {
            data.push(<li>{pizza.name}</li>)
        });
        return <ul>{data}</ul>;
    };

    render() {
        return (
            <div>
                <h1>{this.state.ingredient.name}</h1>
                <h2>{this.state.ingredient.spicy ? "This ingredient is spicy" : "This ingredient is not spicy"} </h2>
                <h2>{this.state.ingredient.veggie ? "This ingredient is vegetarian" : "This ingredient is not vegetarian"} </h2>
                <h3>{this.state.ingredient.amount}</h3>
                {this.state.pizzas ? this.renderPizzaNames() : <h1>This ingredient is not in any pizza</h1>}

            </div>
        )
    }

}