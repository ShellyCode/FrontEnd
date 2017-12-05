import React from 'react';
import Greeting from '../component/greeting'
import Table from '../component/table';
import UserInput from '../component/userInput';
import {connect} from "react-redux";
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import {updateCellContent,updateCellNumber} from "../actions/tableAction";

class App extends React.Component {
    render(){
        const row = this.props.tableState.row;
        const col = this.props.tableState.col;
        const tableContents = this.props.tableState.tableContents;
        const currentCell = tableContents[row][col];
        return(
            <div>
                <Greeting/>
                <UserInput
                    company= {currentCell}
                    onCompanyChange={(company) => this.props.updateCellContent(company)}
                    onPositionChange={() => this.props.updateCellNumber()}
                    canUndo = {this.props.canUndo}
                    canRedo ={this.props.canRedo}
                    onUndoChange={this.props.onUndo}
                    onRedoChange={this.props.onRedo}
                />
                <Table tableContents={tableContents}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        // user: state.user,
        tableState: state.contentReducer.present,
        canUndo: state.contentReducer.past.length >0,
        canRedo: state.contentReducer.future.length >0
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCellContent:(company) => {
            dispatch(updateCellContent(company));
        },
        updateCellNumber:() => {
            dispatch(updateCellNumber());
        },
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo())

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);