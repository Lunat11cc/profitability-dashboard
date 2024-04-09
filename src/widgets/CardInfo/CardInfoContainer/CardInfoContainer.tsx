import React, {FC} from 'react';
import {cvaCardInfo, cvaWrapper} from '../../../app/styles/MainStyles';
import CardInfoUp from '../CardInfoUp/CardInfoUp';
import CardInfoDown from '../CardInfoDown/CardInfoDown';
import StageProgress from '../../StageProgress/StageProgress';
import CardItemGraph from '../../CardItemGraph/CardItemGraph';
import StageItem from '../../StageItem/StageItem';
import InvoiceProgress from '../../InvoiceProgress/InvoiceProgress';
import {CardInfoContainerProps} from './CardInfoContainer.props';

const CardInfoContainer: FC<CardInfoContainerProps> = ({
   title,
   month,
   year,
   type,
   src,
   price,
   remain,
   sum,
   progressData,
   isExpired,
   progress,
   timeColor,
   profitColor,
   hours,
   percentage,
   circleType,
}) => {
    return (
        <div className={cvaWrapper()}>
            <div className={cvaCardInfo()}>
                <CardInfoUp title={title} month={month} year={year} type={type} src={src}/>
                <CardInfoDown price={price} remain={remain} sum={sum} progressData={progressData}>
                    <StageProgress isExpired={isExpired} progress={progress}/>
                </CardInfoDown>
            </div>
            <CardItemGraph>
                <StageItem timeColor={timeColor} profitColor={profitColor} hours={hours} percentage={percentage}>
                    <InvoiceProgress sum={sum} type={circleType}/>
                </StageItem>
            </CardItemGraph>
        </div>
    );
};

export default CardInfoContainer;