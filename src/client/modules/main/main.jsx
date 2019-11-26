import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Modal from '../../reactlibs/Modal';;
import {withRouter} from 'react-router-dom'

import {
    Wrapper,
    MainBars,
    ModalButton,
    WrapperContent,
} from './styledComponent';

export class Main extends PureComponent {
    static propTypes = {
        children: PropTypes.array.isRequired,
        isModalOpen: PropTypes.bool.isRequired,
        toggleModalFunc: PropTypes.func.isRequired,
        changeLocationOriginFunc: PropTypes.func.isRequired,
    };

    redirect = (path) => {
        const {
            history,
            changeLocationOriginFunc,
        } = this.props;


        const redirect = {
            history: history,
            path: path,
        };

        changeLocationOriginFunc({redirect: redirect});
    };

    render() {

        const {
            children,
            isModalOpen,
            toggleModalFunc,
        } = this.props;

        const {
            redirect
        } = this;
        return (
            <Wrapper isModalOpen={isModalOpen}>
                <MainBars onClick={toggleModalFunc} isModalOpen={isModalOpen}/>
                <Modal
                    isOpen={isModalOpen}
                    onClose={toggleModalFunc}
                >
                    <ModalButton
                        onClick={(() => redirect('/'))}
                    >
                        {'Movies'}
                    </ModalButton>

                    <ModalButton
                        onClick={(() => redirect('sessions'))}
                    >
                        {'Sessions'}
                    </ModalButton>
                </Modal>
                <WrapperContent>
                    {children}
                </WrapperContent>
            </Wrapper>
        );
    }
}

export default withRouter(Main)