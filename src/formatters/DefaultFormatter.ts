import { LogLevel, Record } from "..";
import { Formatter } from "../Formatter";

export class DefaultFormatter extends Formatter {

    public format(record: Record): string {
        const padForTime = (value: number): string => value.toString().padStart(2, "0");
        const createdAt = new Date(record.createdAt * 1000);

        let date = `${padForTime(createdAt.getHours())}:${padForTime(createdAt.getMinutes())}:${padForTime(createdAt.getSeconds())}`;
        let level = ["\x1b[34m", "\x1b[36m", "\x1b[32m", "\x1b[33m", "\x1b[31m", "\x1b[41m\x1b[30m"][record.level] + LogLevel[record.level] + "\x1b[0m";

        return `[${date}] [${level}] ${record.arguments.join(" ")}`;
    }

}