import styled from '@emotion/styled/macro';
import React from 'react';
import config from 'react-boilerplate/config';

const VersionNumber = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 5px;
  left: 5px;
  padding: 4px;
  border-radius: 2px;
  background: #61dafb;
  font-size: 10px;
  line-height: 1;
  color: #fff;
`;

const Version = () => {
  if (!config.versionNumber.show) return null;

  return <VersionNumber>{config.application.version}</VersionNumber>;
};

export default Version;
