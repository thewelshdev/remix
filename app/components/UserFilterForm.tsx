import { Form, useSearchParams, useTransition } from 'remix';
import React from 'react';

export const UserFilterForm: React.FunctionComponent = () => {
  const [params] = useSearchParams();
  const termDefault = params.get('term') || '';
  return (
    <div>
      <Form method="get">
        <label>
          Term
          <input type="text" name="term" defaultValue={termDefault} />
        </label>
        <button type="submit">Search</button>
      </Form>
    </div>
  )
}
