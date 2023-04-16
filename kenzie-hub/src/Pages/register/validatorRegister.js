// import * as z from "zod";
import { z } from'zod';

export const schema = z.object({
    name: z.string().min(3, "Nome é obrigatório"),
    email: z.string().min(1, "E-mail é obrigatório").email("Forneça um email válido!"),
    bio: z.string().min(2,"Bio é obrigatório"),
    contact: z.string().min(1, "Contato é obrigatório"),
    course_module: z.string().min(1, "Selecione o curso"),
    password: z.string().min(6, "A senha precisa conter no mínimo 6 caracteres")
    .regex(/(?=.*?[A-Z])/,"È necessário pelo menos uma letra maiúscula.")
    .regex(/(?=.*?[a-z])/, "È necessário pelo menos uma letra minúscula.")
    .regex(/(?=.*?[0-9])/, "È necessário pelo menos uma letra minúscula."),
    confirm: z.string().min(1, "A confirmação da senhé obrigatória")
}).refine(({password, confirm}) => password === confirm, {
    message: "As senhas precisam corresponder",
    path: ["confirm"],
})
