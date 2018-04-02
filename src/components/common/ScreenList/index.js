import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ScreenListItem} from "../ScreenListItem"

const ScreenList = ({data}) => (
    data.map((item, idx) =>
        <ScreenListItem
            item={item}
            key={idx}
        />
    )
);

ScreenList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired
};

export {ScreenList};