import "react-native";
import React from "react";
import App from "../App";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("test 1", () => {
  const tree = renderer.create(<App />);
  const instance = tree.getInstance();
  expect(false).toBe(true);
});
