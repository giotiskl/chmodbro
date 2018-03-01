import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from '../../cssResources';

const Wrapper = styled.section`
  margin-top: 3rem;
  h2, ul, li {
    font-weight: normal;
    text-align: left;
    font-size: 18px;
    display: inline-block;
  }
  ul {
    padding: 0;
    margin-left: 5px;
    list-style: none;
  }
  li {
    color: ${palette.darkGray};
    cursor: pointer;
    position: relative;
    transition: color 350ms ease-out;
    &:after {
      content: "";
      background-color: ${palette.black};
      display: block;
      width: 100%;
      height: 3px;
      position: absolute;
      transition: transform cubic-bezier(.7,-0.5,.3,1.5) .35s;
      transform: scaleX(0);
    }
    &:hover {
      color: ${palette.black};
    }
    &.active {
      font-weight: bold;
      color: ${palette.black};
      &:after {
        transform: scaleX(1);
      }
    }
  }
`;

const ChmodModePicker = ({ mode, onModeChange }) => {
  return (
    <Wrapper>
      <h2>View:</h2>
      <ul>
        <li className={mode === 'code' ? 'active' : ''} onClick={() => onModeChange('code')}>Code</li>
        &nbsp;-&nbsp;
        <li className={mode === 'ugo' ? 'active' : ''} onClick={() => onModeChange('ugo')}>UGO</li>
      </ul>
    </Wrapper>
  )
}

ChmodModePicker.propTypes = {
  mode: PropTypes.string.isRequired,
  onModeChange: PropTypes.func.isRequired,
};

export default ChmodModePicker;
