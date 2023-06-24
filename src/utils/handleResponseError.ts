import { AxiosError } from "axios"


type ErrorResponse = {
    error: string
    message: string
    statusCode: number
}

export function handleError(error: AxiosError<ErrorResponse>): void | ErrorResponse {
    if (error.response) {
        return error.response.data
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        console.log(error)
        return {
            error: "network error",
            message: "Something went wrong, Please try again later",
            statusCode: 500,
        }
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message)
    }
}
