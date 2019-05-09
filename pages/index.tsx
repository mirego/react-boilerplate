import React from 'react';
import {NextFunctionComponent} from 'next';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import Head from 'next/head';

const Derp = styled.div`
  background: hotpink;
`;

const IndexPage: NextFunctionComponent = () => {
  return (
    <>
      <Head>
        <title>React Boilerplate</title>
      </Head>
      <Derp>
        Hello{' '}
        <span
          css={css`
            color: cornflowerblue;
          `}
        >
          World!
        </span>
      </Derp>
    </>
  );
};

IndexPage.getInitialProps = () => ({namespacesRequired: ['common']});

export default IndexPage;
