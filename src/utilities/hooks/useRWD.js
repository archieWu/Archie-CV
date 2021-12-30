import {useEffect, useState} from 'react';

const useRWD = () => {
  const [device, setDevice] = useState(false);

  const handleRWD = () => {
    if (window.innerWidth > 1200) {
      setDevice(false);
    } else {
      setDevice(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleRWD);
    return (() => {
      window.removeEventListener('resize', handleRWD);
    });
  }, []);

  return device;
};

export default useRWD;
