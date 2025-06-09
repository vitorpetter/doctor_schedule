"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const SignOutButton = () => {

    const router = useRouter()
    return ( 
         <Button onClick={() => authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/authentication");
                }
            }
            })} className="bg-transparent hover:bg-transparent cursor-pointer">
            <LogOut color="var(--primary)"/>
         </Button>
     );
}
 
export default SignOutButton;