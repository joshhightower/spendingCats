
export class LoginRequestVO{
   private email:string;
   private password:string;

   constructor(userName:string,password:string){
      this.email = userName;
      this.password = password;
   }
}