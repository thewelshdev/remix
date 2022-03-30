import { Link, useLoaderData } from 'remix';
import React from 'react';

export const UserTable: React.FunctionComponent = () => {
  const { users } = useLoaderData();
  return (
    <>
      {users &&
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) =>
              <tr key={user.id}>
                <td><Link to={`/users/${user.id}`}>{user.username}</Link></td>
                <td><Link to={`/users/${user.id}`}>{user.name.first} {user.name.last}</Link></td>
                <td><Link to={`/users/${user.id}`}>{user.email}</Link></td>
              </tr>
            )}
          </tbody>
        </table>
      }
    </>
  );
}
