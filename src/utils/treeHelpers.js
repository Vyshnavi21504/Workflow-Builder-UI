
export const generateId = () => {
  return 'node-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
};

export const initialWorkflow = {
  id: 'root',
  type: 'start',
  label: 'Start',
  children: [],
};