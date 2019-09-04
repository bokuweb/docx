import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

export enum TableJustifyContentType {
    CENTER = "center",
    LEFT = "left",
    RIGHT = "right",
}

class TableJustifyContentAttributes extends XmlAttributeComponent<{ readonly value: TableJustifyContentType }> {
    protected readonly xmlKeys = { value: "w:val" };
}

export class TableJustifyContent extends XmlComponent {
    constructor(value: TableJustifyContentType) {
        super("w:jc");
        this.root.push(new TableJustifyContentAttributes({ value }));
    }
}
