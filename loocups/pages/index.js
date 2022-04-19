import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import Header from '../component/Header'
import Footer from '../component/Footer'
import NextLink from "next/link";

import Design from '../component/design';


export default function index() {



  return (
    <Container maxW={'5xl'}>

      <Header />


      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Get your next{' '}
          <Text as={'span'} color={'orange.400'}>
            <Design t="Outfit idea" />
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          "Never miss a meeting. Never be late for one too. Keep track of your meetings and receive smart reminders in appropriate times. Read your smart “Daily Agenda” every morning."
        </Text>
        <Stack spacing={6} direction={'row'}>
          <NextLink href={"/outfits"}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
              Get started
            </Button>
          </NextLink>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>

      </Stack>
      <Footer />
    </Container>
  );
}
