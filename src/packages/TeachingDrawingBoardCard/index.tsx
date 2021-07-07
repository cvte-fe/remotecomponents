import component from './component';
import { name } from './const';

export default {
  name,
  component,
  editor: () => import('./editor'),
};
