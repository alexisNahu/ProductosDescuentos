
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import type { DropdownItem } from '../model';

function DropdownComponent({ item }: { item: DropdownItem }) {

  return (
    <div className='dropdown'>
      <button 
        className='btn btn-secondary dropdown-toggle' 
        type='button' 
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {item.text}
      </button>
      <ul className='dropdown-menu'>
        {item.items.map((s_item, index) => (
          <li key={index}>
            <a className="dropdown-item" href="#">
              {s_item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownComponent;