import { double } from "@nullvoxpopuli/package-example";
import { expect, test } from "vitest";

test("that double work", () => {
  expect(double(3)).toBe(6);
});
