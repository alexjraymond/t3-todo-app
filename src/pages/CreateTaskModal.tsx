import React, { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  Select,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: {
    id: string;
    name: string;
    description: string;
    date: Date;
    type: string;
  }) => void;
}

const CreateTaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskType, setTaskType] = useState("");
  const [taskDate, setTaskDate] = useState(new Date());

  const [isLoading, setIsLoading] = useState(false);

  const createTaskMutation = api.tasks.createTask.useMutation();

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stringTaskDate = taskDate.toISOString();
    createTaskMutation
      .mutateAsync({
        task: taskName,
        description: taskDescription,
        date: stringTaskDate,
        type: taskType,
      })
      .then(() => {
        void router.push("/");
      })
      .catch((error) => {
        console.error("Error creating task:", error);
      });
    onSave({
      id: "",
      name: taskName,
      description: taskDescription,
      date: taskDate,
      type: taskType,
    });
    setTaskName("");
    setTaskDescription("");
    setTaskType("");
    setTaskDate(new Date());
    onClose();
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit}>
        <ModalHeader>Add a new task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl id="task-name">
              <FormLabel>Task name</FormLabel>
              <Input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task name"
                required
              />
            </FormControl>
            <FormControl id="task-description">
              <FormLabel>Description</FormLabel>
              <Textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Task description"
                required
              />
            </FormControl>
            <FormControl id="task-date">
              <FormLabel>Date</FormLabel>
              <ReactDatePicker
                selected={taskDate}
                onChange={(date: Date) => setTaskDate(date)}
              />
            </FormControl>
            <FormControl id="task-type">
              <FormLabel>Type</FormLabel>
              <Select
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
                placeholder="Select task type"
                required
              >
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="goals">Goals</option>
              </Select>
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" colorScheme="blue">
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateTaskModal;
