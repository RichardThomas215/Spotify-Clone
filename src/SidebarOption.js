import React from 'react';
import "./SidebarOption.css"

function SidebarOption({ title, id, Icon}) {
  return (
     <div className="sideBarOption">
        {Icon && <Icon className="sidebarOption__icon"/> }
        {Icon ? <h4 playListID={id}>{title}</h4> : <p playListID={id}>{title}</p>}
     </div>
  );
}

export default SidebarOption;
