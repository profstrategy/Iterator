"use client"
import { globalStore } from "@/stores/store";
import { createContext, useContext } from "react";
import { useStore } from "zustand";
import type { Store } from "@/stores/store";


const StoreContext = createContext<typeof globalStore | undefined>(undefined);

interface GlobalStoreProps {
    children: React.ReactNode
}

export const GlobalStore = ({ children }: GlobalStoreProps) => {
    return <StoreContext.Provider value={globalStore}>{children}</StoreContext.Provider>
}


export const useGlobalStore = <T,>(selector: (state: Store) => T): T => {
    const store = useContext(StoreContext);
    if (!store) {
        throw new Error('useGlobalStore must be used within StoreProvider');
    }
    return useStore(store, selector);
};