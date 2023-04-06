-- CreateEnum
CREATE TYPE "Role" AS ENUM ('NUTRITIONIST', 'PATIENT', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'NUTRITIONIST';