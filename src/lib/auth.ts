import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from '@/db/schema';

import { db } from "@/db"; // Adjust the import path as necessary

export const auth = betterAuth({
     database: drizzleAdapter(db, {
        provider: "pg", 
        usePlural: true,
        schema, // Your Drizzle schema
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
    emailAndPassword: {
        enabled: true,
    },
})