import * as z from "zod";

export const schemaLogin = z.object({
    email:z.string("Email invalido!"),
    password:z.string("Senha invalida!"),
})
