import { action, computed, makeObservable, observable } from "mobx";
import { fullName } from "../utils/fullName";
import { generateElementArray, getRandomNumbers } from '../utils/generateElementArray';
import { ElementI } from "./ElementModel";

export class ElementStore {
  constructor(totalElements: number) {
    makeObservable(this, {
      items: observable,
      searchVal: observable,
      filterVal: observable,
      filteredItems: computed,
      preSelectedItems: computed,
      selectedItems: computed,
      isSelectionDisabled: computed,
      resetPreSelected: action
    })
    this.totalElements = totalElements
  }

  totalElements: number = 0;
  public items: ElementI[] = generateElementArray(this.totalElements, getRandomNumbers(2, this.totalElements));
  public searchVal: string = '';
  public filterVal: number = 0;

  public togglePreSelected = (id: ElementI['id']) => {
      const updatedItems = this.items.map(item => {
        item.id === id && (item.preSelected = !item.preSelected);
        return item;
      });

      this.items = updatedItems; 
  };

  public setSelected = (ids: ElementI['id'][]) => {
    const updatedItems = this.items.map(item =>
       ({...item, ...{selected: ids.includes(item.id)}})
    );

    this.items = updatedItems; 
  };

  public removeSelected = (id: ElementI['id']) => {
    const updatedItems = this.items.map(item => {
      item.id === id && (item.selected = !item.selected);
      return item;
    });

    this.items = updatedItems;
  }

  public resetPreSelected = () => {
    const updatedItems = this.items.map(item =>
      ({...item, ...{preSelected: item.selected}})
    )

    this.items = updatedItems; 
  }

  public setSearchVal = (val: string) => {
    this.searchVal = val;
  }

  public setFilterVal = (val: number) => {
    this.filterVal = val
  }

  get preSelectedItems() {
    return this.items.filter(item => item.preSelected)
  }

  get selectedItems() {
    return this.items.filter(item => item.selected)
  }

  get filteredItems() {
    return this.items.filter(item => {      
      const fullElementName = fullName(item.name, item.elementNumber)
      const isMatchSearchVal = fullElementName.includes(this.searchVal)
      const isMatchFilterVal = item.elementNumber > this.filterVal
      
      return isMatchSearchVal && isMatchFilterVal
    })
  }

  get isSelectionDisabled() {
    return this.preSelectedItems.length >= 3
  }
}
