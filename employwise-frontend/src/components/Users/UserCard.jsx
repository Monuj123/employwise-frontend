import { TableCell, TableRow, Avatar, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <TableRow>
      <TableCell>
        <Avatar src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      </TableCell>
      <TableCell>{user.first_name}</TableCell>
      <TableCell>{user.last_name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <IconButton onClick={() => onEdit(user)}>
          <Edit color="primary" />
        </IconButton>
        <IconButton onClick={() => onDelete(user)}>
          <Delete color="error" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default UserCard;