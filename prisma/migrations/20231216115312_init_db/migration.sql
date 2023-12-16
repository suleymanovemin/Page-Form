/*
  Warnings:

  - You are about to drop the column `useId` on the `Form` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "useId",
ADD COLUMN     "userId" TEXT NOT NULL;
