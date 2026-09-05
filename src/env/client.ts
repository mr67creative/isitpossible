import { createEnv } from "@t3-oss/env-core";
import z from "zod";

export const clientEnv = createEnv({
    clientPrefix: "CLIENT_",
    client: {
        CLIENT_URL: z.string()
    },
    runtimeEnv: import.meta.env,
    emptyStringAsUndefined: true,
    onValidationError(issues) {
        issues.forEach(console.error)
        process.exit(1)
    }
})