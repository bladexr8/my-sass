import React from 'react';
import Head from "next/head";

import Link from 'next/link';

const Index = () => (
  <div>
    <Head>
      <title>Index Page</title>
      <meta
        name="description"
        content="This is a description of the Index page"
      />
    </Head>
    <div>
      <p>Content on Index Page</p>
      <Link href='/csr-page' as='/csr-page'>
        <a>Go to CSR page</a>
      </Link>
    </div>
  </div>
);

export default Index;
