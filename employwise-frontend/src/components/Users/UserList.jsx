import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead,Box, TableRow, Paper, Pagination, TextField, CircularProgress } from '@mui/material';
import UserCard from './UserCard';

const UserList = ({ users, loading, page, totalPages, onPageChange, onEdit, onDelete, searchTerm, onSearchChange }) => {
  return (
    <>
      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={onSearchChange}
        sx={{ mb: 2 }}
      />

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Avatar</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <UserCard 
                    key={user.id} 
                    user={user} 
                    onEdit={onEdit} 
                    onDelete={onDelete} 
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {totalPages > 1 && (
            <Box display="flex" justifyContent="center" mt={3}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={onPageChange}
                color="primary"
              />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default UserList;