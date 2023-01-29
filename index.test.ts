import { describe, expect, it } from "@jest/globals";
import {
  createTupleTriplet,
  getCuisineOptions,
  getLength,
  getRoleOptions,
  strictCreateTupleTriplet,
} from "./index";

describe("#createTupleTriplet", () => {
  it("returns the correct values", () => {
    expect(createTupleTriplet(1001, "hello there", true)).toEqual([
      1001,
      "hello there",
      true,
    ]);
  });
});

describe("#strictCreateTupleTriplet", () => {
  it("returns the correct values", () => {
    expect(strictCreateTupleTriplet(1001, true, [1001])).toEqual([
      1001,
      true,
      [1001],
    ]);
  });
});

describe("#getRoleOptions", () => {
  it("returns the correct array of options", () => {
    expect(getRoleOptions()).toEqual([
      { label: "Admin", value: "ROLE_ADMIN" },
      { label: "Customer", value: "ROLE_CUSTOMER" },
      { label: "Seller", value: "ROLE_SELLER" },
    ]);
  });
});

describe("#getCuisineOptions", () => {
  it("returns the correct array of options", () => {
    expect(getCuisineOptions()).toEqual([
      { label: "Korean food", value: "CUISINE_KOREAN" },
      { label: "Italian food", value: "CUISINE_ITALIAN" },
      { label: "Thai food", value: "CUISINE_THAI" },
    ]);
  });
});

describe("#getLength", () => {
  it("returns the length of valid arguments", () => {
    expect(getLength("123")).toEqual(3);
    expect(getLength([])).toEqual(0);
  });
});
