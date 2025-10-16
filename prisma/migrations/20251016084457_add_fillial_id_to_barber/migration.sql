/*
  Warnings:

  - Added the required column `fillialId` to the `Barber` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barber" ADD COLUMN     "fillialId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Barber" ADD CONSTRAINT "Barber_fillialId_fkey" FOREIGN KEY ("fillialId") REFERENCES "Fillials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
