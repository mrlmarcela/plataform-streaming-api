/*
  Warnings:

  - Made the column `name` on table `Playlist` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_playlistId_fkey";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "playlistId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Playlist" ALTER COLUMN "name" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE SET NULL ON UPDATE CASCADE;
