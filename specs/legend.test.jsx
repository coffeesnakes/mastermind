import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Legend from "../src/components/Legend/Legend.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("Legend", () => {
  it("should render the component", () =>
    expect(shallow(<Legend />).exists()).toBe(true));
});
