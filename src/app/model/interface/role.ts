export interface IRole{

    id:number,
    name:string,
    email:string,
    company:string;
}
export interface IDesignation{
    
    country:string;
}
export interface APIResponseModel{
    
    message:string;
    result:boolean;
    data:any;
}


export interface Employee{
    id:string;
    name:string;
    email:string;
    phone:string;
    salary:number
}
