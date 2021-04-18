import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import GuessPeg from "../src/components/GuessPeg/GuessPeg.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("GuessPeg", () => {
  it("should render the component", () =>
    expect(shallow(<GuessPeg />).exists()).toBe(true));
});
