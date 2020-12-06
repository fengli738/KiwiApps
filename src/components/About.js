import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import after1 from "../picture/1after.JPG";
import before1 from "../picture/1before.jpg";
import after2 from "../picture/2after.JPG";
import before2 from "../picture/2before.jpg";
import after3 from "../picture/3after.jpg";
import before3 from "../picture/3before.JPG";
import after4 from "../picture/4after.jpg";
import before4 from "../picture/4before.JPG";
import "../Service.css";

export class About extends Component {
  render() {
    return (
      <section className="container">
        <div>
          <p className="lead col-sm-6 mt-5">
            KiwiClean is an all-asian owned premier residential and commercial
            cleaning company. Servicing Chicago and urban Chicago Area. We do
            have our own 50 points check list to guarantee ensures client
            satisfaction.We do offer General Cleaning, Deep Cleaning, Carpet
            Cleaning, and Commercial Cleaning!{" "}
          </p>
        </div>
        <div className="row">
          <div className="card mr-5 mt-5">
            <div className="card-title">
              <h2 className="lead">Before:</h2>
            </div>
            <img className="rounded  img-fluid" src={before1} alt="before1 IMG"></img>
          </div>
          <div className="card mr-5 mt-5">
            <div className="card-title">
              <h2 className="lead">After:</h2>
            </div>
            <img
              className="rounded  img-fluid card-img-center"
              src={after1} alt="after1 IMG"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="card mr-5 mt-5">
            <div className="card-title">
              <h2 className="lead">Before:</h2>
            </div>
            <img className="rounded  img-fluid" src={before2} alt="before2 IMG"></img>
          </div>
          <div className="card mr-5 mt-5">
            <div className="card-title">
              <h2 className="lead">After:</h2>
            </div>
            <img
              className="rounded  img-fluid card-img-center"
              src={after2} alt="after2 IMG"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="card mr-5 mt-5">
            <div className="card-title">
              <h2 className="lead">Before:</h2>
            </div>
            <img className="rounded  img-fluid" src={before3} alt="before3 IMG"></img>
          </div>
          <div className="card mr-5 mt-5">
            <div className="card-title">
              <h2 className="lead">After:</h2>
            </div>
            <img
              className="rounded  img-fluid card-img-center"
              src={after3} alt="after3 IMG"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="card mr-5 mt-5">
            <div className="card-title">
              <h2 className="lead">Before:</h2>
            </div>
            <img className="rounded  img-fluid" src={before4} alt="before4 IMG"></img>
          </div>
          <div className="card mr-5 mt-5">
            <div className="card-title">
              <h2 className="lead">After:</h2>
            </div>
            <img
              className="rounded  img-fluid card-img-center"
              src={after4} alt="after4 IMG"
            ></img>
          </div>
        </div>
      </section>
    );
  }
}
