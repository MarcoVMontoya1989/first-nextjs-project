import React, {Fragment} from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <Fragment>
      <h1>Hello world</h1>
      <ul>
        <li>
          <Link href={'/news/from-index'}>Routing to news Id</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Index;