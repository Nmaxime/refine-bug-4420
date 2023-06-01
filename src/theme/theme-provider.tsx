'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { RefineThemes } from '@refinedev/chakra-ui'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={RefineThemes.Blue}>{children}</ChakraProvider>
}
