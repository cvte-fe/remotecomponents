import { name, nameCamel } from "../const";

export default function (dependencies) {
  const { ElementSaveInfo } = dependencies.saveInfo;
  return class PictureSaveInfo extends ElementSaveInfo {
    constructor(data) {
      super(data);
      this.topmodel = {};
      if (!data) {
        return
      }
      const {
        x, y, width, height
      } = data;
      Object.assign(this.topmodel, {
        x, y, width, height
      })
    }

    toJsonx() {
      const { x, y, width, height } = this.topmodel;
      return {
        remoteComponent: {
          x,
          y,
          width,
          height,
        }
      }
    }

    toModelJson(jsonx) {
      console.error('toModelJsontoModelJsontoModelJson', jsonx, nameCamel)
      const jsonxContent = jsonx[nameCamel];
      const superJson = super.toModelJson(jsonxContent);

      return {
        ...superJson,
        title: jsonxContent.title,
        thumbUri: jsonxContent.thumbUri,
        _type: name,
        _name: name,
      };
    }
  }
}
