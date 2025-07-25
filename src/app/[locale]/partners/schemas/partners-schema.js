import { z } from "zod";

const createSchema = (t) => z
    .object({
        fullName: z.string().min(1, t("form.errors.fullName")),
        company: z.string().min(1, t("form.errors.company")),
        serviceType: z
            .array(z.string())
            .nonempty(t("form.errors.serviceType.options")),
        typeOfOtherServices: z.string().optional(),
        place: z.string().min(1, t("form.errors.place")),
        phone: z.string().min(1, t("form.errors.phone")),
        taxId: z.boolean().optional(),
        commercialRegister: z.boolean().optional(),
        email: z.string().email(t("form.errors.email")).nullable().optional(),
        message: z.string().nullable().optional(),
        fbPage: z.string().nullable().optional(),
    })
    .refine(
        (data) => {
            // If "أخرى" is selected, typeOfOtherServices must be non-empty
            if (data.serviceType.includes("أخرى")) {
                return (
                    data.typeOfOtherServices &&
                    data.typeOfOtherServices.trim().length > 0
                );
            }
            return true;
        },
        {
            message: t("form.errors.serviceType.other"),
            path: ["typeOfOtherServices"],
        }
    );

export default createSchema;
