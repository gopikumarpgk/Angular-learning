export class UsersDetails{
    limit:number;
skip:any;
total:number;
users: UserDetails[];

}

export class UserDetails{

    id:number;
    firstName:string;
    lastName:string;
    gender:string;
    birthDate:Date;
    phone:number;
    university:string;
    image:string;

}