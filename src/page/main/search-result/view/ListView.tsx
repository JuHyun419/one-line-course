import React from 'react'

export interface IListViewProps {
  children: JSX.Element[];
}

const ListView: React.FC<IListViewProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ListView
