import { name, nameCamel } from "../const";

export default function (dependencies) {
  const { ElementSaveInfo } = dependencies.saveInfo;
  return class RemoteComponentSaveInfo extends ElementSaveInfo {

    toJsonx() {
      const { x, y, width, height } = this.topmodel;
      return {
        [nameCamel]: {
          x,
          y,
          width,
          height,
        }
      }
    }

    toModelJson(jsonx) {
      const jsonxContent = jsonx[nameCamel];
      const superJson = super.toModelJson(jsonxContent);

      return {
        ...superJson,
        _type: name,
        _name: name,
      };
    }
  }
}
