import { useToast } from "@/hooks/use-toast"

export const toastMessage = (description: string) => {
    const { toast } = useToast()

    return (toast({
        description: description,
        title: 'Network error',
    }))
}