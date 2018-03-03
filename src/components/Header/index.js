import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHandPeace from '@fortawesome/fontawesome-free-solid/faHandPeace';
import { palette } from '../../cssResources';

const Wrapper = styled.header`
  letter-spacing: 2px;
  font-size: 18px;
  margin-bottom: 30px;
  padding: 30px 15px 5px 15px;
  svg {
    display: inline-block;
    margin-right: 10px;
  }
  svg, span {
    color: ${palette.darkGray};
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faHandPeace}/><strong>Chmod<span>Bro</span></strong> &mdash; with your permission...
    </Wrapper>
  );
};

export default Header;
