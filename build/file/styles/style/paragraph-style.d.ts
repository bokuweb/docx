import { ISpacingProperties } from "../../../file/paragraph";
import { XmlComponent } from "../../../file/xml-components";
import { Style } from "./style";
export declare class ParagraphStyle extends Style {
    private readonly paragraphProperties;
    private readonly runProperties;
    constructor(styleId: string, name?: string);
    addParagraphProperty(property: XmlComponent): ParagraphStyle;
    outlineLevel(level: number): ParagraphStyle;
    addRunProperty(property: XmlComponent): ParagraphStyle;
    basedOn(parentId: string): ParagraphStyle;
    quickFormat(): ParagraphStyle;
    next(nextId: string): ParagraphStyle;
    size(twips: number): ParagraphStyle;
    bold(): ParagraphStyle;
    italics(): ParagraphStyle;
    smallCaps(): ParagraphStyle;
    allCaps(): ParagraphStyle;
    strike(): ParagraphStyle;
    doubleStrike(): ParagraphStyle;
    subScript(): ParagraphStyle;
    superScript(): ParagraphStyle;
    underline(underlineType?: string, color?: string): ParagraphStyle;
    color(color: string): ParagraphStyle;
    font(fontName: string): ParagraphStyle;
    characterSpacing(value: number): ParagraphStyle;
    highlight(color: string): ParagraphStyle;
    shadow(value: string, fill: string, color: string): ParagraphStyle;
    center(): ParagraphStyle;
    left(): ParagraphStyle;
    right(): ParagraphStyle;
    justified(): ParagraphStyle;
    thematicBreak(): ParagraphStyle;
    maxRightTabStop(): ParagraphStyle;
    leftTabStop(position: number): ParagraphStyle;
    indent(attrs: object): ParagraphStyle;
    spacing(params: ISpacingProperties): ParagraphStyle;
    keepNext(): ParagraphStyle;
    keepLines(): ParagraphStyle;
    link(link: string): ParagraphStyle;
    semiHidden(): ParagraphStyle;
    uiPriority(priority: string): ParagraphStyle;
    unhideWhenUsed(): ParagraphStyle;
}
