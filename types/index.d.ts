declare module 'color-sequences' {

  export interface DataSegment {
    label: string
    value: number
  }
  export interface ColoredDataSegment {
    label: string
    value: number
    color: string
  }
  export interface InjectColorOptions {
    format?: 'hash'|'rgb'
    satBase?: number
    satRange?: number,
    lumBase?: number,
    lumRange?: number
  }

  declare function getPercentageString(total: number, value: number): string;
  
  export default function injectColor(total: number, data: DataSegment[], options?: InjectColorOptions): ColoredDataSegment[];
}

