import { build } from "esbuild";

build({
    entryPoints: ["./src/index.ts"],
    outfile: "./dist/index.esm.js",
    format: "esm",
    bundle: true
});
build({
    entryPoints: ["./src/index.ts"],
    outfile: "./dist/index.cjs.js",
    format: "cjs",
    bundle: true
});