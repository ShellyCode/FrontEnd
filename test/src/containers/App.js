import React from 'react';
import Greeting from '../component/greeting'
import Table from '../component/table';
import UserInput from '../component/userInput';
import {connect} from "react-redux";
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import {updateCellContent,updateCellNumber} from "../actions/tableAction";

const App = (props) => {
    const row = props.tableState.row;
    const col = props.tableState.col;
    const tableContents = props.tableState.tableContents;
    const currentCell = tableContents[row][col];
    return(
        <div>
            <Greeting/>
            <UserInput
                company= {currentCell}
                onCompanyChange={(company) => props.updateCellContent(company)}
                onPositionChange={() => props.updateCellNumber()}
                canUndo = {props.canUndo}
                canRedo ={props.canRedo}
                onUndoChange={props.onUndo}
                onRedoChange={props.onRedo}
            />
            <Table tableContents={tableContents}/>
        </div>
    );
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