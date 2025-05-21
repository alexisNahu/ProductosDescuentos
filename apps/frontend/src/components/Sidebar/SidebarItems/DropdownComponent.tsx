import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import type { DropdownItem } from '../model';
import SidebarItem from './SidebarItem';

function DropdownComponent({ item }: { item: DropdownItem }) {
  // Convertimos el texto a un ID válido (sin espacios ni símbolos)
  const safeId = item.text.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className='accordion accordion-flush' id={`accordionFlush-${safeId}`}>
      <div className='accordion-item'>
        <h2 className='accordion-header' id={`flush-heading-${safeId}`}>
          <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target={`#flush-collapse-${safeId}`} 
            aria-expanded="false" 
            aria-controls={`flush-collapse-${safeId}`}
          >
            {item.text}
          </button>
        </h2>
        <div 
          id={`flush-collapse-${safeId}`} 
          className="accordion-collapse collapse" 
          aria-labelledby={`flush-heading-${safeId}`}
          data-bs-parent={`#accordionFlush-${safeId}`}
        >
          {item.items.map((s_item, i) => (
            <div className='accordion-body p-1' key={i}>
              <SidebarItem item={s_item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DropdownComponent;
