import DemoPanelComponent from './DemoPanelComponent';

export default function install(dependencies) {
  return {
    title: 'demo元素',
    showPanel: (activeElements) => {
      console.log('activeElements', activeElements)
      return activeElements.length === 1;
    },
    panelComponent: DemoPanelComponent(dependencies),
  }
}
