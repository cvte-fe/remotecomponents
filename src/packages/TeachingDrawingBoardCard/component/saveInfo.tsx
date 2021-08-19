import { name, nameCamel } from "../const";

export default function (dependencies) {
  const { ElementSaveInfo } = dependencies.saveInfo;
  return class SaveInfo extends ElementSaveInfo {
    static isRemote = true;

    dataToJsonx() {
      return {
        [nameCamel]: {
          ...(this.toJsonx().common),
          title: this.data.title,
          thumbUri: this.data.thumbUri,
          titleColor: this.data.titleColor,
        }
      }
    }

    toModelJson(jsonx) {
      const jsonxContent = jsonx[nameCamel];
      const superJson = super.toModelJson(jsonxContent);
      console.log('jsonxContent', jsonxContent)

      return {
        ...superJson,
        title: jsonxContent.title,
        thumbUri: jsonxContent.thumbUri,
        titleColor: jsonxContent.titleColor,
        _type: name,
        _name: name,
      };
    }
  }
}
