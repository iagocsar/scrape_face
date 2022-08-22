import { ReactNode } from "react";
import { Product } from "./Product";
import React from "react";

function getProducts(url) {
  return new Promise((resolve) => {
    let req = new XMLHttpRequest();
    req.onreadystatechange = callBack;
    req.open("POST", "/getItems", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(
      JSON.stringify({
        url: "https://www.facebook.com/marketplace/florianopolis/search?minPrice=1&maxPrice=4000&daysSinceListed=1&query=notebook&exact=false",
      })
    );
    function callBack(t) {
      const target = t.target;
      if (target.readyState == 4) {
        const data = JSON.parse(target.responseText);
        resolve(data);
      }
    }
  });
}

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  async update() {
    let data = await getProducts("");
    this.setProducts(data);
  }
  setProducts(data) {
    this.setState({ items: data });
  }
  componentDidMount() {
    this.update();
  }
  render() {
    return (
      <div className=" bg-neutral-500 justify-center w-full overflow-x-hidden">
        <div className="md:grid md:grid-rows-1 justify-center bg-neutral-500 md:min-w-full">
          {this.state.items.map((item) => {
            return (
              <Product
                title={item.title}
                image={item.image}
                price={item.price}
                url={item.url}
                time={item.time}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
