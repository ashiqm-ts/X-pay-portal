import { cookies } from "next/headers";

//set session cookies
export async function setSession(user:userType) {
    const cookieStore=await cookies();
    cookieStore.set("session",JSON.stringify(user),{
        httpOnly:true,
        secure:process.env.NODE_ENV==="development",
        maxAge:60*60*24*7,
        path:"/",
    });
}

//get session cookies
export async function getSession() {
    const cookieStore=await cookies();
    const session=cookieStore.get("session")?.value;
    if(!session) return null;
    const user=JSON.parse(session) as userType;
    return user;
    
}

//delete session cookies
export async function deleteSession() {
    const cookieStore=await cookies();
    cookieStore.delete("session");
}

