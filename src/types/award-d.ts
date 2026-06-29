
//define interface for award data DT
export interface awardDT {
    id: number;
    title: string;
    image: string;
    nomination: string;
    year: number;
    delay:string,
    serialNum?:string;
}

export type AwardItemProps = awardDT;
