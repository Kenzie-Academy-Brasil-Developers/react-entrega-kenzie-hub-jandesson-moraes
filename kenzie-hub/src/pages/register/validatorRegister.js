import * as z from "zod";

export const schemaRegister = z.object({
    name:z.string().min("Nome é obrigatório"),
    email:z.string().min("Email é obrigatório"),
    password:z.coerce.number().min("Max 16 caracteres"),
    bio: z.string().min("Bio é obrigatório"),
    contact: z.string().min("Contato é obrigatório"),
    course_module: z.string().min("Curso é obrigatório"),
});
