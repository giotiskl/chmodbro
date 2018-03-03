import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Header from './components/Header';
import Alert from './components/Alert';
import PermissionsTable from './components/PermissionsTable';
import ChmodModePicker from './components/ChmodModePicker';
import ChmodCode from './components/ChmodCode';
import Footer from './components/Footer';

const bitsToLettersMap = {  0: '', 1: 'x', 2: 'w', 3: 'wx', 4: 'r', 5: 'rx', 6: 'rw', 7: 'rwx' };

const Wrapper = styled.main`
  .container-fluid {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .App__body {
    flex-grow: 1;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'code',
      bits: {
        user: 0,
        group: 0, others: 0,
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
      <Wrapper className="App">
        <Grid fluid>
          <Header/>
          <Row center="xs" className="App__body">
            <Col>
              <PermissionsTable handleCheckboxChange={this.handleCheckboxChange} />
              <Alert code={this.renderChmodCode('code')}/>
              <ChmodModePicker mode={mode} onModeChange={this.handleModeChange} />
              <ChmodCode mode={mode} code={this.renderChmodCode(mode)} />
            </Col>
          </Row>
          <Row bottom="xs" center="xs">
            <Footer />
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default App;
