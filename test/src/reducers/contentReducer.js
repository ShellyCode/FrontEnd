const initialState = {
    tableContents: [[1,2,3],[4,5,6]],
    row: 0,
    col: 0
}
const contentReducer = (state = {
    tableContents: [[1,2,3],[4,5,6]],
    row: 0,
    col: 0} , action)  => {

    let row = state.row;
    let col = state.col;
    let tableContents = state.tableContents.slice();
    console.log("state   ", state);
    switch (action.type) {
        case 'NEXT':
            if(col >= 2){
                row = row + 1;
                col = 0;
            }else{
                col = col +1;
            }
            if(row > tableContents.length-1){
                tableContents = tableContents.concat([Array(3).fill("")]);
            }
            state = {
                ...state,
                tableContents: tableContents,
                row: row,
                col: col
            };
            break;
        case 'UPDATE':
            tableContents[state.row][state.col] = action.payload;

            state = {
                ...state,
                tableContents: tableContents
            };
            break;
    };
    return state;
};

export default contentReducer;
