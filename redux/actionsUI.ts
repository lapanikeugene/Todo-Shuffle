import { Windows } from "./types";

export function showWindow(windowType:Windows)
{
    console.log("action with UI",windowType)
    return {
        type: windowType
    }
}