import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutButton from "./sign-out-button";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { usersToClinicsTable } from "@/db/schema";

const DashboardPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session?.user) {
        redirect("/authentication")
    }

    //Preciso pegar as clinicas do usuário logado
    const clinics = await db.query.usersToClinicsTable.findMany({
        where: eq(usersToClinicsTable.userId, session.user.id),
    });

    if (clinics.length === 0) {
        // Se o usuário não tiver clínicas, redireciona para a página de criação de clínica
        redirect("/clinic-form");
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