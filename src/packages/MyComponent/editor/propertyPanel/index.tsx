import DemoPanelComponent from './panel';

export default function install(dependencies) {
  return {
    title: 'demo元素',
    showPanel: (activeElements) => {

    },
    panelComponent: DemoPanelComponent(dependencies),
  }
}
