import axios, { AxiosResponse } from 'axios';

export const getUsers = async (token: string, term?: string): Promise<AxiosResponse<any>> => {
  let baseUrl = 'http://0.0.0.0:3003/users';
  const url = (term && term.length > 0) ? `${baseUrl}?filter[term]=${term}` : baseUrl;

  return await axios.get(url, {
    headers: {
      Accept: 'application/vnd.crowdcube.2020-02-25+json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Crowdcube-Portal': 1,
      scopes: 'user:admin'
    }
  });
}

export const getUser = async (token: string, id: string): Promise<AxiosResponse<any>> => await axios
  .get(
    `http://0.0.0.0:3003/users/${id}`,
    {
      headers: {
        Accept: 'application/vnd.crowdcube.2020-02-25+json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Crowdcube-Portal': 1,
        scopes: 'user:admin'
      }
    }
  );

export const updateUser = async (token: string, user: any) => {
  const userData = {
    name: {
      first: user.firstName,
      middle: user.middle,
      last: user.lastName,
    },
    date_of_birth: user.dateOfBirth
  };
  return await axios.patch(
    `http://0.0.0.0:3003/users/${user.id}`,
    { user: userData },
    {
      headers: {
        Accept: 'application/vnd.crowdcube.2020-02-25+json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Crowdcube-Portal': 1,
        scopes: 'user:admin',
      }
    }
  );
}
