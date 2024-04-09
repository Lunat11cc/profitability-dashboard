import {DropdownItemProps} from '../../DropdownItem.props';
import {ItemCategoriesProps} from '../../../../entities/ItemCategories/ItemCategories.props';

export interface ProjectCategoryProps {
    all: DropdownItemProps['all'];
    color: DropdownItemProps['color'];
    projectList: ItemCategoriesProps['project'];
}