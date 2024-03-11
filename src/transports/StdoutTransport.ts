import { LogLevel, Record } from "..";
import { Transport } from "../Transport";

/**
 * stdout Transport
 */
export class StdoutTransport extends Transport {

    public process(record: Record): void {
        if (record.level >= LogLevel.WARN) {
            process.stderr.write(this.formatter.format(record) + "\n");
        } else {
            process.stdout.write(this.formatter.format(record) + "\n");
        }
    }

}
