import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
  Link
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface HeroSectionProps {}

export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  return (
    <Container maxW="container.lg">
      <Center p={4} minHeight="70vh">
        <VStack>
          <Container maxW="container.md" textAlign="center">
            <Heading size="2xl" mb={4} color="gray.700">
            Take your creativity to the blockchain with artDrop.
            </Heading>

            <Text fontSize="xl" color="gray.500">
            ArtDrop makes it easy for anyone to create and showcase their own NFTs. Join the web3 revolution and share your unique creations with the world.
            </Text>

            <a href="https://art-drop-nft.vercel.app/" target="_self">
            <Button
              mt={8}
              colorScheme="blue"
            >
              Start Creating NFTs now!
            </Button>
            </a>

            <Text my={2} fontSize="sm" color="gray.500">
              102+ people have signed up in the last 30 days
            </Text>
          </Container>
        </VStack>
      </Center>
    </Container>
  );
};
