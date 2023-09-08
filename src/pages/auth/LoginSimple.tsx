import { Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'

import { Head } from '@components/index'
import { BrandName } from '@src/constants'

export default function LoginSimple () {
    return (
        <>
            <Head>
                <title>Login-Simple | {BrandName}</title>
            </Head>
            <Flex minH="100vh" align="center" bg='gray.100'>
                <VStack 
                    w={{ base: '100%', md: '60%', lg: '45%', xl: '35%' }} 
                    mx='auto'
                    p='10'
                    h="100%"
                    rounded='lg'
                    shadow='sm'
                    bg='white'
                    spacing="4"
                >
                    <Heading as='h1' fontSize="3xl">Sign in to {BrandName}</Heading>
                    <VStack spacing="5" w='100%' align="start" as="form">
                        <FormControl>
                            <FormLabel>Email Address</FormLabel>
                            <Input type="email" placeholder="Email Address" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="*******" />
                        </FormControl>
                        <Button w='full' size="lg" colorScheme='blue'>Sign In</Button>
                    </VStack>
                    <Text fontWeight="medium">
                        Don't have an account? {' '}
                        <Link color="blue.400">Register here</Link>
                    </Text>
                </VStack>
            </Flex>
        </>
    )
}