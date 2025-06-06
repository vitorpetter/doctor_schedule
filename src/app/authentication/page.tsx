"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUpForm from "./components/sign-up-form";

const AuthenticationPage = () => {
   
    return <div className="flex h-screen w-screen items-center justify-center">
        <Tabs defaultValue="login" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Criar conta</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <Card>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>
                            Faça login para continuar.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">

                    </CardContent>
                    <CardFooter>
                        <Button>Entrar</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="register">
                <SignUpForm/>
            </TabsContent>
        </Tabs>
    </div>;
}

export default AuthenticationPage;