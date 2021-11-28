import * as React from 'react';

export const useEscapeHatch = (onCloseCallback: () => void) => {
  return React.useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseCallback();
      }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);
};
