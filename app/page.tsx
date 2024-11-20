import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function Home() {
  const {isAuthenticated,getUser}=getKindeServerSession();

  if(!(await isAuthenticated())){
    return redirect(
      "/api/auth/login?post_login_redirect_url==http://localhost:3000/callback");
  }
  const user = await getUser();
  if(!user){return redirect(
    "/api/auth/login?post_login_redirect_url==http://localhost:3000/callback");
}

  return (
    <main>
  <h1>Hi {user.given_name}</h1>
    </main>
  );
}
