import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Image,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MoonIcon,
    SunIcon,
} from '@chakra-ui/icons';

function StyleColorMode() {
    const { colorMode, toggleColorMode } = useColorMode()


    return (
        <>
            <Box mr={3}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Box>
        </>
    )
}

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    {/* <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'} fontSize={20} fontWeight={'bold'}
                        color={useColorModeValue('orange.800', 'orange')}>
                        Loocups
                    </Text> */}
                    {/* <img className='logo' src={"https://scontent.famd5-1.fna.fbcdn.net/v/t39.30808-6/273320268_629191608296841_7875769319826367891_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=kDX5stRc764AX-zt-fm&_nc_ht=scontent.famd5-1.fna&oh=00_AT_liRsTQ25aJ8wWRJ6WqJzX0w0S0Q1LWKMjw9Vj1e6nPA&oe=62021FFD"} alt="pin" /> */}
                    {/* <img className='logo' src={'F:/Loocups/loocups/public/lo.png'} alt="pin" /> */}
                    {/* <img className='logo' src={'https://scontent.famd5-2.fna.fbcdn.net/v/t39.30808-6/273427922_629199878296014_7104325494855956950_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_ohc=BguIlkIsWnUAX_ZW3w9&_nc_ht=scontent.famd5-2.fna&oh=00_AT-mgNvsmKlgy6KPscrQVVZ0lRdWvSE4_Kjx0zXzzQMmJg&oe=620276AC'} alt="pin" /> */}
                    <img className='logo' src={'https://scontent.fraj3-1.fna.fbcdn.net/v/t39.30808-6/273427922_629199878296014_7104325494855956950_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_ohc=yTwljhPVvcQAX_ftj8K&_nc_ht=scontent.fraj3-1.fna&oh=00_AT_VBgvadw-PbMNZq_5UHbYnHWg2uYTaoHkSuLhe6XcYag&oe=6208656C'} alt="pin" />

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>


                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={1}>
                    <StyleColorMode />
                    {/* <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={400}
                        variant={'link'}
                        href={'#'}>
                        Sign In
                    </Button> */}
                    <Button
                        // display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'orange.400'}
                        href={'#'}
                        _hover={{
                            bg: 'orange.300',
                        }}>
                        Saved
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'orange');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4} align={'center'}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label} zIndex={2}>
                    <Popover trigger={'hover'} placement={'bottom-start'} >
                        <PopoverTrigger>
                            <Link
                                p={2}
                                alignItems={'center'}
                                href={navItem.href ?? '#'}
                                fontSize={'l'}
                                outline={'none'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    outline: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                borderWidth={1}
                                borderColor={'gary'}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))
            }
        </Stack >
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        fontSize={'l'}
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'orange.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'orange.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};


const NAV_ITEMS = [
    {
        label: "MEN ' S OutFit",
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },

];