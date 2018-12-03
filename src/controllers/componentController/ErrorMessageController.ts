import {Component, ReactNode} from 'react';

//timeout before clear error message
import {TIMEOUT_ERROR_MESSAGE} from 'src/config';

//container
import ErrorMessageContainer,
{IPropsErrorMessageContainer} from 'src/containers/componentContainer/ErrorMessageContainer';


export default (View: (props: IPropsView) => ReactNode) => {

    class ErrorMessageController extends Component<IPropsErrorMessageContainer, IState> {

        private static getDerivedStateFromProps(props: IPropsErrorMessageContainer) {

            if (props.errorMessage) {
                props.onClearErrorMessage();

                return {
                    errorMessage: props.errorMessage,
                    errorActive: true,
                    errorVisible: true,
                };
            }

            return null;
        }


        readonly state = {
            errorActive: false,
            errorVisible: false,
            errorMessage: '',
        };
        private timerId1: NodeJS.Timer;
        private timerId2: NodeJS.Timer;


        public shouldComponentUpdate(nextProps: IPropsErrorMessageContainer) {

            if (nextProps.errorMessage) {
                clearTimeout(this.timerId1);
                clearTimeout(this.timerId2);

                this.timerId1 = setTimeout(() => {
                    this.setState({
                        errorActive: false,
                    });


                    this.timerId2 = setTimeout(() => {
                        this.setState({
                            errorVisible: false,
                        });
                    }, 2000);

                }, TIMEOUT_ERROR_MESSAGE);
            }

            return true;
        }


        render() {
            const props: IPropsView = {
                errorActive: this.state.errorActive,
                errorVisible: this.state.errorVisible,
                errorMessage: this.state.errorMessage,
            };

            return this.state.errorVisible && View(props);
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/

    }

    return ErrorMessageContainer(ErrorMessageController);

};

interface IState {
    readonly errorActive: boolean;
    readonly errorVisible: boolean;
    readonly errorMessage: string;
}

export type IPropsView = IState;
