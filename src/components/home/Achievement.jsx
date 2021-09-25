import React from 'react';

import {
    Col
} from "react-bootstrap";
const Achievement = ({ achievement }) => {
    return (
        <Col lg="6">
            <div className="pb-5 text-center">
                <a href={achievement.link}><img
                    src={achievement.img}
                    height={144}
                    width={144}
                    alt={achievement.altText}
                /></a>


            </div>
        </Col>
    );
}

export default Achievement;