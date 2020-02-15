import React, { Component } from "react";
import Item from "../itemlist/item";

class Items extends Component {
  state = {
    index: 0,
    items: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 2 }
    ]
  };

  componentDidMount() {
    this.setState({ index: this.state.items.length });
  }

  handleAdd = () => {
    const items = [...this.state.items];
    const index = this.state.index + 1;
    const newItem = { id: index, value: 0 };
    items.push(newItem);
    this.setState({ items, index });
  };

  handleSort = () => {
    const items = [...this.state.items].sort((a, b) => {
      if (a.value > b.value) return -1;
      if (a.value < b.value) return 1;
      return 0;
    });
    this.setState({ items });
  };

  handleReset = () => {
    const items = [...this.state.items].map(item => {
      item.value = 0;
      return item;
    });
    this.setState({ items });
  };
  handleIncrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value++;
    this.setState({ items });
  };

  handleDecrement = item => {
    if (item.value > 0) {
      const items = [...this.state.items];
      const index = items.indexOf(item);
      items[index] = { ...item };
      items[index].value--;
      this.setState({ items });
    }
  };

  handleDelete = item => {
    const items = [...this.state.items].filter(c => c !== item);
    this.setState({ items: items });
  };

  render() {
    return (
      <div className="w-20 pl-3 pr-3 item-list">
        <section className="d-flex justify-content-center flex-column mb-2">
          <span className="text-big text-center justify-self-center mb-2">
            Items: {this.state.items.filter(e => e.value > 0).length}
          </span>
          <div className="d-flex justify-content-center">
            <button
              onClick={this.handleSort}
              className="button-bar-dark pl-3 pr-3 "
            >
              Sort
            </button>
            <button
              onClick={this.handleAdd}
              className="button-bar-dark ml-2 pl-3 pr-3"
            >
              Add
            </button>
            <button
              onClick={this.handleReset}
              className="button-bar-dark ml-2 pl-3 pr-3"
            >
              Reset
            </button>
          </div>
        </section>
        {this.state.items.map(items => (
          <Item
            key={items.id}
            item={items}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Items;
