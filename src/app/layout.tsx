import { RefineProvider } from '@/components/refine'
import { ThemeProvider } from '@/theme/theme-provider'

async function RootLayout({
    children,
}: {
    children: React.ReactNode
}): Promise<JSX.Element> {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <RefineProvider>{children}</RefineProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
