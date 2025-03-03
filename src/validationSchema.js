import { z } from "zod";

const storeImmobiliSchema = z.array(z.object({
    id: z.number().positive(),

    titolo: z.string()
        .min(2, "Titolo troppo corto")
        .max(100, "Il titolo è troppo lungo")
        .optional(),

    descrizione: z.string()
        .min(2, "Descrizione troppo corta")
        .max(300, "Descrizione troppo lunga")
        .optional(),

    numero_stanze: z.number()
        .nullable()
        .optional()
        .refine(val => val === undefined || val >= 1, {
            message: "Il numero minimo di stanze deve essere almeno 1",
        })
        .default(null),

    numero_letti: z.number()
        .nullable()
        .optional()
        .refine(val => val === undefined || val >= 1, {
            message: "Il numero minimo di letti deve essere almeno 1",
        })
        .default(null),

    numero_bagni: z.number()
        .nullable()
        .optional()
        .refine(val => val === undefined || val >= 1, {
            message: "Il numero minimo di bagni deve essere almeno 1",
        })
        .default(null),

    metri_quadri: z.number()
        .nullable()
        .optional()
        .refine(val => val === undefined || val >= 1, {
            message: "I metri quadri devono essere almeno 1",
        })
        .default(null),

    indirizzo_completo: z.string()
        .min(2, "Indirizzo troppo corto")
        .max(200, "Indirizzo troppo lungo")
        .optional(),

    email: z.string()
        .email("L'email non è valida")
        .optional(),

    tipologia: z.string()
        .min(2, "Tipologia troppo corta")
        .max(100, "Tipologia troppo lunga")
        .optional(),

    prezzo_notte: z.number()
        .nullable()
        .optional()
        .refine(val => val === undefined || val >= 1, {
            message: "Il prezzo per notte deve essere almeno 1",
        })
        .default(null),

    image_urls: z.array(z.string()).optional(),

    mi_piace: z.number()
        .nullable()
        .optional()
        .refine(val => val === undefined || val >= 0, {
            message: "Il numero di mi piace non può essere negativo",
        })
        .default(0),

    media_voti: z.number()
        .nullable()
        .optional()
        .refine(val => val === undefined || val >= 0, {
            message: "La media dei voti non può essere negativa",
        })
        .default(0),
}));

export default storeImmobiliSchema;
