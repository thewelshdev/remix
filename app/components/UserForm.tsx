import { Form, useActionData, useLoaderData, useTransition } from 'remix';
import styled from 'styled-components';

const StyledFormRow = styled.div`display: block;`;

const formatDate = (date: string): string => {
  const parsedDate = new Date(date);
  if (!isNaN(parsedDate.getTime())) {
    return parsedDate.getFullYear() + '-' + (parsedDate.getMonth() + 1) + '-' + parsedDate.getDate();
  }
  return '';
}

export default function UserForm() {
  const { user } = useLoaderData();
  const actionData = useActionData();
  const transition = useTransition();
  return (
    <Form method="post">
      <StyledFormRow>
        <label>
          First Name
          <input type="text" name="firstName" defaultValue={user.name.first} />
          {actionData?.errors?.firstName ? <em>First name is required</em> : null}
        </label>
      </StyledFormRow>
      <StyledFormRow>
        <label>
          Middle Name(s)
          <input type="text" name="middle" defaultValue={user.name.middle} />
          {actionData?.errors?.middle ? <em>Middle name(s) is required</em> : null}
        </label>
      </StyledFormRow>
      <StyledFormRow>
        <label>
          Last Name
          <input type="text" name="lastName" defaultValue={user.name.last} />
        </label>
      </StyledFormRow>
      <StyledFormRow>
        <label>
          Email
          <input type="text" name="email" defaultValue={user.email} />
        </label>
      </StyledFormRow>
      <StyledFormRow>
        <label>
          Address Line 1
          <input type="text" name="addressLine1" defaultValue={user.address.line1} />
        </label>
      </StyledFormRow>
      <StyledFormRow>
        <label>
          Address Line 2
          <input type="text" name="addressLine2" defaultValue={user.address.line2} />
        </label>
      </StyledFormRow>
      <StyledFormRow>
        <label>
          Town / City
          <input type="text" name="town" defaultValue={user.address.town} />
        </label>
      </StyledFormRow>
      <StyledFormRow>
        <label>County
          <input type="text" name="county" defaultValue={user.address.county} />
        </label>
      </StyledFormRow>
      <StyledFormRow>
        <label>
          Country
        <input type="text" name="country" defaultValue={user.address.country} />
        </label>
      </StyledFormRow>
      <StyledFormRow>
        <label>Postcode
          <input type="text" name="postcode" defaultValue={user.address.postcode} />
        </label>
      </StyledFormRow>
      <StyledFormRow>
        <label>
          Telephone
          <input type="text" name="phone" defaultValue={user.phone} />
        </label>
      </StyledFormRow>
      <StyledFormRow>
        <label>
          Date Of Birth
          <input type="date" name="dateOfBirth" defaultValue={formatDate(user.date_of_birth)} />
        </label>
      </StyledFormRow>
      <StyledFormRow>
        <label>
          Gender
          <select name="gender" defaultValue={user.gender}>
            <option></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Other / Non-binary</option>
            <option value="do-not-disclose">Prefer not to disclose</option>
          </select>
        </label>
      </StyledFormRow>
      <button type="submit" disabled={transition.state === 'submitting'}>
        {transition.submission ? 'Submitting' : 'Update'}
      </button>
      {actionData && !actionData.errors && 'Successfully updated'}
    </Form>
  );
}
