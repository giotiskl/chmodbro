import styled from 'styled-components';
import { palette } from '../../cssResources';

const Link = styled.a`
  border-bottom: 1px  solid;
  border-bottom-color: ${palette.darkGray};
  color: ${palette.darkGray};
  transition: color 350ms ease-out, border-bottom-color 350ms ease-out;
  text-decoration: none;

  &:hover {
    border-bottom-color: ${palette.black};
    color: ${palette.black};
  }
`;

export default Link;