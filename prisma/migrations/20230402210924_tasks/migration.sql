-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "description" TEXT,
    "date" TEXT,
    "type" TEXT NOT NULL,
    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
