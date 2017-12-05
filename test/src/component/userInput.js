import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';

class UserInput extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleUndo = this.handleUndo.bind(this);
        this.handleRedo = this.handleRedo.bind(this);
    }
    handleChange(e){
        this.props.onCompanyChange(e.target.value)
    }
    handleClick(){
        this.props.onPositionChange()
    }
    handleUndo(){
        this.props.onUndoChange()
    }
    handleRedo(){
        this.props.onRedoChange()
    }

    render() {
        return (
            <div>
                <label>
                    Text :
                </label>
                <input type="text" value={this.props.company} onChange={this.handleChange}/>
                <button onClick={this.handleClick}> next </button>
                <button onClick={this.handleUndo} disabled = {!this.props.canUndo}> Undo </button>
                <button onClick={this.handleRedo} disabled = {!this.props.canRedo}> Redo </button>
            </div>
        )
    }
}
export default UserInput;