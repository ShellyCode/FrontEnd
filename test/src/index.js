import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Greeting from './component/greeting'
import Table from './component/table';
import UserInput from './component/userInput';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [[1,2,3],[4,5,6]],
            row: 0,
            col: 0
        }
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
    }
    handleCompanyChange(company){

        const row = this.state.row;
        const col = this.state.col;
        const contents = this.state.contents;
        contents[row][col] = company;
        this.setState({
                contents: contents,
        });
    }
    handlePositionChange(){
        let row = this.state.row;
        let col = this.state.col;
        let contents = this.state.contents.slice();
        if(col >= 2){
            row = row + 1;
            col = 0;
        }else{
            col = col +1;
        }
        if(row > contents.length-1){
            contents = contents.concat([Array(3).fill("")]);
        }
        this.setState({
            row: row,
            col: col,
            contents: contents
        });
    }

    render(){
        const row = this.state.row;
        const col = this.state.col;
        const contents = this.state.contents;
        console.log("After   ", contents);
        const currentCell = contents[row][col];
        return(
            <div>
                <Greeting/>
                <UserInput company={currentCell} onCompanyChange={this.handleCompanyChange} onPositionChange={this.handlePositionChange}/>
                <Table tableContents={contents}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));