export interface SingleItem {
    text: String
}

export interface DropdownItem {
    text: String
    items: Array<DropdownItem | SingleItem>
}

export type SidebarItemsType = Array<SingleItem | DropdownItem>