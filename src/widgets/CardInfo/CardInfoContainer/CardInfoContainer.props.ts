import {CardInfoUpProps} from '../CardInfoUp/CardInfoUp.props';
import {CardInfoDownProps} from '../CardInfoDown/CardInfoDown.props';
import {StageProgressProps} from '../../StageProgress/StageProgress.props';
import {StageItemProps} from '../../StageItem/StageItem.props';
import {InvoiceProgressProps} from '../../InvoiceProgress/InvoiceProgress.props';

export interface CardInfoContainerProps {
    title: string;
    month: CardInfoUpProps['month'];
    year: CardInfoUpProps['year'];
    type: CardInfoUpProps['type'];
    src: CardInfoUpProps['src'];
    price: CardInfoDownProps['price'];
    remain: CardInfoDownProps['remain'];
    sum: CardInfoDownProps['sum'];
    progressData: CardInfoDownProps['progressData'];
    isExpired: StageProgressProps['isExpired'];
    progress: StageProgressProps['progress'];
    timeColor: StageItemProps['timeColor'];
    profitColor: StageItemProps['profitColor'];
    hours: StageItemProps['hours'];
    percentage: StageItemProps['percentage'];
    circleType: InvoiceProgressProps['type'];
}