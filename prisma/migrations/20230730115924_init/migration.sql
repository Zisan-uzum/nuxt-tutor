-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ChefBot" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "messages" JSONB[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "ChefBot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE INDEX "User_id_idx" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ChefBot_title_key" ON "ChefBot"("title");

-- CreateIndex
CREATE INDEX "ChefBot_title_idx" ON "ChefBot"("title");

-- AddForeignKey
ALTER TABLE "ChefBot" ADD CONSTRAINT "ChefBot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
