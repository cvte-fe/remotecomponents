import model from './model';
import renderer from './renderer';
import saveInfo from './saveInfo';

export default function install(dependencies) {
  return {
    model: model(dependencies),
    renderer: renderer(dependencies),
    saveInfo: saveInfo(dependencies),
  }
}
