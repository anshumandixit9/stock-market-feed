import React, {Component} from 'react';
import './SideBar.css';
import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
const data = null;

function searchingFor(search){
    return function(x){
        return x.name.toLowerCase().includes(search.toLowerCase()) || !search;
    }
}

export class SideBar extends Component {

    constructor(props) {
        super(props);
        this.data = require('./shared/data.json')
        this.state ={
            allData :this.data,
            search : ''
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event){
        this.setState({search: event.target.value})
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
                        <NavItem>
                            <NavText>
                                <input type="text" placeholder="Search" class="searchbox" onChange={this.searchHandler} value={this.state.search}/>
                            </NavText>
                        </NavItem>
                        {
                            this.state.allData.filter(searchingFor(this.state.search)).map(element => {
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
