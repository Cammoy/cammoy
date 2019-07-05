import React from 'react'
import "./styles.scss"

const Layer = ({ title, welcome }) => (
    <div className="container">
        <div className="columns">
            <div className="column is-two-fifths">
                <div className="headerPoints">

                    <div className="headerPoints__layers">
                        Solution Design <span className="bounce-it"> <i className="fa fa-angle-double-down" aria-hidden="true"></i></span>
                        <div className="headerPoints__layers__overlay">
                        Nascetur a suspendisse aenean commodo tortor congue himenaeos augue hac dis morbi per volutpat.
                        </div>
                    </div>

                    <div className="headerPoints__layers">
                        <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                        Implementation <span className="bounce-it"> </span>
                        <div className="headerPoints__layers__overlay">
                        Nascetur a suspendisse aenean commodo tortor congue himenaeos augue hac dis morbi per volutpat.
                        </div>
                    </div>
                    
                    <div className="headerPoints__layers">
                        Optimisation <span className="bounce-it"> <i className="fa fa-angle-double-down" aria-hidden="true"></i></span>
                        <div className="headerPoints__layers__overlay">
                        Nascetur a suspendisse aenean commodo tortor congue himenaeos augue hac dis morbi per volutpat.
                        </div>
                    </div>

                </div>
            </div>

            <div className="column is-three-fifths welcome">
                <h1 className="is-size-1 has-text-info">{title}</h1>
                <p className="has-text-white">{welcome}</p>
            </div>
        </div>
    </div>
);

export default Layer;