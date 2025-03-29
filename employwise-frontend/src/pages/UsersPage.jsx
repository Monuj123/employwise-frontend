import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers, deleteUser } from '../services/api';
import { toast } from 'react-toastify';
import { Box, Typography, Dialog, Button,DialogTitle, DialogContent, DialogActions } from '@mui/material';
import UserList from '../components/Users/UserList';
import EditUser from '../components/Users/EditUser';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await getUsers(page);
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        toast.error('Failed to fetch users');
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page, navigate]);

  const handleDelete = async () => {
    try {
      await deleteUser(userToDelete.id);
      setUsers(users.filter((user) => user.id !== userToDelete.id));
      toast.success('User deleted successfully');
    } catch (error) {
      toast.error('Failed to delete user');
    } finally {
      setDeleteDialogOpen(false);
      setUserToDelete(null);
    }
  };

  const handleEdit = (user) => {
    setUserToEdit(user);
    setEditDialogOpen(true);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>

      <UserList
        users={filteredUsers}
        loading={loading}
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onEdit={handleEdit}
        onDelete={(user) => {
          setUserToDelete(user);
          setDeleteDialogOpen(true);
        }}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete {userToDelete?.first_name}{' '}
          {userToDelete?.last_name}?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {userToEdit && (
        <EditUser
          open={editDialogOpen}
          onClose={() => {
            setEditDialogOpen(false);
            setUserToEdit(null);
          }}
          user={userToEdit}
          onUserUpdated={(updatedUser) => {
            setUsers(
              users.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
              )
            );
          }}
        />
      )}
    </Box>
  );
};

export default UsersPage;