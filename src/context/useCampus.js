import { useContext } from 'react';
import { CampusContext } from './campusContextDef';

export function useCampus() {
  const context = useContext(CampusContext);
  if (!context) {
    throw new Error('useCampus must be used within a CampusProvider');
  }
  return context;
}

export default useCampus;
