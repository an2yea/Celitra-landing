import {
  Box,
  Center,
  Container,
  Wrap,
  WrapItem,
  Text,
  Image,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { FAQSection } from "./components/FAQSection";
import { Feature } from "./components/Feature";
import { HeroSection } from "./components/HeroSection";
import { Layout } from "./components/Layout";
import { PricingSection } from "./components/PricingSection";
import { Helmet } from "react-helmet";

const faqs: any[] = [
  {
    q: "How does this work?",
    a: "Simply add a prompt of the description of what image you want, and you can mint it's NFT to your account in seconds!",
  },
  {
    q: "Do I need to have a Metamask wallet?",
    a: "You can use a wallet too yes, but you can login directly through any of your socials be it Gmail, facebook or discord!",
  },
  {
    q: "Where can I see the NFTs I Minted",
    a: "They'll be visible on our website, and will be added to your account as well!",
  },

];

export interface HighlightType {
  icon: string;
  title: string;
  description: string;
}

const highlights: HighlightType[] = [
  {
    icon: "✨",
    title: "No-code",
    description:
      "We are No-Code friendly. There is no coding required to get started. Launchman connects with Airtable and lets you generate a new page per row. It's just that easy!",
  },
  {
    icon: "🎉",
    title: "Make Google happy",
    description:
      "We render all our pages server-side; when Google's robots come to index your site, the page does not have to wait for JS to be fetched. This helps you get ranked higher.",
  },
  {
    icon: "😃",
    title: "Rapid experimenting",
    description:
      "You don't have to wait hours to update your hard-coded landing pages. Figure out what resonates with your customers the most and update the copy in seconds",
  },
  {
    icon: "🔌",
    title: "Rapid experimenting",
    description:
      "You don't have to wait hours to update your hard-coded landing pages. Figure out what resonates with your customers the most and update the copy in seconds",
  },
];

interface FeatureType {
  title: string;
  description: string;
  image: string;
}

const features: FeatureType[] = [
  {
    title: "Level up your NFT game with AI-powered creation.",
    description:
      "ArtDrop helps you create NFTs based on your prompts with the help of AI. This means you can elevate your NFT game and stand out from the crowd. Mint and flaunt your personalized NFTs on our platform today.",
    image:
      "f1.png",
  },
  {
    title: "Get started with NFTs hassle-free.",
    description:
      "Creating a wallet can be a barrier to entry for many interested in the world of NFTs. With ArtDrop, you can sign in without having to create a wallet – we take care of it for you. Get started with ease and start creating and minting your own NFTs today.",
    image:
      "f2.png",
  },
  {
    title: "Securely store and display your artwork with ease.",
    description:
      "Keep your NFTs safe by minting them directly to your wallet. ArtDrop makes it easy to create and showcase your artwork on the blockchain. No more worrying about storage or security—focus on sharing your talent with the world.",
    image:
      "f3.png",
  },
];

export const App = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title> artDrop | the NFTs you want to see </title>
      </Helmet>
      <Box bg="gray.50">
        <HeroSection />
        <Container maxW="container.xl">
          <Center p={[0, 10]}>
            <video
              playsInline
              autoPlay
              muted
              poster="https://launchman-space.nyc3.digitaloceanspaces.com/biller-hero-2.png"
              loop
            >
              <source
                src="https://launchman-space.nyc3.digitaloceanspaces.com/biller-hero-2.webm"
                type="video/mp4"
              />
            </video>
          </Center>
        </Container>

        <VStack
          backgroundColor="white"
          w="full"
          id="features"
          spacing={4}
          py={[16, 0]}
        >
          {features.map(
            ({ title, description, image }: FeatureType, i: number) => {
              return (
                <Feature
                  key={`feature_${i}`}
                  title={title}
                  description={description}
                  image={image}
                  reverse={i % 2 === 1}
                />
              );
            }
          )}
        </VStack>

        <Container py={28} maxW="container.md">
          <Box w="full">
            <VStack spacing={10} w="full">
              <Text fontWeight={500} fontSize="2xl" align="center">
                Frequently asked questions
              </Text>
              <FAQSection items={faqs} />
            </VStack>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};
