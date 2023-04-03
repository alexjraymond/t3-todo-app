import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
} from "@chakra-ui/react";
// import Trpc from "../server/api/trpc";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

const Table = () => {
  const [newTask, setNewTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createTaskMutation = api.tasks.createTask.useMutation();
  //   const hello = trpc.task.createBuild;

  const router = useRouter();

  function handleSubmitNewTask(e: React.FormEvent) {
    e.preventDefault();
    createTaskMutation
      .mutateAsync({
        task: newTask,
      })
      .then(() => {
        void router.push("/");
      })
      .catch((error) => {
        // Handle the error here if necessary
        console.error("Error creating task:", error);
      });
  }

  return (
    <form onSubmit={handleSubmitNewTask}>
      <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Input
          required
          placeholder={newTask}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button
          colorScheme="blue"
          type="submit"
          isLoading={isLoading}
          loadingText="Creating"
          variant="outline"
          spinnerPlacement="end"
          onClick={() => {
            setIsLoading(true);
          }}
        >
          Button
        </Button>
      </Box>
    </form>
  );
};

export default Table;
