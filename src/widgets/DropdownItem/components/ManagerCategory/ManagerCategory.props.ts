import {DropdownItemProps} from '../../DropdownItem.props';
import {ItemCategoriesProps} from '../../../../entities/ItemCategories/ItemCategories.props';

export interface ManagerCategoryProps {
    all: DropdownItemProps['all'];
    src: DropdownItemProps['src'];
    managerList: ItemCategoriesProps['manager'];
}