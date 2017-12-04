export function updateCellContent(company){
    return {
        type: "UPDATE",
        payload: company
    };
}

export function updateCellNumber() {
    return {
        type: "NEXT",
        payload: 100
    };
}