import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PermissionsTable from './components/PermissionsTable';
import ChmodModePicker from './components/ChmodModePicker';
import ChmodCode from './components/ChmodCode';

const bitsToLettersMap = {  0: '', 1: 'x', 2: 'w', 3: 'wx', 4: 'r', 5: 'rx', 6: 'rw', 7: 'rwx' };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'code',
      bits: {
        user: 0,
        group: 0,
        others: 0,
      },
    };
  }

  /**
   * Updates the mode in state
   *
   * @param {string} mode - 'code' or 'ugo'
   * @return {undefined}
   */
  handleModeChange = mode => this.setState({ mode });

  /**
   * Toggle bits in the state for u-g-o
   * @param {string} userType - one of "user"/"group"/"others"
   * @param {number} bits - rwx to toggle
   * @return {undefined}
   */
  handleCheckboxChange = (userType, bits) => {
    let newState = {};
    newState[userType] = this.state.bits[userType] + bits;
    this.setState({
      bits: {
        ...this.state.bits,
        ...newState,
      },
    });
  }

  renderChmodCode(mode) {
    const { user, group, others } = this.state.bits;
    return mode === 'code'
      ? `${user}${group}${others}`
      : `u=${bitsToLettersMap[user]},g=${bitsToLettersMap[group]},o=${bitsToLettersMap[others]}`;
  }

  render() {
    const { mode } = this.state;

    return (
      <main className="App">
        <Grid fluid>
          <Row center="xs">
            <Col>
              <PermissionsTable handleCheckboxChange={this.handleCheckboxChange}/>
              <ChmodModePicker mode={mode} onModeChange={this.handleModeChange}/>
              <ChmodCode mode={mode} code={this.renderChmodCode(mode)}/>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }
}

export default App;
