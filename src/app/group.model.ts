export class Group
{
    constructor
    (
        public Id: number,
        public groupName: string,
        public lowerLimit: number,
        public upperLimit: number
    ) {}
}