import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FormControl, FormField, FormItem, FormLabel, Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LoginFormSchema, loginQuery } from "@/lib/api/login"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useToast } from "@/components/ui/use-toast"
import { GenericAxiosResponse } from "@/lib/plugins/axios/interface"
import { Loader } from "lucide-react"
import { useNavigate } from "react-router-dom"


export default function LoginView() {
    const { toast } = useToast()
    const navigate = useNavigate()
    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            password: "",
            phone: ""
        }
    })
    const queryKey = ['loginKey']
    const { mutateAsync, isPending } = useMutation({
        mutationKey: queryKey,
        mutationFn: async (data: z.infer<typeof LoginFormSchema>) => await loginQuery(data),
        onError: (error: AxiosError<GenericAxiosResponse>) => {
            const message = error.response?.data?.message || 'Une erreur est survenue'
            toast({
                variant: 'destructive',
                description: message,
            })

        },
        onSuccess: () => {
            navigate('/commands')
        }
    })
    async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
        await mutateAsync(values)
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
                                disabled={isPending}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-light">Numéro de téléphone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="699999999" {...field} />

                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                disabled={isPending}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-light">Mot de passe</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="password" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button disabled={isPending} className="bg-white text-black rounded-full text-lg py-5" type="submit">
                                Se connecter
                                {isPending && <Loader size={18} className="animate-spin ml-3" />}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}