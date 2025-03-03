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
        .optional()
        .refine(val => val === undefined || (Number(val) >= 1), {
            message: "Il numero minimo di stanze deve essere almeno 1",
        })
        .nullable()
        .default(),

    numero_letti: z.number()
        .optional()
        .refine(val => val === undefined || (Number(val) >= 1), {
            message: "Il numero minimo di stanze deve essere almeno 1",
        })
        .nullable()
        .default(),

    numero_bagni: z.number()
        .optional()
        .refine(val => val === undefined || (Number(val) >= 1), {
            message: "Il numero minimo di stanze deve essere almeno 1",
        })
        .nullable()
        .default(),

    metri_quadri: z.number()
        .optional()
        .refine(val => val === undefined || (Number(val) >= 1), {
            message: "Il numero minimo di stanze deve essere almeno 1",
        })
        .nullable()
        .default(),

    indirizzo_completo: z.string()
        .min(2, "Indirizzo troppo corto")
        .max(200, "Indirizzo troppo lungo")
        .optional(),

    email: z.string()
        .email()
        .optional(),

    tipologia: z.string()
        .min(2, "Tipologia troppo corta")
        .max(100, "Tipologia troppo lunga")
        .optional(),

    prezzo_notte: z.number()
        .optional()
        .refine(val => val === undefined || (Number(val) >= 1), {
            message: "Il numero minimo di stanze deve essere almeno 1",
        })
        .nullable()
        .default(),

    image_urls: z.array(z.string()).optional(),

    mi_piace: z.number()
        .optional()
        .refine(val => val === undefined || (Number(val) >= 0), {
            message: "Il numero minimo di stanze deve essere almeno 0",
        })
        .nullable()
        .default(),

    media_voti: z.number()
        .optional()
        .refine(val => val === undefined || (Number(val) >= 0), {
            message: "Il numero minimo di stanze deve essere almeno 0",
        })
        .nullable()
        .default(),
})
);

export default storeImmobiliSchema;