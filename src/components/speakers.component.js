import React, { Component } from 'react';

export default class Speaker extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
        <>
        <div class="speaker_title">
            <h1>Speakers of the Conference</h1>
        </div>
        <div class="row">
            <div class="column">
              <div class="speaker-container">
                <img src="Speaker1.jpg" alt="Speaker 1" /> 
                <div class="content">
              <h1>Dalinar Kholin</h1>
              <p>On Fantasy Writing - Room A</p>
                </div>
              </div>
            </div>
            
            <div class="column">
              <div class="speaker-container">
                <img src="Speaker2.jpg" alt="Speaker 2" /> 
                <div class="content">
              <h1>Navani Kholin</h1>
              <p>Women in Writing - Room B</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="speaker-container">
                <img src="Speaker3.jpg" alt="Speaker 3" /> 
                <div class="content">
              <h1>Jasnah Kholin</h1>
              <p>Authoring for Beginners - Room C</p>
                </div>
              </div>
            </div>
        </div>
        </> 
        )
    }
}
