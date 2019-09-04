import { IgnoreIfEmptyXmlComponent } from "../../../file/xml-components";
import { ITableShadingAttributesProperties } from "../shading";
import { WidthType } from "../table-cell";
import { TableCellMargin } from "./table-cell-margin";
import { ITableFloatOptions } from "./table-float-properties";
import { TableJustifyContentType } from "./table-justify-content";
import { TableLayoutType } from "./table-layout";
export declare class TableProperties extends IgnoreIfEmptyXmlComponent {
    private readonly cellMargin;
    constructor();
    setWidth(width: number, type?: WidthType): TableProperties;
    setJustifyContent(value: TableJustifyContentType): void;
    setLayout(type: TableLayoutType): void;
    setBorder(): TableProperties;
    readonly CellMargin: TableCellMargin;
    setTableFloatProperties(tableFloatOptions: ITableFloatOptions): TableProperties;
    setShading(attrs: ITableShadingAttributesProperties): TableProperties;
}
