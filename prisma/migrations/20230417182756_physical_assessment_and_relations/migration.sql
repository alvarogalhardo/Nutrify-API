/*
  Warnings:

  - You are about to drop the column `skinFoldsId` on the `PhysicalAssessment` table. All the data in the column will be lost.
  - Added the required column `kneeHeight` to the `PhysicalAssessment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sittingHeight` to the `PhysicalAssessment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `abdominal` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `biceps` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calf` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hip` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `midAxillary` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `physicalAssessmentId` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscapular` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suprailiac` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supraspinatus` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thigh` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thoracic` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `triceps` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waist` to the `SkinFolds` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PhysicalAssessment" DROP CONSTRAINT "PhysicalAssessment_skinFoldsId_fkey";

-- AlterTable
ALTER TABLE "PhysicalAssessment" DROP COLUMN "skinFoldsId",
ADD COLUMN     "kneeHeight" INTEGER NOT NULL,
ADD COLUMN     "sittingHeight" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SkinFolds" ADD COLUMN     "abdominal" INTEGER NOT NULL,
ADD COLUMN     "biceps" INTEGER NOT NULL,
ADD COLUMN     "calf" INTEGER NOT NULL,
ADD COLUMN     "hip" INTEGER NOT NULL,
ADD COLUMN     "midAxillary" INTEGER NOT NULL,
ADD COLUMN     "physicalAssessmentId" INTEGER NOT NULL,
ADD COLUMN     "subscapular" INTEGER NOT NULL,
ADD COLUMN     "suprailiac" INTEGER NOT NULL,
ADD COLUMN     "supraspinatus" INTEGER NOT NULL,
ADD COLUMN     "thigh" INTEGER NOT NULL,
ADD COLUMN     "thoracic" INTEGER NOT NULL,
ADD COLUMN     "triceps" INTEGER NOT NULL,
ADD COLUMN     "waist" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "BodyCircumference" (
    "id" SERIAL NOT NULL,
    "physicalAssessmentId" INTEGER NOT NULL,
    "neckCircumference" INTEGER NOT NULL,
    "chestCircumference" INTEGER NOT NULL,
    "shoulderCircumference" INTEGER NOT NULL,
    "waistCircumference" INTEGER NOT NULL,
    "hipCircumference" INTEGER NOT NULL,
    "abdomenCircumference" INTEGER NOT NULL,
    "relaxed_right_armCircumference" INTEGER NOT NULL,
    "contracted_right_armCircumference" INTEGER NOT NULL,
    "relaxed_left_armCircumference" INTEGER NOT NULL,
    "contracted_left_armCircumference" INTEGER NOT NULL,
    "forearmCircumference" INTEGER NOT NULL,
    "thighCircumference" INTEGER NOT NULL,
    "calfCircumference" INTEGER NOT NULL,

    CONSTRAINT "BodyCircumference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoneDiameter" (
    "id" SERIAL NOT NULL,
    "physicalAssessmentId" INTEGER NOT NULL,
    "humerus" INTEGER NOT NULL,
    "wrist" INTEGER NOT NULL,
    "femur" INTEGER NOT NULL,

    CONSTRAINT "BoneDiameter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SkinFolds" ADD CONSTRAINT "SkinFolds_physicalAssessmentId_fkey" FOREIGN KEY ("physicalAssessmentId") REFERENCES "PhysicalAssessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BodyCircumference" ADD CONSTRAINT "BodyCircumference_physicalAssessmentId_fkey" FOREIGN KEY ("physicalAssessmentId") REFERENCES "PhysicalAssessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoneDiameter" ADD CONSTRAINT "BoneDiameter_physicalAssessmentId_fkey" FOREIGN KEY ("physicalAssessmentId") REFERENCES "PhysicalAssessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
