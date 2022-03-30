import { LoaderFunction, } from 'remix';
import { UserFilterForm } from '../components/UserFilterForm';
import { UserTable } from '../components/UserTable';
import { getUsers } from '../UserApi';

export const loader: LoaderFunction = async ({request}) => {
  const url = new URL(request.url)
  const term = url.searchParams.get('term');
  try {
    const resp = await getUsers('cc_admin_client_access_token', term || '');
    return { users: resp.data.users };
  } catch (e) {
    console.log(e);
  }
  return {};
}

export default function Index() {
  return (
    <>
      <h1>Users</h1>
      <UserFilterForm />
      <UserTable />
    </>
  );
}
