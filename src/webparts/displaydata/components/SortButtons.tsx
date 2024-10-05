import * as React from 'react';

interface ISortButtonsProps {
  onSort: (key: string) => void;
}

const SortButtons: React.FC<ISortButtonsProps> = ({ onSort }) => {
  return (
    <div>
      <button onClick={() => onSort('Title')}>Sort by Title</button>
      <button onClick={() => onSort('Created')}>Sort by Created Date</button>
    </div>
  );
};

export default SortButtons;
