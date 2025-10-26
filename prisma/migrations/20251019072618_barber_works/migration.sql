-- CreateTable
CREATE TABLE "Works" (
    "id" SERIAL NOT NULL,
    "picture_hair" TEXT NOT NULL,
    "name_hair" TEXT NOT NULL,
    "barberId" INTEGER NOT NULL,

    CONSTRAINT "Works_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Works" ADD CONSTRAINT "Works_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "Barber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
