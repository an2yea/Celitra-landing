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
    title: "No more remembering Seed Phrases, powered by Web3Auth",
    description:
      " Login directly through your Socials (Gmail, facebook, discord etc) with Web3Auth. No need to create or connect Metamask wallet, we handle accounts for you.",
    image:
      "f1.png",
  },
  {
    title: "Zero transaction fees, we provide gas to fuel your creativity ",
    description:
      "The NFTs you Mint are free, owned by you. Access them anywhere, anytime without any app installs.",
    image:
      "f2.png",
  },
  {
    title: "Image Creation With Prompts using Stable Diffusion AI",
    description:
      "Simply add a prompt to inspire the image you want to create. Get an NFT of the image you create rendered on the website and mint them to your account in a couple of seconds!.",
    image:
      "f3.png",
  },
];

export const App = () => {
  return (
    <Layout >
      <Helmet>
        <meta charSet="utf-8" />
        <title> artDrop | the NFTs you want to see </title>
      </Helmet>
      <Box bg="gray.50">
        <HeroSection />
        <Container maxW="container.xl">
          <Center p={[0, 10]}>
            <Image src="ss.png"/>
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
