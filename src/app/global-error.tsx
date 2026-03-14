"use client";

import { Header, Footer } from "@/components/layout";
import { CtaButton } from "@/components/ui";
import { sora, plusJakartaSans } from "@/utils/fonts";
import "./globals.css";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const theme = process.env.NEXT_PUBLIC_CURRENT_THEME ?? "dark";

    return (
        <html lang="en" className={theme}>
            <body className={`${sora.className} ${plusJakartaSans.variable} antialiased`}>
                <Header />
                <main className="flex min-h-[75vh] flex-col items-center justify-center bg-background px-6 text-center">
                    <div className="max-w-md">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                            <span className="text-3xl font-bold text-primary">!</span>
                        </div>
                        
                        <h1 className="mt-8 text-3xl font-bold text-foreground sm:text-4xl">
                            Something went wrong
                        </h1>
                        
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            A critical error occurred. We've been notified and are working to fix it.
                        </p>
                        
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <CtaButton 
                                onClick={() => reset()}
                                variant="primary"
                            >
                                Try again
                            </CtaButton>
                        </div>
                    </div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
