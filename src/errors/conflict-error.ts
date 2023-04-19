import { ApplicationError } from "../protocols";

export function conflictError(): ApplicationError {
    return {
        name: "Conflict",
        message: "Entity alredy exists!",
    };
}