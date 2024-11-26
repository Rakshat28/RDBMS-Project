/*
  Warnings:

  - You are about to drop the column `capacity` on the `Hospital` table. All the data in the column will be lost.
  - You are about to drop the column `contact` on the `Hospital` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Hospital` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Hospital` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hospital" DROP COLUMN "capacity",
DROP COLUMN "contact",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_email_key" ON "Hospital"("email");
