/*
  Warnings:

  - Made the column `phone_number` on table `accommodation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `accommodation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `website` on table `accommodation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price_per_night` on table `accommodation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `accommodation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `accommodation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total_visit` on table `accommodation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `monthly_visit` on table `accommodation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `accommodation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `accommodation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_update` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `active` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `staff` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `staff` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."accommodation" ALTER COLUMN "phone_number" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "website" SET NOT NULL,
ALTER COLUMN "price_per_night" SET NOT NULL,
ALTER COLUMN "rating" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "total_visit" SET NOT NULL,
ALTER COLUMN "monthly_visit" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."customer" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "last_update" SET NOT NULL,
ALTER COLUMN "active" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."staff" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
