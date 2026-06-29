export type ServiceCategory = string;

export interface ServiceItemDT {
    id: number;
    keyValue?:string;
    title: string;
    image: string;
    description: string;
    categories?: ServiceCategory[];
    active?:boolean
}

//modern agency service data type
export interface ServiceDT {
    id: number;
    title: string;
    href: string;
    images: string[];
}