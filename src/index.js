const benchmark = require("benchmark");
const suite = new benchmark.Suite();

suite
  .add("正则", () => {
    /o/.test("Hello world");
  })
  .add("indexOf", () => {
    "Hello world".indexOf("o");
  })
  .on("cycle", (event) => {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("the fasted method is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
