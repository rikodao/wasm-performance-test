const fs = require("fs");
const wasmBuffer = fs.readFileSync("./pkg/hello_wasm_bg.wasm");
WebAssembly.instantiate(wasmBuffer).then(async (wasmModule) => {
  // Exported function live under instance.exports
  const fibonacci = wasmModule.instance.exports.fibonacci;

  let count = 1;

  while (count <= 45) {
    await monitor("WASM fibonacci", fibonacci, count).then(
      async () => await monitor("JS fibonacci", fib, count)
    );
    ++count;
  }

  async function monitor(monitorName, fun, count) {
    // alert(monitorName + "スタート" + count + "回目");
    console.time(monitorName + count + "回目");
    await fun(count);
    console.timeEnd(monitorName + count + "回目");
    // alert(monitorName + "終了" + count + "回目");
  }
  function fib(n) {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
  }
});
