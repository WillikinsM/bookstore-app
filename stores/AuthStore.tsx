import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import authHeader from "../service/authHeader";

const API_URL = "http://localhost:8080";


let modAxios = axios.create({
    headers:{
      Authorization: authHeader()
    }
  })
  

  interface CurrentUser {
    token: string;
    authority: string;
    email: string;
  }

class AuthStore{
     isLoggedIn: boolean = false;
     authenticated: boolean = false;
     error:any = null;


     username : CurrentUser = {
        token: "",
        authority: "",
        email: ""
     };


    constructor(){
        makeAutoObservable(this);
    }

    
    register = async (firstname:string,lastname:string,email: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/api/v1/registration`, {
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: password,
            });
            runInAction(() => {
                this.error = false;
            });

        }catch(erroRegister){
            
            if(erroRegister instanceof Error){
             let statS = erroRegister.message.split("code")[1];
             let statI = parseInt(statS);

             if(statI === 500){
                runInAction(() => {
                    this.error = true;
                  }
                );
             }else{
                console.log(erroRegister);
             }

            }
        }
        
        return this.error;
    }


    login = async (email: string, password: string) => {
        
          try {
            const response = await axios.post(`${API_URL}/login`, {
                username: email,
                password: password,
            },{headers: {'Content-Type': 'application/json'}});
            
            runInAction(() => {
                if(response.headers.authorization){
                    var data={
                        acessToken:response.headers.authorization,
                        email:email,
                        authority: ""
                };
                localStorage.setItem("user", JSON.stringify(data));
                this.authenticated = true;
                this.error = false;
                this.getUserAuthorities();

            }

            });
          }
          catch (errorLogin) {

            if(errorLogin instanceof Error){

             let statS = errorLogin.message.split("code")[1];
             let statI = parseInt(statS);

                if(statI === 401 || statI === 403){
                    runInAction(() => {
                        this.authenticated = false;
                        this.error = true;
                      }
                    );

                }else{
                    console.log(errorLogin);
                }
            
            }
           
            
          }

          return this.authenticated;
    }

    logout =  () => {
        localStorage.removeItem("user"); 
        this.getUserStatus();
    }

    getCurrentUser = () => {
        const userStr = localStorage.getItem("user");
        if(userStr){
         this.username = JSON.parse(userStr);
        
        }
    }

    getUserStatus = () => {
        const userStr = localStorage.getItem("user");

        if(userStr !== null){
            this.isLoggedIn = true;
        }else{
            this.isLoggedIn = false;
        }
    }

    getUserAuthorities = async () => {
        this.getCurrentUser();
        
        try {
            const response = await modAxios.
            get(`${API_URL}/api/v1/registration/user/${this.username.email}`);

            runInAction(() => {

              this.username.authority = response.data[4].authority;

              localStorage.removeItem("user"); 
              localStorage.setItem("user", JSON.stringify(this.username));
            });

        } catch (err) {
            console.log(err);
        }
    }
}

const authStore = new AuthStore();
export default authStore;