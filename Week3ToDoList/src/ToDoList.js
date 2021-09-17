import React from "react";
import { items } from './store';


export default class ToDo extends React.Component {


    render(){

        const listItems = items.map((item) => {

            return (
                <div key = {item.id}>
                <ul>
                    <li>
                    <input type="checkbox" className="items"
                            id={item.id}  checked={item.isCompleted}  onChange={this.props.toggleComplete}
                         ></input>
                        <label>{item.text}</label>
                    <button className="button" onClick={() => this.props.dltBtn(this.props.id)}> X </button>
                    </li>
                </ul>
                </div>
            )
        })



        return (
            <>
                {listItems}
            </>
        )
    };
}
