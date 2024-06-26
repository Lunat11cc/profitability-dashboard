import React, {FC} from 'react';
import {SortItemProps} from './SortItem.props';
import classNames from 'classnames';
import {cvaButtonContainer, cvaTransparent, cvaWhite} from './SortItemStyles';

const SortItem: FC<SortItemProps> = ({state, children}) => {
    return (
        <button className={classNames([cvaButtonContainer()], {
            [cvaWhite()]: state === 'selected',
            [cvaTransparent()]: state === 'default',
        })}>
            {children}
        </button>
    );
};

export default SortItem;