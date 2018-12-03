const initialState: IStoreErrorMessage = {
    message: '',
};

export default initialState;


export interface IStoreErrorMessage {
    readonly message: string;
}
