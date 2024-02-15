import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FormControl, FormField, FormItem, FormLabel, Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
    password: z.string(),
    phone: z.number().min(9, 'Numéro invalide').max(9)
})



export default function LoginView() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            phone: 0
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
    }
    return (
        <div className="w-full min-h-svh min-h-screen flex flex-col justify-center items-center bg-black text-white">
            <div className="flex flex-col px-3">
                <h1 className="text-4xl font-medium">Connectez vous à votre compte.</h1>
                <div className="mt-8">
                    <Form {...form}>
                        <form className="flex flex-col space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-light">Numéro de téléphone</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="699999999" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-light">Mot de passe</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="password" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className="bg-white text-black rounded-full" type="submit">Se connecter</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}