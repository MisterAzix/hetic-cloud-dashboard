import { Box, Flex, Link } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box bgColor={'white'}>
      <Flex minH={'64px'} py={2} px={8} gap={8} boxShadow="xs" align={'center'}>
        <Link href={'/dashboard'} fontSize={'xl'} fontWeight={600}>
          Dashboard
        </Link>
        <Link href={'/users'} fontSize={'xl'} fontWeight={600}>
          Users
        </Link>
        <Link href={'/copyrights'} fontSize={'xl'} fontWeight={600}>
          Copyrights
        </Link>
      </Flex>
    </Box>
  );
}
