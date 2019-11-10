import React, { Component } from "react";
import "wired-card";
import "wired-link";
import "wired-divider";
class Contact extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>contact page</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam
          exercitationem magnam esse nisi voluptas iure illum nemo minus illo
          corporis, provident blanditiis eaque ratione ipsum atque temporibus,
          natus et.
        </p>
        <wired-card>
          <h4>alsdjalasdkljald</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste odit
            aperiam minima sunt similique beatae fugiat id eius autem voluptates
            nulla, asperiores consequuntur perspiciatis maiores quae, maxime
            corporis, debitis quod!
          </p>
        </wired-card>
      </div>
    );
  }
}

export default Contact;
