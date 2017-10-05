import {ETaskStatuses} from "../constants/index";

declare interface ITask {
    name: string;
    number: string;
    status: ETaskStatuses;
    text: string;
    comments?: never;
    tags: Array<string>;
}
