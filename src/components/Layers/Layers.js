import React from 'react'
import PropTypes from 'prop-types'
import "./styles.scss"

const Layer = ({ title, subheading }) => (
    <>
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
        <div className="column is-three-fifths">
            <h1>{title}</h1>
            <h2>{subheading}</h2>
        </div>
    </>
);

export default Layer;