import { observer } from "mobx-react-lite";
import dataStore from "../../stores/DataStore";
import Category from "./category";
import { Button, Flex, Spinner } from "@chakra-ui/react";
import { forwardRef, useEffect, useState } from "react";
import Pagination from "@choc-ui/paginator";

const Categories = observer(() => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const pageSize = 6;
  const offset = (current - 1) * pageSize;
  const posts = data.slice(offset, offset + pageSize);
  const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    dataStore.fetchCategoryList().then(() => {
      setData(dataStore.categoryList);
      sleep(1000).then(() => {
        setLoading(false);
      });
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
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="black"
      size="xl"
      ml="50%"
      mt="50"
    />
  ) : (
    <>
      <Flex
        bg="white"
        p={50}
        w="full"
        alignItems="flex-start"
        justifyContent="center"
        wrap="wrap"
      >
        {posts.map((category: any, index) => (
          <Category
            key={index}
            name={category.name}
            description={category.description}
            image={category.image}
            id={category.id}
          />
        ))}
      </Flex>
      <Pagination
        current={current}
        onChange={(page: any) => {
          setCurrent(page);
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
        colorScheme="gray"
        focusRing="blue"
      />
    </>
  );
});

export default Categories;
