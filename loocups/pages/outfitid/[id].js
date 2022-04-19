
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Container,
  useDisclosure,
  HStack,
  Box
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'





import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Searchheader from '../../component/Search';
import { useAppContext } from '../../component/State/State';
import { IconButton } from '@material-ui/core';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { orange } from '@material-ui/core/colors';



function outfitid() {
  //const res = props.photo.images.url


  const { isOpen, onOpen, onClose } = useDisclosure()

  const router = useRouter()
  const { id } = router.query
  const state = useAppContext()
  const [products] = state.productsAPI.products
  const [detailProduct, setDetailProduct] = useState([])


  const [Like, setLike] = useState(false)
  const [LikeNumber, setLikeNumber] = useState(0)
  const Likehandler = () => {

    setLike(!Like)
    if (Like) {
      setLikeNumber(LikeNumber = LikeNumber - 1)
    } else {
      setLikeNumber(LikeNumber = LikeNumber + 1)
    }
  }


  useEffect(() => {
    if (id) {
      products.forEach(product => {
        if (product._id === id) setDetailProduct(product)
        setLikeNumber(product.like)
      })
    }
  }, [id, products])

  if (detailProduct.length === 0) return null

  //save the related props and store and render realted
  return (
    <Container maxW={'full'} flex={1} bg={useColorModeValue('white', 'gray.800')} >
      <Header />
      {/* <Searchheader /> */}
      <Center py={6} >
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '900px' }}
          h={{ sm: '', md: 'auto' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200" borderWidth={5} borderColor={'orange.500'} borderRadius={'4'}>
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                `${detailProduct.images.url}`
              }
            />
          </Flex>


          <Stack
            flex={1}
            flexDirection="column"
            //justifyContent="center"
            alignItems="center"

            p={1}
            m={5}
            ml={15}
            pt={10}>
            <Flex flexDirection={'row'} justify={'space-between'}>
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                {detailProduct.title}
              </Heading>
              <Flex flexDirection={'column'} justifyContent={'center'} p={1} marginLeft={3} borderRadius={10} bg={useColorModeValue('orange.200', 'orange.200')}>
                <IconButton onClick={Likehandler} color={'red'}>
                  {!Like ? <FavoriteBorderIcon sx={{ color: orange[500] }} /> : <FavoriteIcon sx={{ color: orange[500] }} />}
                </IconButton>
                <Text textAlign={'center'} fontWeight={'bold'} color={'orange.400'}>{LikeNumber}</Text>
              </Flex>
            </Flex>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              @loocups
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              {detailProduct.description}
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.300', 'gray.800')}
                fontWeight={'400'}>
                #❤️
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.300', 'gray.800')}
                fontWeight={'400'}>
                #👍
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.300', 'gray.800')}
                fontWeight={'400'}>
                #🧠
              </Badge>
            </Stack>

            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}

                _hover={{
                  bg: 'orange.600'
                }}
                onClick={onOpen}
                _focus={{
                  bg: 'orange.500',
                }}>
                WANT TO BUY..
              </Button>
            </Stack>
            <HStack>
              <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644416961/Screenshot_2022-02-09_195653_bxrose.png' />
              <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644418607/Screenshot_2022-02-09_202626_wnbmrj.png' />
              <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644416957/Screenshot_2022-02-09_195339_uciwo2.png' />
            </HStack>
            <HStack>
              <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644418835/Screenshot_2022-02-09_203022_lagbep.png' />
              <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644416953/download_1_mhygtx.jpg' />
              <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644416953/download_z5wqgx.jpg' />
            </HStack>
            <HStack>
              <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644416953/download_2_bzkfa8.jpg' />
            </HStack>

            <Modal isOpen={isOpen} size={'xs'} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>This all link from differnent sources, We are helping you for best cloth..</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"

                    p={1}
                    m={5}
                  >

                    <HStack>
                      <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644416961/Screenshot_2022-02-09_195653_bxrose.png' />
                      <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644418607/Screenshot_2022-02-09_202626_wnbmrj.png' />
                      <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644416957/Screenshot_2022-02-09_195339_uciwo2.png' />
                    </HStack>
                    <HStack>
                      <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644416953/download_pk5nac.png' />
                      <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644416953/download_1_mhygtx.jpg' />
                      <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644416953/download_z5wqgx.jpg' />
                    </HStack>
                    <HStack>
                      <Image w={20} h={20} borderRadius={10} src='https://res.cloudinary.com/cloudpro/image/upload/v1644416953/download_2_bzkfa8.jpg' />
                    </HStack>
                  </Stack>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='orange.500' bg={useColorModeValue('orange.200', 'orange.200')} mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            {/* <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'orange.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px orange.500, 0 10px 10px -5px orange.500'
                }
                _hover={{
                  bg: 'orange.500',
                }}
                _focus={{
                  bg: 'orange.500',
                }}>
                Follow
              </Button> */}
          </Stack>
        </Stack>
      </Center>


      {/* <Mainboard  pins={}/> */}
      <Footer />
    </Container >);
}

export default outfitid;
