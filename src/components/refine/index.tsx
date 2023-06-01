'use client'

import { Refine } from '@refinedev/core'
import dataProvider from '@refinedev/simple-rest'
import nextjsAppRouterProvider from '@refinedev/nextjs-router/app'

const simpleRestProvider = dataProvider('API_URL')

export function RefineProvider({ children }: { children: React.ReactNode }) {
    console.log('Refine')

    return (
        <Refine
            routerProvider={nextjsAppRouterProvider}
            dataProvider={simpleRestProvider}
            resources={[
                {
                    name: 'test',
                    list: '/test',
                    create: '/test/create',
                },
            ]}
            options={{
                syncWithLocation: true,
            }}
        >
            {children}
        </Refine>
    )
}
