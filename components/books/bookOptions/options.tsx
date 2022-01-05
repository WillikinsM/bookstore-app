import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import dataStore from "../../../stores/DataStore";

interface Props {
  id: number;
}

const DeleteOption = observer(({ id }: Props) => {
  const handleDelete = () => {
    dataStore.deleteBook(id);
  };

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button
            w={{ base: "full", sm: "auto" }}
            size="lg"
            bg={useColorModeValue("red.500", "red.200")}
            _hover={{ bg: useColorModeValue("red.900", "red.600") }}
            color={useColorModeValue("white", "gray.200")}
            as="a"
            ml={2}
          >
            Delete
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>Are you sure you want to delete this book?</PopoverBody>
          <PopoverFooter d="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <PopoverCloseButton as={Button} variant="outline">
                Cancel
              </PopoverCloseButton>
              <Button colorScheme="red" onClick={handleDelete}>
                Delete
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
});

export default DeleteOption;
