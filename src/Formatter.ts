import { Record } from ".";

/**
 * Formatter
 */
export abstract class Formatter {

    /**
     * Format the record.
     */
    public format(record: Record): string {
        return record.toString();
    }

}
