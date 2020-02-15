import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="border-secondary border-top pt-2 pb-1">
        <h4 className="w-50 text-center">Item {this.props.item.id}</h4>
        <div className="d-flex">
          <div className="w-50 text-center project-text-large">
            {this.props.item.value}
          </div>
          <div className="d-flex flex-column">
            <button onClick={() => this.props.onIncrement(this.props.item)}>
              Increment
            </button>
            <button onClick={() => this.props.onDecrement(this.props.item)}>
              Decremen
            </button>
            <button
              className="delete-button"
              onClick={() => this.props.onDelete(this.props.item)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
