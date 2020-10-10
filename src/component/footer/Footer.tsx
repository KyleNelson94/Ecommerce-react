import * as React from 'react';

interface Props {
  headers: string[];
  copyright: string;
  loading: boolean;
};

function Footer({headers, copyright, loading}: Props) {

  return (
    <h2>Footer Component has loaded</h2>
  );
};

export default Footer;