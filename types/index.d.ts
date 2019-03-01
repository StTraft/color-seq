/// <reference types="node" />

declare module 'color-sequences' {

  export interface DataSegment {
    label: string
    value: number
    [k : string]: any
  }
  export interface ColoredDataSegment {
    label: string
    value: number
    color: string
    [k: string]: any
  }
  export interface InjectColorOptions {
    format?: 'hash'|'rgb'
    inject?: boolean
    satBase?: number
    satRange?: number
    lumBase?: number
    lumRange?: number
  }
  
  export function getPercentageString(total: number, value: number): string;
  
  export default function injectColor(total: number, data: DataSegment[], options?: InjectColorOptions): ColoredDataSegment[];
}

  

