/*
  Warnings:

  - Added the required column `updatedAt` to the `BodyCircumference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `BoneDiameter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PhysicalAssessment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BodyCircumference" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "BoneDiameter" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "PhysicalAssessment" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SkinFolds" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
