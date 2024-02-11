import test from "node:test";
import log from "../src";

test("Basic log", () => {
    log.trace("Log level trace");
    log.debug("Log level debug");
    log.info("Log level info");
    log.warn("Log level warn");
    log.error("Log level error");
    log.fatal("Log level fatal");
});