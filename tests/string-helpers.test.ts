import { exclaim } from "@nullvoxpopuli/package-example/string-helpers";
import { expect, test } from "vitest";

test('adds !!"', () => {
  expect(exclaim("Hello there")).toBe("Hello there!!!");
});
