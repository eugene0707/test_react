import * as React from 'react';

import { Segment, Grid, Form } from 'semantic-ui-react';

export default class RegistrationForm extends React.Component {
    state={
        name:"",
    };

    changeNameHandler=(event: React.SyntheticEvent<HTMLInputElement>) => {
        const name=event.currentTarget.value;
        this.setState({name})
    };

    render() {
        return (
            <Grid.Row>
                <Grid.Column width={4}>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Segment>
                        <Form>
                            <Form.Input label={'name'} value={this.state.name} onChange={this.changeNameHandler}/>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        );
    }
}
