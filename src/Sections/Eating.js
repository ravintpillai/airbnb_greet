import React, {Component} from 'react';
import '../App.css';
import { EatingCarousel } from './Carousels/EatingCarousel';
import { MDBContainer } from
"mdbreact";


export class Eating extends Component {
    render(){
        return (
            <div>
                <div className="mobile-hide">
                    <EatingCarousel />
                </div>
                <br />
                <MDBContainer>
                <div>
                    <h1>British Indian Food</h1>
                    <p>If you're not familiar with really great South Asian food, prepare to be amazed:
                        <ul>
                            <li>Hoppers - The Hoppers on Frith Street is the best South Asian food I have outside of the Subcontinent. Try the hoppers & the Bonemarrow Varuval</li>
                            <li>Dishoom - So popular that a few sprung up around the city - this British/Indian spot is awesome for Brunch or Dinner.</li>
                            <li>Tayyabs - Pakistani food in East London - delicious and trendy</li>
                            <li>The Cinnamon Club - A few mins walk from the apartment, famous politicians eat here a lot. After my Sister's wedding, my family came here to eat!</li>
                        </ul>
                    </p>
                    <h1>Pub Food</h1>
                    <p>
                        <ul>
                            <li>The Grazing Goat - A gastronomic pub, really great food and good, Pub vibes</li>
                            <li>Ye Olde Cheshire Cheese - A famous old pub, does grea</li>
                            <li>Vaulty Towers - Less for the food and more for the Vibez, but it is fun in there</li>
                            <li>The Red Lion - Right next to Parliament - in days gone by, Prime Ministers and dignitaries would grab a drink here.</li>
                            <li>The Churchill Arms - West London, on the Fancy side for Pubs, but incredible atmosphere, great food and hearty Beer/Wine</li>
                        </ul>
                    </p>
                    <h1>Fine Dining</h1>
                    <p>
                        <ul>
                            <li>Alain Ducasse @The Dorchester - 3 Star Michelin Restaurant - French Food </li>
                            <li>The Araki - 3 Star Michelin Restaurant - Japanese Food</li>
                        </ul>
                    </p>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=120ziQ05Q65Na4WYL2v_l0YvMDAjftSDk" width="640" height="480" title="eating_map"></iframe>                
                </div>
                </MDBContainer>
            </div>
        )
    }
}