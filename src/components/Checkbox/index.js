import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import { palette } from '../../cssResources';

const CheckboxWrapper = styled.label`
  background-color: white;
  border: 3px solid ${palette.black};
  border-radius: 3px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  width: 26px;
  height: 26px;
`;

const CheckboxInput = styled.input`
  display: none;
  ~ .Checkbox__input {
    color: ${palette.black};
    transition: cubic-bezier(.7,-0.5,.3,1.5) .35s;
    transform: scale(0) translate3d(0,0,0);
    margin: 0;
  }
  :checked ~ .Checkbox__input {
    transform: scale(2) translate3d(0,0,0);
  }
`;

const Checkbox = ({ userType, bits, handleChange }) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput
        type="checkbox"
        value={bits}
        onChange={({ target }) => handleChange(userType, target.checked ? bits : -bits)} />
      <FontAwesomeIcon className="Checkbox__input" icon={faCheck} />
    </CheckboxWrapper>
  )
}

Checkbox.propTypes = {
  userType: PropTypes.string.isRequired,
  bits: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Checkbox;