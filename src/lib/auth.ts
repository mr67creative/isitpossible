import { prisma } from '#/db'
import { betterAuth } from 'better-auth'
import { prismaAdapter } from "better-auth/adapters/prisma"
import { tanstackStartCookies } from 'better-auth/tanstack-start'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    revokeSessionsOnPasswordReset: true,
    async sendResetPassword() {

    },
    async onExistingUserSignUp() {

    }
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    sendOnSignUp: true,
    async sendVerificationEmail() {

    }
  },
  plugins: [tanstackStartCookies()],
})
