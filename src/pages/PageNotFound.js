import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PageTitle } from "../components/PageTitle";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageTitle title={"없습니다!"} />
      <Container
        maxW={450}
        h="100vh"
        margin="0 auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={6} textAlign="center">
          <Box>
            <Heading fontSize="50px" fontWeight="700" color="#ffa825" mb={4}>
              404
            </Heading>
            <Text fontSize="lg" mb={4}>
              페이지를 찾을 수 없습니다.
            </Text>
            <Text mb={6}>
              요청하신 페이지는 존재하지 않거나, <br /> 이동된 것 같습니다.
              <br />
              올바른 주소를 입력했는지 확인해 주세요.
            </Text>
          </Box>
          <Button
            bgColor="#ffa825"
            color="#fff"
            size="lg"
            _hover={{ bg: "orange.400" }}
            onClick={() => navigate("/")}
          >
            홈으로 돌아가기
          </Button>
        </VStack>
      </Container>
    </>
  );
};
