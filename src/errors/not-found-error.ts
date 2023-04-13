import { ApplicationError } from "@/protocols";

export function notFoundError(): ApplicationError {
    return {
        name: "Not Found",
        message: "Entity not found",
    };
}