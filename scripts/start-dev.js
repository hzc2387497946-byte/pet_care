const { spawn } = require("node:child_process");
const path = require("node:path");

const nextBin = path.join(__dirname, "..", "node_modules", "next", "dist", "bin", "next");

const child = spawn(
  process.execPath,
  [nextBin, "dev", "--hostname", "localhost", "--port", "3000"],
  {
    cwd: path.join(__dirname, ".."),
    detached: true,
    stdio: "ignore",
    windowsHide: true,
  },
);

child.unref();
console.log(`Next.js dev server started with PID ${child.pid}`);
