import React from 'react';
import confLogo from '../images/badge-header.svg';
import "./Badge.css"
class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>
                <div className="Badge__section-name ">
                    <img className="Badge__avatar" src="https://s.gravatar.com/avatar/d3a4caa3b2a1882555c69bbd0deaa005?s=80" alt="Avatar" />

                    <h1>Kevin <br />Martello</h1>
                </div>
                <div className="Badge__section-info">
                    <h2>Frontend Engineer</h2>
                    <div>@kevinmartello</div>
                </div>
                <div className="Badge__footer">
                    #platziconf
        </div>

            </div>
        );
    }
}

export default Badge;
