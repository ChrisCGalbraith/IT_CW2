import React, { Component } from 'react';

export default class Speaker extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
        <>
        <div class="row">
            <div class="column">
              <div class="speaker-container">
                <img src="speaker1.jpg" alt="Speaker 1" /> 
                <div class="content">
              <h1>Dalinar Kholin</h1>
              <p>Theories of the Stormfather</p>
                </div>
              </div>
            </div>
            
            <div class="column">
              <div class="speaker-container">
                <img src="speaker2.jpg" alt="Speaker 2" /> 
                <div class="content">
              <h1>Navani Kholin</h1>
              <p>Fabrial Mechanics</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="speaker-container">
                <img src="speaker3.jpg" alt="Speaker 3" /> 
                <div class="content">
              <h1>Jasnah Kholin</h1>
              <p>On the origins of Shadesmar</p>
                </div>
              </div>
            </div>

        </div>
        </> 
        )
    }
}
