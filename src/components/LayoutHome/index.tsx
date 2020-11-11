import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import TabList from '../TabList'
import Container from '@material-ui/core/Container';
import Backdrop from '../Backdrop';
import Header from "../Header"

interface StateProps {
  type00: any[],
  type01: any[],
  type02: any[],
  type03: any[],
  type04: any[],
  oldtype00: any[],
  oldtype01: any[],
  oldtype02: any[],
  oldtype03: any[],
  oldtype04: any[],
  selectValue: any,
  search: any,
  loading: any,
  selected: any
}

interface DispatchProps {
  loadRequest(filters: any): void,
  saveSelected(filters: any): void,
  searchData(search: any): void,
  loadLogin(): void
}

type Props = StateProps & DispatchProps

class LayoutHome extends Component<Props> {

  componentDidMount() {
    const { loadRequest, loadLogin } = this.props;
    loadLogin();
    setTimeout(() => {
      loadRequest({ filter01: { cashback: 0 } });
    }, 500);
  }

  handleChange = (event: any) => {
    const { loadRequest, saveSelected } = this.props;
    saveSelected(event.target.value)
    loadRequest({ filter01: { cashback: Number(event.target.value) } });
  }

  render() {
    const { type01, type02, type03, type04, selectValue, search, searchData, loading, selected, loadRequest } = this.props;

    return (
      <div>
        <Header />
      <Container fixed >
      
        
        <div style={{ fontFamily: "Lato", marginBottom: 150, paddingBottom: 200 }} >
          
          <TabList props={{...this.props, handleChange: this.handleChange, loadRequest}} />
        </div>
      </Container>
      <Backdrop show={loading}/>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  type00: state.repositories.type00,
  type01: state.repositories.type01,
  type02: state.repositories.type02,
  type03: state.repositories.type03,
  type04: state.repositories.type04,
  oldtype00: state.repositories.oldtype00,
  oldtype01: state.repositories.oldtype01,
  oldtype02: state.repositories.oldtype02,
  oldtype03: state.repositories.oldtype03,
  oldtype04: state.repositories.oldtype04,
  selectValue: state.repositories.selectValue,
  selected: state.repositories.selected,
  search: state.repositories.search,
  loading: state.repositories.loading
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LayoutHome);
