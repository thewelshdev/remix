import { ActionFunction, useLoaderData } from 'remix';
import UserForm from '~/components/UserForm';
import { getUser, updateUser } from '../../UserApi';

export const action: ActionFunction = async ({request, params}) => {
  const formData = await request.formData();
  const user = {
    firstName: formData.get('firstName'),
    middle: formData.get('middle'),
    lastName: formData.get('lastName'),
    dateOfBirth: formData.get('dateOfBirth'),
  }

  const errors = {};
  if (!user.firstName) errors.firstName = true;
  if (!user.middle) errors.middle = true;
  if (!user.lastName) errors.lastName = true;
  if (!user.dateOfBirth) errors.dateOfBirth = true;

  if (Object.keys(errors).length) {
    const values = Object.fromEntries(formData);
    return { errors, values };
  }

  try {
    const resp = await updateUser('cc_admin_client_access_token', {id: params.id, ...user});
    return { user };
  } catch (e) {
    console.log(e);
  }

  return {};
}

export const loader = async ({params}) => {
  try {
    const resp = await getUser('cc_admin_client_access_token', params.id);
    return { user: resp.data.user };
  } catch (e) {
    console.log(e);
  }
  return {};
}

export default function User() {
  const { user } = useLoaderData();
  return (
    <>
      {user &&
        <>
          <h1>{user.username}</h1>
          <UserForm />
        </>
      }
    </>
  );
}
