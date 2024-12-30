import React, { ReactNode } from "react";

export function PublicPagesLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen pt-[100px]">
            
            {children}
        </div>
    )
}