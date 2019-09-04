import { XmlComponent } from "../../../file/xml-components";
export declare enum TableJustifyContentType {
    CENTER = "center",
    LEFT = "left",
    RIGHT = "right"
}
export declare class TableJustifyContent extends XmlComponent {
    constructor(value: TableJustifyContentType);
}
