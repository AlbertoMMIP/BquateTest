import React, {Component} from 'react';
import { NavBar } from "../home/NavBar";

class MainOne extends Component {
    constructor(){
        super();
        this.state = {
            numbers:[]
        }
    }
    componentWillMount(){
        let number = 100;
        let arrayNumbers = [];
        let response = '';
        for(let c=1; c <= number; c++){
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
                <h2>Prints Numbers</h2>
                <div className="uk-section">
                    <div className="uk-container">
                        <p>Write a program that prints all the numbers from 1 to 100. However, for multiples of 3, instead of the number, print "Multi". For multiples of 5 print "IT". For numbers which are multiples of both 3 and 5, print "Multipli". But here's the catch: you can use only one `if`. No multiple branches, ternary operators or `else`.</p>
                    </div>
                </div>
                
                <div className="uk-section">
                    <div className="uk-container">
                        <div className="uk-child-width-1-6@m uk-child-width-1-3@s uk-grid-small uk-grid-match" data-uk-grid>
                            {numbers.length > 0 ?
                                numbers.map((num, index) => <div key={index} className="uk-card uk-card-default uk-card-body uk-flex uk-flex-center">{num} </div>) :
                                <p>Sin técnicas cargadas</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MainOne;