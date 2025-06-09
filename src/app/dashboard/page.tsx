import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutButton from "./sign-out-button";
import { redirect } from "next/navigation";

const DashboardPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session?.user) {
        redirect("/authentication")
    }

    return ( 
        <div className="text-center p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p>Welcome to your dashboard, {session?.user.name}</p>
                <SignOutButton/>
        </div>
     );
}
 
export default DashboardPage;