-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Timer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "timerName" TEXT NOT NULL,
    "startTime" DATETIME NOT NULL,
    "pauseTimer" BOOLEAN NOT NULL,
    "sumTime" INTEGER NOT NULL,
    "addTimer" DATETIME NOT NULL,
    CONSTRAINT "Timer_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "sumTime" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "projectName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "Project_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SubProject" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" BOOLEAN NOT NULL,
    "subProjectName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "sumTime" INTEGER NOT NULL,
    CONSTRAINT "SubProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SubProjectToTimer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_SubProjectToTimer_A_fkey" FOREIGN KEY ("A") REFERENCES "SubProject" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SubProjectToTimer_B_fkey" FOREIGN KEY ("B") REFERENCES "Timer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_SubProjectToTimer_AB_unique" ON "_SubProjectToTimer"("A", "B");

-- CreateIndex
CREATE INDEX "_SubProjectToTimer_B_index" ON "_SubProjectToTimer"("B");
