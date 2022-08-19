import { getPercents } from "../index";

describe("tests for getPercents function", () => {
  it("should operate correctly with integers, negative numbers, decimal numbers and other types", () => {
    expect(getPercents(30, 200)).toBe(60);
    expect(getPercents(-30, 200)).toBe(60);
    expect(getPercents(15.67856, 346.23575)).toBe(54.28);
    expect(getPercents("foo")).toBe("At least one parameter is not a number");
  });
});
