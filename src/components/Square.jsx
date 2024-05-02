import { useState } from 'react';

export default function Square() {
  const [value, setValue] = useState(null);
  const handleClick = () => setValue('X');

  return (
    <button className='square' onClick={handleClick}>
      {value}
    </button>
  );
}
