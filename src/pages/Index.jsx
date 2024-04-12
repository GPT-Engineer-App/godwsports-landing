import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Container, SimpleGrid, Link, Icon } from "@chakra-ui/react";
import { FaTicketAlt, FaMusic, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="black" color="white" minHeight="100vh">
      <Container maxW="container.lg" py={8}>
        <Stack spacing={8} align="center" textAlign="center">
          <Image src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmclMjBvbiUyMHN0YWdlfGVufDB8fHx8MTcxMjg5ODk1Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="GodWsports" borderRadius="full" boxSize="200px" />
          <Heading as="h1" size="2xl">
            GodWsports
          </Heading>
          <Text fontSize="xl">The Ultimate Touring Experience</Text>
          <Button leftIcon={<FaTicketAlt />} colorScheme="red" size="lg">
            Get Tickets
          </Button>
        </Stack>

        <Stack spacing={8} mt={16}>
          <Heading as="h2" size="xl" textAlign="center">
            Upcoming Shows
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box bg="gray.800" p={6} borderRadius="md">
              <Heading as="h3" size="lg" mb={4}>
                New York City
              </Heading>
              <Text>Date: July 15, 2023</Text>
              <Text>Venue: Madison Square Garden</Text>
              <Button mt={4} colorScheme="red">
                Buy Tickets
              </Button>
            </Box>
            <Box bg="gray.800" p={6} borderRadius="md">
              <Heading as="h3" size="lg" mb={4}>
                Los Angeles
              </Heading>
              <Text>Date: August 5, 2023</Text>
              <Text>Venue: Staples Center</Text>
              <Button mt={4} colorScheme="red">
                Buy Tickets
              </Button>
            </Box>
          </SimpleGrid>
        </Stack>

        <Stack spacing={8} mt={16} align="center">
          <Heading as="h2" size="xl" textAlign="center">
            Latest Album
          </Heading>
          <Image src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYWxidW0lMjBjb3ZlcnxlbnwwfHx8fDE3MTI4OTg5NTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Album Cover" borderRadius="md" boxSize="300px" />
          <Link href="#" isExternal>
            <Button leftIcon={<FaMusic />} colorScheme="red" size="lg">
              Listen Now
            </Button>
          </Link>
        </Stack>

        <Stack direction="row" spacing={6} justify="center" mt={16}>
          <Link href="#" isExternal>
            <Icon as={FaInstagram} boxSize={8} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaTwitter} boxSize={8} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaFacebook} boxSize={8} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Index;
