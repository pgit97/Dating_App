import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";

export default async function callbackPage() {
    const {isAuthenticated,getUser}=getKindeServerSession();
    const user = await getUser();
    if(!user){return redirect(
      "/api/auth/login?post_login_redirect_url==http://localhost:3000/callback");
  }
  
   //check if user is already there in neo4j
   //if not create a user

}