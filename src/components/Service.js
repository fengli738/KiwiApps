import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Service.css";

export class Service extends Component {
  render() {
    return (
      <section className="container pt-5">
        <div className="row">
          <div className="col-sm-6 mt-5">
            <div className="lead card">
              <div className="card-body">
                <h5 className="card-title">Regular Cleaning</h5>
                <h6 className="card-context">
                  35 dollars per maid hour <br />1 maid and 2 hours minimum
                </h6>
                <p className="card-context">
                  Mirror surface cleaning
                  <br /> Floor vacuum and mopping
                  <br /> Stove countertop degreasing
                  <br /> Toilet bowl cleaning
                  <br /> Shower room/Tub surface cleaning
                  <br />
                  Furniture surface dusting and shining
                  <br /> Rooms freshener
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-5">
            <div className="lead card">
              <div className="card-body">
                <h5 className="card-title">Deep cleaning</h5>
                <h6 className="card-context">
                  45 dollars per maid hour
                  <br />2 maid and 1.5 hours minimum
                </h6>
                <p className="card-context">
                  All regular cleaning services included
                  <br />
                  Vapor cleaning (for bathroom mold and dirty tile grouts)
                  <br />
                  Interior glass
                  <br />
                  Shower room/Tub deep cleaning
                  <br />
                  Small furniture interior cleaning
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-5">
            <div className="lead card">
              <div className="card-body">
                <h5 className="card-title">Carpet cleaning </h5>
                <h6 className="card-context">
                  45 dollars per worker hour
                  <br /> 3 hours minimum
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
