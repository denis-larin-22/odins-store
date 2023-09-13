export function createAction(type) {
    const actionCreator = () => ({ type });
    actionCreator.TYPE = type;
  
    return actionCreator;
}
  
export function createPayloadAction(type) {
    const actionCreator = (payload) => ({ type, payload });
    actionCreator.TYPE = type;
  
    return actionCreator;
}
  
export function createErrorAction(type) {
    const actionCreator = (error) => ({ type, error });
    actionCreator.TYPE = type;
  
    return actionCreator;
}