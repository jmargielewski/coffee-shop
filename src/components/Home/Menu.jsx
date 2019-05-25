import React, { Component } from 'react';
import Img from 'gatsby-image';
import shortid from 'shortid';
import { formatter } from '../../helpers';
import Title from '../Title';

const getCategories = items => items.reduce(
    (acc, item) => {
      if (!acc.includes(item.node.category)) {
        acc.push(item.node.category);
      }
      return acc;
    },
    ['all'],
  );

class Menu extends Component {
  state = {
    items: this.props.items.edges,
    filteredItems: this.props.items.edges,
    categories: getCategories(this.props.items.edges),
  }

  handleItem = (category) => {
    const tempItems = [...this.state.items];
    if (category === 'all') {
      this.setState(() => ({ filteredItems: tempItems }));
    } else {
      const items = tempItems.filter(({ node }) => node.category === category);
      this.setState(() => ({ filteredItems: items }));
    }
  }

  render() {
    const { items, filteredItems, categories } = this.state;
    if (items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 mx-auto text-center">
                {categories.map(category => (
                  <button
                    key={shortid.generate()}
                    type="button"
                    className="btn btn-yellow text-capitalize m-3"
                    onClick={() => this.handleItem(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="row">
              {filteredItems.map(({ node }) => (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <div>{node.image && <Img fixed={node.image.fixed} />}</div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small>{node.title}</small>
                      </h6>
                      <h6 className="mb-0 text-brown">
                        <small>{formatter.format(node.price)}</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of out menu" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>there are no items to display</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
