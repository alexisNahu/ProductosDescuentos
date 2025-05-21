import type { SidebarItemsType } from "./model";

export const sidebarItems: SidebarItemsType = [
    {text: 'hola mundo'},
    {text: 'hola como vas'},
    {text: 'si', items: [
        {text: 'si'},
        {text: 'puede ser'},
        {text: 'sub item', items: [{text: 'sub item text'},{text: 'sub item text 2'}]}
    ]},
    {text: 'otro elemento mas'}
]