import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { SetStateRequest, Wemo } from './conductorTypes/V1API'

const resolveBase = process.env.NODE_ENV === 'production' ? '/api/v1' : 'http://localhost:3030/api/v1'

export const conductorApi = createApi({
    reducerPath: 'conductorApi',
    baseQuery: fetchBaseQuery({ baseUrl: resolveBase }),
    tagTypes: ['Wemo'],
    endpoints: builder => ({
        getAllWemos: builder.query<Wemo[], void>({
            query: () => ({ url: '/getAllWemos' }),
            transformResponse: (response: { data: Wemo[] }) => response.data
        }),
        getWemoState: builder.query<boolean, { ip: string, port: number }>({
            query: (queryParams) => ({ url: `/getState?ip=${queryParams.ip}&port=${queryParams.port}` }),
            providesTags: (result, _, args) =>
                result
                    ? [{ type: 'Wemo' as const, id: args.ip }]
                    : ['Wemo'],
            transformResponse: ( response: { data: boolean }) => response.data
        }),
        setWemoState: builder.mutation<boolean, SetStateRequest>({
            query: ({ ...body }) => ({
                url: `/setState`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: (_, __, arg) => [{ type: 'Wemo', id: arg.ip }],
            transformResponse: (response: { success: boolean }) => response.success
        })
    })
})

export const { useGetAllWemosQuery, useGetWemoStateQuery, useSetWemoStateMutation } = conductorApi