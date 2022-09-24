import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

function createData(id, name, geo, gun, gunNum, last_updated) {
  return { id, name, geo, gun, gunNum, last_updated };
}

// Temp
const rows = [
  createData(0, '홍길동', '본부2생활관', 'K2', '577682', '2022-09-24 21:00:34'),
];

function GunList() {
  return (
    <>
      <Title>최근 기록</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell>위치</TableCell>
            <TableCell>총기</TableCell>
            <TableCell>총기번호</TableCell>
            <TableCell>최근 불출일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.geo}</TableCell>
              <TableCell>{row.gun}</TableCell>
              <TableCell>{row.gunNum}</TableCell>
              <TableCell>{row.last_updated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link
        color='primary'
        href='#'
        onClick={(e) => e.preventDefault()}
        sx={{ mt: 3 }}
      >
        더보기
      </Link>
    </>
  );
}

export default GunList;
