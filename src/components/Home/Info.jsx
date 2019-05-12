import React from 'react';
import { Link } from 'gatsby';
import Title from '../Title';

const Info = () => (
  <section className="py-5">
    <div className="constainer">
      <Title title="our story" />
      <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-muted mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            accusamus doloremque dolore necessitatibus delectus nemo dolorem
            ducimus vel aspernatur assumenda repellendus nisi enim voluptatibus,
            ullam animi soluta ea recusandae minus sint, commodi eum pariatur
            vitae? Praesentium odit atque distinctio rem dolorum totam nisi
            itaque, natus alias. Suscipit minus reprehenderit qui?
          </p>
          <Link to="/about">
            <button type="button" className="btn text-uppercase btn-yellow">
              about page
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Info;
