import * as React from 'react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu/Menu';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import UserMenu from './UserMenu';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import RegistrationForm from './RegistrationForm';

export default class AppLayout extends React.Component {
    render() {
        return(
            <div>
                <Menu pointing inverted style={{borderRadius: 0}} color={'blue'}>
                    <Menu.Item>
                        <Icon name={'bars'} size="large"/>
                    </Menu.Item>
                    <Menu.Item>
                        <Header as={'h2'} inverted content={'Bug Tracker'}/>
                    </Menu.Item>
                    <Menu.Item position={'right'}>
                        <UserMenu/>
                    </Menu.Item>
                </Menu>
                <Grid container>
                    <RegistrationForm/>
                </Grid>
            </div>
        );
    }
}
