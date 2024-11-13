export interface users {
    id: number,
    name: string,
    username: string,
    email: string,
    position: string,
    passwordhash: string;
}

export interface patient {
    id: number,
    name: string,
    handler: number,
    email: string,
    admitStatus: boolean,
    comments: string,
    visitDate:number,
    address:string,
}