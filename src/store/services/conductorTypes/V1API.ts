export type BaseResponse = {
    success: boolean
}

export type ErrorResponse = BaseResponse & { error: string }

export type DataResponse<T> = {
    data: T
}

export type Wemo = {
    ip: string,
    port: number,
    name: string
}

export type GetAllWemosResponse = BaseResponse & DataResponse<Wemo[]>
export type GetStateResponse = BaseResponse & DataResponse<boolean>
export type SetStateResponse = BaseResponse

export type SetStateRequest = {
    ip: string,
    port: number,
    state: boolean
}