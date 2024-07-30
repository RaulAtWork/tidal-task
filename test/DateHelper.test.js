import { describe, it } from "mocha";
import assert from "assert";

import { getTimeInFormatHHMM } from "../src/utils/DateHelper.js";

describe("DateHelper", function () {
  it("getTimeInFormatHHMM two digits", function () {
    let date = new Date(2020, 1, 1, 10, 10, 1, 1);
    assert.equal(getTimeInFormatHHMM(date), "10:10");
  });
  it("getTimeInFormatHHMM one digit", function () {
    let date = new Date(2020, 1, 1, 1, 1, 1, 1);
    assert.equal(getTimeInFormatHHMM(date), "01:01");
  });
  it("getTimeInFormatHHMM afternoon", function () {
    let date = new Date(2020, 1, 1, 18, 1, 1, 1);
    assert.equal(getTimeInFormatHHMM(date), "18:01");
  });
});
