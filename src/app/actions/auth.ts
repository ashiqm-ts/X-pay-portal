"use server"
import { deleteSession, setSession } from "@/lib/session";
import axios from "axios"
import { redirect } from "next/navigation";

const API_URL="";

export const loginAction=async(formData:FormData)=>{
    try{
        const response=await axios.get(`${API_URL}/signin?userName=${formData.get("userName")}&password=${formData.get("password")}`);
        const user=response.data[0];
        if(!user) throw new Error("Invalid Credentials"); 
        //set user in the cookies
        await setSession({
            name:user.userName,
            password:user.password,
        });

    }catch(error){
        throw new Error("Failed to Login");
    }
    redirect("/dashboard");
}

export const logoutAction=async()=>{
    // await deleteSession();
    redirect("/sign-in");
}
