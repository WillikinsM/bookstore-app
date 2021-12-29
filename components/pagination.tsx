import React, { forwardRef } from "react";
import {
  Table,
  Thead,
  Tbody,
  Button,
  Heading,
  Tr,
  Th,
  Td,
  TableCaption,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

const Pag = () => {
  const toast = useToast();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [current, setCurrent] = React.useState(1);
  const pageSize = 10;
  const offset = (current - 1) * pageSize;
  const posts = data.slice(offset, offset + pageSize);

  React.useEffect(() => {
    datafetchBookList
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  const Prev = forwardRef((props, ref: any) => (
    <Button ref={ref} {...props}>
      Prev
    </Button>
  ));
  Prev.displayName = "Prev";

  const Next = forwardRef((props, ref: any) => (
    <Button ref={ref} {...props}>
      Next
    </Button>
  ));
  Next.displayName = "Next";

  const itemRender = (_: any, type: any) => {
    if (type === "prev") {
      return Prev;
    }
    if (type === "next") {
      return Next;
    }
  };
  return loading ? (
    <Spinner />
  ) : (
    <>
      <Heading top={0} bg="blackAlpha.300" w="full" p={15} pos="fixed">
        Page {current}{" "}
      </Heading>
      <Table
        maxW="98%"
        m={15}
        mt={20}
        shadow="base"
        rounded="lg"
        bg="gray.700"
        variant="simple"
      >
        <TableCaption>
          <Pagination
            current={current}
            onChange={(page: any) => {
              setCurrent(page);
              toast({
                title: "Pagination.",
                description: `You changed to page ${page}`,
                variant: "solid",
                duration: 9000,
                isClosable: true,
                position: "top-right",
              });
            }}
            pageSize={pageSize}
            total={data.length}
            itemRender={itemRender}
            paginationProps={{
              display: "flex",
              pos: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            colorScheme="red"
            focusRing="green"
          />
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Title</Th>
            <Th>Body</Th>
          </Tr>
        </Thead>
        <Tbody>
          {posts.map((post: any) => (
            <Tr key={post.id}>
              <Td>{post.id}</Td>
              <Td>{post.title}</Td>
              <Td>{post.body}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default Pag;
