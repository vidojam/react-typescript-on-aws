import { HelloProps } from "../types/formDataTypes"


export const Hello =({firstName, lastName}:any) => {
  return (
    <h1>
      Good morning, {firstName} {lastName}
    </h1>
  )
}