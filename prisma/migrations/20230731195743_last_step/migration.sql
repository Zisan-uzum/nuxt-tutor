-- DropIndex
DROP INDEX "ChefBot_title_idx";

-- CreateIndex
CREATE INDEX "ChefBot_userId_idx" ON "ChefBot"("userId");
