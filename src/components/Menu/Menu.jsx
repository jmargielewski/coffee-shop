import React, { Component } from 'react';
import Img from 'gatsby-image';
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
    coffeeItems: this.props.items.edges,
    categories: getCategories(this.props.items.edges),
  }

  render() {
    const { items, coffeeItems } = this.state;
    if (items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              {coffeeItems.map(({ node }) => (
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
                      <h6 className="mb-0 text-yellow">
                        <small>{node.price}</small>
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
