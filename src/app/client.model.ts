export class Client
{
    constructor
    (
        public Id: number,
        public lastName: string,
        public firstName: string,
        public secondName: string,
        public gender: string,
        public yearBirth: Date,
        public riskGroup: string,
        public pasportNumber: number,
        public city: string,
        public country: string,
        public email: string
    ) {}
}

