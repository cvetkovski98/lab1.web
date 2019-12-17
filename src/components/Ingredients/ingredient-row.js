import React from "react";

export const IngredientRow = (props) => {

    return (
        <tr>
            <td scope="col">{props.value.name}</td>
            <td scope="col">{props.value.amount}</td>
            <td scope="col">{props.value.spicy ? "true" : "false"}</td>
            <td scope="col">{props.value.veggie ? "true" : "false"}</td>
            <td scope="col">
                <button className="btn btn-sm btn-secondary" >
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



};