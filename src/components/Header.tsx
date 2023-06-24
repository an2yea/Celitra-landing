import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Features", link: "#features" },
  { name: "Get Started", link: "https://art-drop-nft.vercel.app/" },
];

const DesktopSidebarContents = ({ name }: any) => {
  return (
    <Container maxW={["full", "container.lg"]} p={0}>
      <Stack
        justify="space-between"
        p={[0, 4]}
        w="full"
        direction={["column", "row"]}
      >
        <Box display={{ base: "none", md: "flex" }}>
          <Image src="celitra-logo.svg" height='75px'></Image>
          <Heading fontSize="xl"></Heading>
        </Box>
        <Spacer />
        <Stack
          align="flex-start"
          spacing={[4, 10]}
          direction={["column", "row"]}
          alignItems='baseline'
        >
          {navLinks.map((navLink: any, i: number) => {
            return (
              <Link variant="link"
                href={navLink.link}
                key={`navlink_${i}`}
                fontWeight={500}
                mt='10%'
                colorScheme="blue"
                target="_self"
              >
                {navLink.name}
              </Link>
            );
          })}
        </Stack>
        <Spacer />
      </Stack>
    </Container>
  );
};
const MobileSidebar = ({ name }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w="full" align="center">
        <Heading fontSize="xl">{name}</Heading>
        <Spacer />
        <IconButton
          aria-label="Search database"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent bg="gray.50">
            <DrawerCloseButton />
            <DrawerHeader>{name}</DrawerHeader>

            <DrawerBody>
              <DesktopSidebarContents />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

interface SidebarProps {
  name: string;
}

const Sidebar = ({ name }: SidebarProps) => {
  return (
    <chakra.header id="header">
      <Box display={{ base: "flex", md: "none" }} p={4}>
        <MobileSidebar name={name} />
      </Box>

      <Box display={{ base: "none", md: "flex" }} bg="gray.50">
        <DesktopSidebarContents name={name} />
      </Box>
    </chakra.header>
  );
};

interface HeaderProps {
  name: string;
}

export const Header = ({ name }: HeaderProps) => {
  return (
    <Box w="full">
      <Sidebar name={name} />
    </Box>
  );
};
