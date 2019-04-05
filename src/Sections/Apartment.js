import React, {Component} from 'react';
import { MDBContainer } from "mdbreact";

import '../App.css';

export class Apartment extends Component {
    render(){
        return(
            <MDBContainer>
            <div>
                <p className="headline-text">The apartment has heating, a fan, plenty of storage, a gym and swimming pool, and cooking equipment.</p>
                <p> 
                    <ul>FAQ
                        <li>How do I turn on the heating?
                            <br />
                            There are two electric heaters, one big one in the corner of the living room. This has a switch in the bottom corner by where the Router is.
                            The other one is in the corner of the bedroom, is big and black and looks like a TV. Press the power button and then the up button. On the screen, you should
                            see a little fire/sun. If the sun has a box around it, the heater is on. It takes a few minutes to really warm up (less than 5) but is very powerful when it is going.
                        </li>
                        <li>Where are the keys?
                            <br />
                            Please *don't* get the keys from the Porter's Lodge. However, you can grab the keys you need from a lockbox outside the apartment. The instructions for collecting the keys should be sent to you by my support team.
                        </li>

                    </ul> 
                </p>
            </div>
            </MDBContainer>
        )
    }
}