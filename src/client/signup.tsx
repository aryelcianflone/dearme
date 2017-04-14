import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { common } from './styles';

type Props = {
    onComplete: (signup: SignupState) => void;
    className?: string;
};

export type SignupState = {
    phone: string | null,
    handle: string | null,
};

const styles = StyleSheet.create({
    pull_in: {
        marginLeft: '-4px',
    }
});

export class SignupComponent extends Component<Props, SignupState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            phone: null,
            handle: null,
        };
    }

    changedPhone(phone: string | null) {
        this.setState({ phone });
    }

    changedHandle(handle: string | null) {
        this.setState({ handle });
    }

    render() {
        let { onComplete } = this.props;

        let phone =
            <div className={css(common.med_text, common.large_space_but_a_little_smaller, common.fade_in_up_slow)}>
                <span>my phone number is</span>
                <input type="text"
                    autoFocus={true}
                    className={css(common.text_input)}
                    onChange={(e) => this.changedPhone(e.target.value)} />
            </div>;

        let handle = !this.state.phone ? <div></div> :
            <div className={css(common.fade_in_up_slow)}>
                <div className={css(common.med_text, common.large_space)}>
                    <span>my instagram handle is @</span>
                    <input type="text"
                        className={css(common.text_input, styles.pull_in)}
                        onChange={(e) => this.changedHandle(e.target.value)} />
                </div>
                <div className={css(common.med_text)}>
                    <button className={css(common.button)}
                        onClick={() => onComplete(this.state)}>submit</button>
                </div>
            </div>;

        return (
            <div className={this.props.className}>
                {phone}
                {handle}
            </div>
        );
    }
}
