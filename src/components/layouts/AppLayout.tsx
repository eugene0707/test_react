import * as React from 'react';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu/Menu';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';

export default class AppLayout extends React.Component {
    render() {
        return(
            <div>
                <Menu pointing inverted style={{borderRadius: 0}}>
                    <Menu.Item>
                        <Icon name={'settings'} size="large"/>
                    </Menu.Item>
                </Menu>
                <Container>
                </Container>
            </div>
        );
    }
}
