import Head from 'next/head';
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td, Box, Card } from '@chakra-ui/react';

interface IUsers {
  name: string;
  home: string;
  size: string;
}

export default function Home({ users }: { users: IUsers[] }) {
  return (
    <>
      <Head>
        <title>HETIC Cloud - Groupe 3</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box p={4}>
        <Card>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Home</Th>
                  <Th>Size</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user, key) => (
                  <Tr key={key}>
                    <Td>{user.name}</Td>
                    <Td>{user.home}</Td>
                    <Td>{user.size}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  const users = await fetch(`${process.env.apiRoot}/users`);
  const usersJson = await users.json();

  return {
    props: {
      users: usersJson,
    },
  };
}