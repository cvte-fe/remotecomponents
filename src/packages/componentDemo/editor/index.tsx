import entranceInstaller from './entrance';
import propertyPanelInstaller from './propertyPanel';

export default function install(dependencies) {
  return {
    entrance: entranceInstaller(dependencies),
    propertyPanel: propertyPanelInstaller(dependencies),
  }
}