import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod"
export type DiscountStepProps = {
    discount: number,
    setDiscount: Dispatch<React.SetStateAction<number>>
    billingPrice: number
}


export default function DiscountStep({ setDiscount, billingPrice }: DiscountStepProps) {
    const [discountPercentage, setDiscountPercentage] = useState(0)
    const [showDiscount, setShowDiscount] = useState(false)
    const [inputDiscount, setInputDiscount] = useState(0)

    const DiscountFormSchema = z.object({
        discount: z.string()
            .trim()
            .min(0)
            .max(billingPrice, 'La valeur de la réduction ne doit pas être supérieure au montant de la facture !')
            .transform(value => parseFloat(value))
    })

    const form = useForm<z.infer<typeof DiscountFormSchema>>({
        resolver: zodResolver(DiscountFormSchema),
        defaultValues: {
            discount: 0
        }
    })

    useEffect(() => {
        const percentageReduction = (inputDiscount / billingPrice) * 100;
        const roundedPercentage = Math.round(percentageReduction * 100) / 100;
        setDiscountPercentage(roundedPercentage)
    }, [inputDiscount, billingPrice])

    useEffect(() => {
        if (showDiscount === false) {
            setDiscount(0)
            setInputDiscount(0)
            form.reset()
        }
    }, [showDiscount, setDiscount, form])



    const handleChange = () => {
        setInputDiscount(form.getValues().discount)
        // console.log("🚀 ~ handleChange ~ discountstate:", form.getValues().discount)
        // setInputDiscount(e.target.value as unknown as number)
    }

    const onSubmit = (values: z.infer<typeof DiscountFormSchema>) => {
        setDiscount(values.discount)
    }



    return (
        <>
            <Button onClick={() => setShowDiscount(!showDiscount)} variant='link' className="p-0 text-lg font-medium hover:underline-offset-1 hover:underline text-blue-600">Ajouter une réduction ?</Button>
            {
                showDiscount && (
                    <div className="w-full flex flex-col space-y-2">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="w-full flex flex-col space-y-2">
                                    <FormField
                                        control={form.control}
                                        name="discount"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl onChange={handleChange}>
                                                    <Input type="number" className="grow bg-inherit" {...field} />
                                                </FormControl>
                                                {
                                                    form.formState.errors.discount &&
                                                    <FormDescription className="text-red-500">
                                                        La valeur de la réduction ne doit pas être supérieure au montant de la facture !
                                                    </FormDescription>
                                                }
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        disabled={inputDiscount <= 0}
                                        className="bg-blue-500 py-5"
                                    >
                                        Appliquer {0 < inputDiscount && discountPercentage <= 100 && <strong className="ml-1">(-{discountPercentage}%)</strong>}
                                    </Button>
                                </div>

                            </form>
                        </Form>


                    </div>
                )
            }
        </>
    )
}