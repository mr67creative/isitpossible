import { createEnv } from "@t3-oss/env-core";

export const serverEnv = createEnv({
    server: {},
    runtimeEnv: process.env,
    emptyStringAsUndefined: true,
    onValidationError(issues) {
        issues.forEach(console.error)
        process.exit(1)
    }
})