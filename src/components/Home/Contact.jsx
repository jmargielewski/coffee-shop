import React from 'react';
import Title from '../Title';

const Contact = () => (
  <section className="contact py-5">
    <Title title="contact us" />
    <div className="row">
      <div className="col-10 col-sm-8 col-md-6 mx-auto">
        <form action="https://formspree.io/example@example.com" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="john smith"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="john.smith@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              rows={10}
              type="text"
              className="form-control"
              name="description"
              id="description"
              placeholder="your description here..."
            />
          </div>
          <button
            type="submit"
            className="btn btn-yellow btn-block text-capitalize mt-5"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
