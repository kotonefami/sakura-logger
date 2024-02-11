import { build } from "esbuild";
import { bundle } from "dts-bundle";

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
bundle({
    name: "sakura-logger",
    main: "./dist/declaration/index.d.ts",
    out: "../index.d.ts"
});