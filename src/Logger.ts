import { Transport } from "./Transport";
import { StdoutTransport } from "./transports/StdoutTransport";

/**
 * Log level
 */
export enum LogLevel {
    /** Trace level */
    TRACE = 0,

    /** Debug level */
    DEBUG = 1,

    /** Info level */
    INFO = 2,

    /** Warning level */
    WARN = 3,

    /** Error level */
    ERROR = 4,

    /** Fatal level */
    FATAL = 5
}

/** Log record */
export type Record = {
    /** Log level of record */
    level: LogLevel;

    /** Creation date of record in unixtime */
    createdAt: number;

    /** Raw arguments of record */
    arguments: any[];
};

export type Filter = ((record: Record) => Record | null | void);

/**
 * Logger
 */
export class Logger {

    /** Transports */
    public transports: Transport[] = [new StdoutTransport()];

    /**
     * Output the logs.
     * @param level Log level
     * @param args Contents
     */
    public log(level: LogLevel, ...args: any[]): void {
        let record: Record = {
            level,
            createdAt: new Date().getTime() / 1000,
            arguments: args
        };

        for (const transport of this.transports) {
            transport.process(record);
        }
    }

    /**
     * Output the trace-level logs.
     * @param args Contents
     */
    public trace(...args: any[]): void { return this.log(LogLevel.TRACE, ...args); }
    /**
     * Output the debug-level logs.
     * @param args Contents
     */
    public debug(...args: any[]): void { return this.log(LogLevel.DEBUG, ...args); }
    /**
     * Output the info-level logs.
     * @param args Contents
     */
    public info(...args: any[]): void { return this.log(LogLevel.INFO, ...args); }
    /**
     * Output the warn-level logs.
     * @param args Contents
     */
    public warn(...args: any[]): void { return this.log(LogLevel.WARN, ...args); }
    /**
     * Output the error-level logs.
     * @param args Contents
     */
    public error(...args: any[]): void { return this.log(LogLevel.ERROR, ...args); }
    /**
     * Output the fatal-level logs.
     * @param args Contents
     */
    public fatal(...args: any[]): void { return this.log(LogLevel.FATAL, ...args); }


}