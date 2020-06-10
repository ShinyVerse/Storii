import React from "react";
import { shallow } from "enzyme";

import { List } from "./List";

const DummyComponent = (item) => {
  return <div>{item.name}</div>;
};

describe("List", () => {
  it("renders to page with default empty items prop", () => {
    const wrapper = shallow(<List />);
    const listElement = wrapper.find('[data-test="list"]');

    expect(listElement.length).toBe(1);
  });

  it("renders correct amount of items when given", () => {
    const items = [
      {
        name: "Bob",
      },
      {
        name: "Ashe",
      },
    ];

    const wrapper = shallow(<List items={items} Component={DummyComponent} />);
    const listItemElement = wrapper.find('[data-test="list-item"]');

    expect(listItemElement.length).toBe(2);
  });

  it("renders correct info to each child Component", () => {
    const entries = [
      {
        content: "I enjoy Mondays",
      },
      {
        content: "wtf mate?",
      },
    ];

    const wrapper = shallow(
      <List items={entries} Component={DummyComponent} />,
    );
    const listItemElements = wrapper.find('[data-test="list-item"]');

    listItemElements.forEach((element, index) => {
      expect(element.props().item).toBe(entries[index]);
    });
  });
});
