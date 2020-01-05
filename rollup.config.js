import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";

export default {
  input: "src/index.js",
  output: {
    file: "index.min.js",
    format: "esm"
  },
  external: ["react-jsdom"],
  plugins: [nodeResolve({ preferBuiltins: true }), commonjs(), json()]
};
