import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import type { DropdownItem } from '../model';
import SidebarItem from './SidebarItem';

function AccordeonComponent({ item }: { item: DropdownItem }) {
  const safeId = item.text.replace(/\s+/g, '-').toLowerCase();

  return (
    <>
    <style>
        {`
          #flush-heading-${safeId} > .accordion-button::after {
            /* Cambia el color de la flechita (fill en SVG) */
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFD700' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
          }
        `}
      </style>
    
    <div className='accordion accordion-flush' id={`accordionFlush-${safeId}`}>
      <div className='accordion-item bg-dark-chocolate'>
        <h2 className='accordion-header' id={`flush-heading-${safeId}`}>
          <button 
            className="accordion-button collapsed btn text-white bg-dark-chocolate" 
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
    </>
  );
}

export default AccordeonComponent;
