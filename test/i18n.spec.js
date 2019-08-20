const expect = require("chai").expect;
const fs = require("fs");

const compare = (origin, translate) => {
  const keys = Object.keys(origin);
  expect(keys.length).to.equal(Object.keys(translate).length);
  for (const key of keys) {
    if (typeof origin[key] !== "object") {
      expect(translate[key]).to.not.undefined;
    } else {
      compare(origin[key], translate[key]);
    }
  }
}

describe("test i18n", function() {
  it("translation key's length is equal to key's length of zh-CN and each key isn't undefined", function() {
    const translations = fs.readdirSync("i18n").filter(name => name !== "zh-CN.json");
    const zhCNs = require("../i18n/zh-CN.json");
    for (const translation of translations) {
      compare(zhCNs, require("../i18n/" + translation));
    }
  })
})