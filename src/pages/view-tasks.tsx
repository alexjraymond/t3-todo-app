// import "@fontsource/montserrat/400.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  ChakraProvider,
  List,
  ListIcon,
  ListItem,
  VStack,
  Text,
  Checkbox,
  Box,
  useColorModeValue,
  Container,
  HStack,
  Spacer,
} from "@chakra-ui/react";

import { MdSettings, MdCheckCircle } from "react-icons/md";
import { FaSeedling } from "react-icons/fa";
import { ImCheckboxUnchecked } from "react-icons/im";
import { FcCalendar } from "react-icons/fc";
import NavBar from "./NavBar";
import { api } from "~/utils/api";
import theme from "./theme";
import { CalendarIcon, DeleteIcon, Icon } from "@chakra-ui/icons";

const viewTasks: NextPage = () => {
  const tasks = api.tasks.getTasks.useQuery();
  return (
    <>
      <Head>
        <title>View Tasks</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <NavBar />
        <main className="flex min-h-screen flex-col items-center justify-center gap-8 ">
          <Container maxW="container.lg" p={4}>
            <List spacing={0}>
              <IndividualTask tasks={tasks} />
            </List>
          </Container>
        </main>
      </ChakraProvider>
    </>
  );
};

export default viewTasks;

interface taskType {
  id: number;
  task: string;
  note: string;
  type: string;
}

const tasks: taskType[] = [
  {
    id: 1,
    task: "hi this is the first task",
    note: "here is some notes about the task",
    type: "work",
  },
  {
    id: 2,
    task: "hi this is the second task",
    note: "here is some notes about the task",
    type: "personal",
  },
  {
    id: 3,
    task: "hi this is the third task",
    note: "here is some notes about the task",
    type: "home",
  },
  {
    id: 4,
    task: "hi this is the fourth task",
    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus soluta vel neque et nostrum, officiis commodi in repudiandae omnis ratione, aut sunt ea. Inventore veritatis animi facilis? Maxime nulla laboriosam velit error laborum dolorem, necessitatibus neque, tenetur minus nobis obcaecati?",
    type: "goals",
  },
];

interface Props {
  tasks: taskType[];
}

const IndividualTask: React.FC<Props> = ({ tasks }) => {
  const bg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const hoverBg = useColorModeValue("gray.50", "gray.600");
  const noteColor = useColorModeValue("gray.500", "gray.400");

  return (
    <VStack align="start" spacing={0} width="100%">
      {tasks.map((task, index) => (
        <Box
          key={task.id}
          p={4}
          bg={bg}
          borderTopWidth={index === 0 ? 1 : 0}
          borderBottomWidth={1}
          borderColor={borderColor}
          width="100%"
          _hover={{ bg: hoverBg }}
          position="relative"
        >
          <Checkbox colorScheme="blue" mb={2} isTruncated>
            {task.task}
          </Checkbox>
          <Text color={noteColor} fontSize="sm" maxW={"calc(100% - 100px)"}>
            {truncateText(task.note, 120)}
          </Text>
          <DeleteIcon
            position="absolute"
            top={4}
            right={4}
            color={noteColor}
            boxSize={4}
            cursor="pointer"
            _hover={{ color: "red.500" }}
          />
          <HStack position="absolute" bottom={4} right={4} spacing={2}>
            <Spacer />
            <HStack>
              <CalendarIcon as={FcCalendar} />
              <Text fontSize="xs">apr. 2</Text>
            </HStack>
            <Box
              bg={
                task.type === "work"
                  ? "blue.300"
                  : task.type === "personal"
                  ? "red.300"
                  : "green.300"
              } // Customize the background color based on the task type
              borderRadius="md"
              px={2}
              py={1}
              fontSize="xs"
              color="white"
            >
              {task.type}
            </Box>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};
