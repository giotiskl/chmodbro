import React from 'react'
import PropTypes from 'prop-types'
import Table from '../Table';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faCogs from '@fortawesome/fontawesome-free-solid/faCogs';

const PermissionsTable = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th><FontAwesomeIcon icon={faUser} /> User</th>
          <th><FontAwesomeIcon icon={faUsers} /> Group</th>
          <th><FontAwesomeIcon icon={faUsers} /><FontAwesomeIcon icon={faUsers} /> Others</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Read (4) <FontAwesomeIcon icon={faSearch} /></th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Write (2) <FontAwesomeIcon icon={faPencilAlt} /></th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Execute (1) <FontAwesomeIcon icon={faCogs} /></th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  )
}

PermissionsTable.propTypes = {

}

export default PermissionsTable;