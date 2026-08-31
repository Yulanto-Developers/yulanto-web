declare module "page-flip" {
  export interface PageFlipOptions {
    width: number;
    height: number;
    size?: "fixed" | "stretch";
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    maxShadowOpacity?: number;
    showCover?: boolean;
    usePortrait?: boolean;
    startPage?: number;
    [key: string]: unknown;
  }

  export class PageFlip {
    constructor(element: HTMLElement, options?: PageFlipOptions);
    loadFromHTML(items: NodeListOf<HTMLElement> | HTMLElement[]): void;
    getPageCount(): number;
    getCurrentPageIndex(): number;
    flip(pageIndex: number): void;
    on(event: string, callback: (e: { data: unknown }) => void): void;
    destroy(): void;
  }
}