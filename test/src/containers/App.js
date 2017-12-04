import React from 'react';
import Greeting from '../component/greeting'
import Table from '../component/table';
import UserInput from '../component/userInput';
import {connect} from "react-redux";
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
                <UserInput company= {currentCell} onCompanyChange={(company) => this.props.updateCellContent(company)} onPositionChange={() => this.props.updateCellNumber()}/>
                <Table tableContents={tableContents}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        // user: state.user,
        tableState: state.contentReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCellContent:(company) => {
            dispatch(updateCellContent(company));
        },
        updateCellNumber:() => {
            dispatch(updateCellNumber());
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);