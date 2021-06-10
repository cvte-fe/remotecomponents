import DemoPanelComponent from './panel';
import { name } from '../../const'; // 从统一的位置获取本元素的名称

export default function install(dependencies) {
  return {
    title: 'demo元素',
    showPanel: (activeElements) => {
      const target = activeElements.findIndex(ele => ele._type === name);
      return target !== -1;
    },
    panelComponent: DemoPanelComponent(dependencies),
  }
}
