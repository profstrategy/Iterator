import { CreateGlobalStore, Store } from "@/stores/store";
import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

export type ErrorProviderType = ReturnType<typeof CreateGlobalStore>

const ErrorContext = createContext<ErrorProviderType | undefined>(undefined)

interface ErrorProviderProps {
    children: React.ReactNode
}

export const ErrorProvider = ({ children }: ErrorProviderProps) => {
    const errorReference = useRef<ErrorProviderType>(CreateGlobalStore())

    if (!errorReference.current) {
        errorReference.current = CreateGlobalStore()
    }

    return <ErrorContext.Provider value={errorReference.current}>{children}</ErrorContext.Provider>
}

export const useGlobalError = <T,>(selector: (state: Store) => T): T => {
    const storeError = useContext(ErrorContext);

    if (!storeError) {
        throw new Error('useGlobalError must be used within ErrorProvider')
    }
    return useStore(storeError, selector)
}