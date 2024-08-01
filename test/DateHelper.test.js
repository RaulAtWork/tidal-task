import { describe, it } from "mocha";
import assert from "assert";

import {
  getTimeInFormatHHMM,
  HHMMtoMinutes,
  timeframeIsBooked,
} from "../src/utils/DateHelper.js";

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
  it("HHMMtoMinutes no hours or minutes", function () {
    assert.equal(HHMMtoMinutes("00:00"), 0);
  });
  it("HHMMtoMinutes hours no minutes", function () {
    assert.equal(HHMMtoMinutes("10:00"), 600);
  });
  it("HHMMtoMinutes no hours yes minutes", function () {
    assert.equal(HHMMtoMinutes("00:15"), 15);
  });
  it("HHMMtoMinutes hours and minutes", function () {
    assert.equal(HHMMtoMinutes("10:15"), 615);
  });
  it("HHMMtoMinutes max hours and minutes", function () {
    assert.equal(HHMMtoMinutes("23:59"), 1439);
  });
});

describe("timeframeIsBooked", function () {
  it("empty booked array", function () {
    let bookedArray = [];
    assert.equal(timeframeIsBooked("10:00", "11:00", bookedArray), false);
  });
  it("collide after", function () {
    let bookedArray = [
      { startTime: "09:30", endTime: "10:30" },
      { startTime: "11:30", endTime: "13:00" },
    ];
    assert.equal(timeframeIsBooked("10:00", "11:00", bookedArray), true);
  });
  it("collide before", function () {
    let bookedArray = [
      { startTime: "09:30", endTime: "10:30" },
      { startTime: "11:30", endTime: "13:00" },
    ];
    assert.equal(timeframeIsBooked("08:00", "10:00", bookedArray), true);
  });
  it("same slot", function () {
    let bookedArray = [
      { startTime: "09:30", endTime: "10:30" },
      { startTime: "11:30", endTime: "13:00" },
    ];
    assert.equal(timeframeIsBooked("09:30", "10:30", bookedArray), true);
  });
  it("covering booked slot", function () {
    let bookedArray = [
      { startTime: "09:30", endTime: "10:30" },
      { startTime: "11:30", endTime: "13:00" },
    ];
    assert.equal(timeframeIsBooked("08:00", "18:30", bookedArray), true);
  });
  it("slot right after", function () {
    let bookedArray = [
      { startTime: "09:30", endTime: "10:30" },
      { startTime: "11:30", endTime: "13:00" },
    ];
    assert.equal(timeframeIsBooked("10:30", "11:30", bookedArray), false);
  });
  it("not colliding, all good", function () {
    let bookedArray = [
      { startTime: "09:30", endTime: "10:30" },
      { startTime: "11:30", endTime: "13:00" },
    ];
    assert.equal(timeframeIsBooked("18:00", "20:30", bookedArray), false);
  });
});
