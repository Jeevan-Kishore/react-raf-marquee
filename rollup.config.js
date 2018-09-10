import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: [
    {format: "cjs", file: "dist/index.cjs.js"},
    {format: "es", file: "dist/index.es.js"}
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ["@babel/preset-react", "@babel/preset-env"]
    })
  ],
  external: ["react","prop-types"]
};