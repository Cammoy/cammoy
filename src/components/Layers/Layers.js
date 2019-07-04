import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"

const Layer = props => (
    <div className="col-sm-5">
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
);

export default Layer;