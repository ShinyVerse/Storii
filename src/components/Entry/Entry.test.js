import React from "react";
import { shallow } from "enzyme";

import { Entry } from "./Entry";

describe("Entry", () => {
  const defaultProps = {
    writer: {
      penName: "testy",
    },
    content: "I am a fantastic content",
  };
  it("renders to page", () => {
    const wrapper = shallow(<Entry item={defaultProps} />);
    const entryElement = wrapper.find('[data-test="entry"]');

    expect(entryElement.length).toBe(1);
  });
  it("includes penName and content", () => {
    const wrapper = shallow(<Entry item={defaultProps} />);
    const contentElement = wrapper.find('[data-test="entry"]');

    expect(contentElement.text()).toBe("testy: I am a fantastic content");
  });
});
