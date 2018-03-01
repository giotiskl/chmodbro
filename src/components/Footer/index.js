import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Link  from '../Link';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import styled from 'styled-components';
import { palette } from '../../cssResources';

const Wrapper = styled.footer`
  padding-bottom: 30px;

  .Footer__heart {
    color: ${palette.red};
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      Made with <FontAwesomeIcon icon={faHeart} className="Footer__heart"/> by <Link href="http://yiotis.net" target="_blank" rel="noopener noreferrer">Yiotis Kaltsikis</Link> &mdash; Check it out on <Link href="https://github.com/giotiskl/chmodbro" target="_blank" rel="noopener noreferrer">GitHub</Link>!
    </Wrapper>
  )
};

export default Footer;