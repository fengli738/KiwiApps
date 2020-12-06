import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Service.css";

export class Contact extends Component{
    render(){
        return(
           <section className="container lead">
               <h2 className="lead">How to Contact Us</h2>
               <address className="lead contacter">
                   <strong>Zhen Kang</strong><br/>
                   (312)-363-8330<br/>
                   info@kiwicleans.com
               </address>
           </section>
        )
    }
}