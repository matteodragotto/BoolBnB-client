import { z } from "zod";

// validazione searchIndex
const searchSchema = z.object({
    price_min: z.string()
        .optional()
        .refine(val => val === undefined || (!isNaN(Number(val)) && Number(val) >= 0), {
            message: "Il prezzo minimo deve essere un numero positivo",
        })
        .transform(val => (val !== undefined ? Number(val) : undefined)),

    price_max: z.string()
        .optional()
        .refine(val => val === undefined || (!isNaN(Number(val)) && Number(val) >= 0), {
            message: "Il prezzo massimo deve essere un numero positivo",
        })
        .transform(val => (val !== undefined ? Number(val) : undefined)),

    city: z.string()
        .min(2, "Il nome della città è troppo corto")
        .max(100, "Il nome della città è troppo lungo")
        .optional(),

    rooms_min: z.string()
        .optional()
        .refine(val => val === undefined || (!isNaN(Number(val)) && Number(val) >= 1), {
            message: "Il numero minimo di stanze deve essere almeno 1",
        })
        .transform(val => (val !== undefined ? Number(val) : undefined)),

    rooms_max: z.string()
        .optional()
        .refine(val => val === undefined || (!isNaN(Number(val)) && Number(val) >= 1), {
            message: "Il numero massimo di stanze deve essere almeno 1",
        })
        .transform(val => (val !== undefined ? Number(val) : undefined)),
});

// validazione per immobili
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
        .refine(val => val === undefined || (!isNaN(Number(val)) && Number(val) >= 1), {
            message: "Il numero minimo di stanze deve essere almeno 1",
        })
        .transform(val => (val !== undefined ? Number(val) : undefined)),

    numero_letti: z.number()
        .optional()
        .refine(val => val === undefined || (!isNaN(Number(val)) && Number(val) >= 1), {
            message: "Il numero minimo di letti deve essere almeno 1",
        })
        .transform(val => (val !== undefined ? Number(val) : undefined)),

    numero_bagni: z.number()
        .optional()
        .refine(val => val === undefined || (!isNaN(Number(val)) && Number(val) >= 1), {
            message: "Il numero minimo di bagni deve essere almeno 1",
        })
        .transform(val => (val !== undefined ? Number(val) : undefined)),

    metri_quadri: z.number()
        .optional()
        .refine(val => val === undefined || (!isNaN(Number(val)) && Number(val) >= 15), {
            message: "Il numero minimo di metri quadri deve essere almeno 15",
        })
        .transform(val => (val !== undefined ? Number(val) : undefined)),

    indirizzo_completo: z.string()
        .min(2, "Indirizzo troppo corto")
        .max(200, "Indirizzo troppo lungo")
        .optional(),

    email: z.string()
        .min(2, "email troppo corta")
        .max(200, "email troppo lunga")
        .optional(),

    tipologia: z.string()
        .min(2, "Tipologia troppo corta")
        .max(100, "Tipologia troppo lunga")
        .optional(),

    prezzo_notte: z.number()
        .optional()
        .refine(val => val === undefined || (!isNaN(Number(val)) && Number(val) >= 1), {
            message: "Il prezzo minimo deve essere almeno 1",
        })
        .transform(val => (val !== undefined ? Number(val) : undefined)),

    image_urls: z.array(z.string()).optional(),
})
);

export { searchSchema, storeImmobiliSchema };