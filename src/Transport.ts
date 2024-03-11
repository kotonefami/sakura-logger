import { Filter, Record } from ".";
import { Formatter } from "./Formatter";
import { DefaultFormatter } from "./formatters/DefaultFormatter";

/**
 * Transport
 */
export abstract class Transport {

    /** Filters */
    public filters?: Filter[];

    /** Formatter */
    public formatter: Formatter = new DefaultFormatter();

    /**
     * Process the record.
     */
    public process(record: Record): void {}

}
