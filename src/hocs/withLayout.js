import React from 'react';
import Layout from '../layout/Layout';

export function withLayout(WrappedComponent) {
  return function WrappedComponentWithLayout(props) {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    );
  };
}
