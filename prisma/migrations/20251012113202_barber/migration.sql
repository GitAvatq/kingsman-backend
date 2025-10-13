-- CreateTable
CREATE TABLE "Barber" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "earned" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "service" INTEGER NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Barber_pkey" PRIMARY KEY ("id")
);
