import React, {Component} from 'react';
import { NavBar } from "../home/NavBar";

class MainOne extends Component {
    constructor(){
        super();
        this.state = {
            numbers:[1,2,3]
        }
    }
    componentWillMount(){
        let startNumber = 100;
        let arrayNumbers = [];
        let response = '';
        for(let c=1; c <= startNumber; c++){
            response = c;
            if(c%3 === 0) response = 'Multi'
            if(c%5 === 0) response = 'IT'
            if(c%3 === 0 && c%5 === 0) response = 'Multipli'
            arrayNumbers.push(response);
        }
        this.setState({numbers:arrayNumbers});

    }
    render(){
        let {numbers} = this.state;
        return (
            <div>
                <NavBar />
                <p>He is the solution</p>
                {numbers.length > 0 ?
                    numbers.map(item => 
                    <div className="uk-child-width-1-1@m uk-grid-small uk-grid-match" data-uk-grid >
                        <div>
                          <div className="uk-card uk-card-default uk-card-body"><b>{item}</b> </div>
                        </div>
                    </div>) :
                    <p>No existen numeros por imprimir</p>
                }
            </div>
        );
    }

}

export default MainOne;