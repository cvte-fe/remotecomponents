import { name, nameCamel } from "../const";

export default function (dependencies) {
  const { ElementSaveInfo } = dependencies.saveInfo;
  return class SaveInfo extends ElementSaveInfo {
    static isRemote = true;

    dataToJsonx() {
      console.error('topmodel teaching', this.topmodel, this.data)
      return {
        [nameCamel]: {
          ...(this.toJsonx().common),
          title: this.data.title,
          thumbUri: this.data.thumbUri,
        }
      }
    }

    toModelJson(jsonx) {
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
