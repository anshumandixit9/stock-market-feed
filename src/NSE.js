import React, {Component} from 'react';
import './NSE.css'

export class NSE extends Component{
    constructor() {
        super();
        this.state = {
            status: "NULL",
            Nifty : []
        };
    }

    componentDidMount() {
        const apiURL1 = 'https://www1.nseindia.com//emerge/homepage/smeNormalMktStatus.json';
        fetch(apiURL1)
            .then(response => response.json())
            .then(data => this.setState({status: data.NormalMktStatus}))
        const apiURL2 = 'https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/liveIndexWatchData.json'
        fetch(apiURL2)
            .then(response => response.json())
            .then(data => this.setState({Nifty: data.data}))
    }

    render(){
        console.log("rs")
        console.log(this.state.status)
        console.log("rs")
        console.log(this.state.Nifty)
        console.log("rs")
           return(
            <div >
              <div class = "content">
                  <button className={this.state.status} >
                   {this.state.status}
                  </button>
              </div>
              <div>
                  <div class="">
                      {
                           this.state.Nifty.map(element => {
                            if(element.percChange>0){
                               return(
                                <div class="grid-container1">
                                    <div class="grid-item name">{element.indexName}</div>
                                    <div class="grid-item price">{element.last}({element.percChange}%)</div>
                                </div>
                            )}
                            else{
                                return(
                                    <div class="grid-container2">
                                        <div class="grid-item name">{element.indexName}</div>
                                        <div class="grid-item price">{element.last}({element.percChange}%)</div>
                                    </div>
                                )
                            }
                        })
                    }
                  </div>
              </div>
            </div>
        )
    }
}