import React from 'react';
import {connect} from 'react-redux';


//dispatcher
import {
    onClearErrorMessage
} from 'src/store/reducers/errorMessage/actions';
//global store type
import {IGlobalStore} from 'src/store/rootReducer';


export default (Controller: typeof React.Component) => {

    const mapDispatchToProps = {
        onClearErrorMessage
    };

    const mapStateToProps = (state: IGlobalStore) => ({
        errorMessage: state.errorMessage.message,
    });

    const ErrorMessageContainer = (props: IPropsErrorMessageContainer) => <Controller {...props}/>;

    return connect(mapStateToProps, mapDispatchToProps)(ErrorMessageContainer);
};


export interface IPropsErrorMessageContainer {
    readonly onClearErrorMessage: () => void;

    readonly errorMessage: string;
}
