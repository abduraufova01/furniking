import React, { Component } from "react";
import { Wrap } from "./style";

export default class index extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Item>All</Wrap.Item>
        <Wrap.Item>New Arrivals</Wrap.Item>
        <Wrap.Item>Hot Sale</Wrap.Item>
        <Wrap.Item>Furniture</Wrap.Item>
        <Wrap.Item>Amrature</Wrap.Item>
        <Wrap.Item>Tabble</Wrap.Item>
        <Wrap.Item>Chair</Wrap.Item>
        <Wrap.Item>Sofa</Wrap.Item>
        <Wrap.Item>Mirror</Wrap.Item>
        <Wrap.Item>Stools</Wrap.Item>
        <Wrap.Item border>Benches</Wrap.Item>
      </Wrap>
    );
  }
}
