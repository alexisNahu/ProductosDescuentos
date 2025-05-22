import type { SidebarItemsType } from "./model";

export const sidebarItems: SidebarItemsType = [
  { text: 'Dashboard' },
  { 
    text: 'Usuarios', 
    items: [
      { text: 'Lista de usuarios' },
      { text: 'Crear usuario' },
      { 
        text: 'Roles y permisos', 
        items: [
          { text: 'Roles' },
          { text: 'Permisos' },
        ]
      },
    ]
  },
  { 
    text: 'Productos', 
    items: [
      { text: 'Inventario' },
      { text: 'Categorías' },
      { text: 'Agregar producto' },
    ]
  },
  { 
    text: 'Pedidos', 
    items: [
      { text: 'Pedidos pendientes' },
      { text: 'Historial de pedidos' },
    ]
  },
  { text: 'Reportes' },
  { text: 'Configuración' },
]
