"use server";

import { headers } from "next/headers";

import { db } from "@/db";
import { clinicsTable, usersToClinicsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const createClinic = async (name: string) => {
    //Verificar se o usuário setá logado
    const session = await auth.api.getSession({
        headers: await headers()
    });
    //Se não estiver logado, lançar um erro
    if (!session?.user) {
        throw new Error("Usuário não autenticado");
    }

    const [clinic] = await db.insert(clinicsTable).values({name}).returning();
    await db.insert(usersToClinicsTable).values({
        userId: session.user.id,
        clinicId: clinic.id,
    });
    redirect("/dashboard");
};