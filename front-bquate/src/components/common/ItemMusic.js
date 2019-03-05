import React from 'react';

export const ItemMusic = () => (
    <div>
        {/* <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-4@m uk-margin" data-uk-grid>
            <div className="uk-card-media-left uk-cover-container">
                <img src="https://images.unsplash.com/photo-1548778052-311f4bc2b502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
                <canvas width="300" height="100"></canvas>
            </div>
            <div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">Media Left</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div> */}
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-left uk-cover-container">
                <img src="https://images.unsplash.com/photo-1548778052-311f4bc2b502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" data-uk-cover/>
                <canvas width="150" height="100"></canvas>
            </div>
            <div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
    </div>
);