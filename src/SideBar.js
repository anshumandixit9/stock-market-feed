import React, {Component} from 'react';
import './SideBar.css';
import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const data = null;

export class SideBar extends Component {

    constructor() {
        super();
        this.data = require('./shared/data.json')
    }

    render() {

        return (
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}>
                <SideNav.Toggle/>
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="stocks-list">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            List
                        </NavText>
                        {
                            this.data.map(element => {
                                return (
                                    <NavItem eventKey={element.name}>
                                        <NavText>
                                            {element.name}
                                        </NavText>
                                    </NavItem>
                                )
                            })
                        }
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

        );
    }
}
