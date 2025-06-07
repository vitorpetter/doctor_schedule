import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db"; // Adjust the import path as necessary

export const auth = betterAuth({
     database: drizzleAdapter(db, {
        provider: "pg", 
        usePlural: true,
        // or "mysql", "sqlite"
    }),
    user:{
        modelName:"usersTable",
    },
    session: {
        modelName: "sessionsTable",
    },
    account: {
        modelName: "accountsTable",
    },
    verification: {
        modelName: "verificationsTable",
    },
})