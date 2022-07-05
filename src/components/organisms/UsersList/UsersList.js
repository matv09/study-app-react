import React, { useState, useEffect} from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.style';
import { Title } from 'components/atoms/Title/Title';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import FormField from '../../molecules/FormField/FormField';
import { Button } from '../../atoms/Button/Button';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <Title>Students list</Title>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;