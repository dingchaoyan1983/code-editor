import React from 'react';
import { Link } from 'react-router';
import Col from 'react-bootstrap/lib/Col';

export default function(props) {
    return <li className="project clearfix">
                <div className="project__name">
                    <h3>
                        <Link to="test/test">Interview</Link>
                    </h3>
                </div>
                <div className="project__description">
                    PNG Dynamic Buckinghamshire Future Alabama repurpose Branding Trail withdrawal neural online alarm Fish world-class local area network transform encoding Ergonomic Plastic Cheese Tasty Paradigm
                </div>
                <div className="row">
                    <Col sm={8} className="project__authors">
                        ewrewrewrewrw,ewrewrewrewrw,ewrewrewrewrw,ewrewrewrewrw,ewrewrewrewrw
                    </Col> 
                    <Col sm={4} className="project__createTime">
                            ewrewrewrewrw
                    </Col> 
                </div>
              </li>
}