import { createColumnHelper } from '@tanstack/react-table';
import { IconButton, Flex } from '@chakra-ui/react';
import { MdRefresh } from 'react-icons/md';

import DataTable from './components/DataTable';
import { useGetUserListQuery } from '@/store/api/user.service';

const columnHelper = createColumnHelper<object>();

const columns = [
  columnHelper.accessor('id', {
    header: 'Id',
  }),
  columnHelper.accessor('username', {
    header: 'Username',
  }),
  columnHelper.accessor('password', {
    header: 'Password',
  }),
];

function UserTable() {
  const { data: userList, refetch } = useGetUserListQuery(undefined, {
    selectFromResult: ({ data }) => ({ data: data ? data.data : [] }),
  });

  return (
    <>
      <Flex direction="row-reverse">
        <IconButton aria-label="refetch" size="sm" icon={<MdRefresh />} onClick={refetch} />
      </Flex>

      {userList && <DataTable columns={columns} data={userList} />}
    </>
  );
}

export default UserTable;
