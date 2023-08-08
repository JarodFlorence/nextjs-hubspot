import React from 'react';
import { useDrag } from 'react-dnd';

const DealCard = ({ deal }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'DEAL',
    item: { id: deal.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {deal.name} - ${deal.amount}
      {/* ... Other deal details ... */}
    </div>
  );
};

export default DealCard;
