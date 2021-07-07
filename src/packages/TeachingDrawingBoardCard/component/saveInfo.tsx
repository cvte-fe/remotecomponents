import { name, nameCamel } from "../const";

// const str = JSON.stringify({ "from": "formIframe", "coursewareData": { "statisticsType": 1, "isGreenScreen": true, "typeTip": "kezhong", "subjectTip": "gzgzsx", "type": "", "typeName": "", "notice": "", "bg": "", "title": "333", "tp": [{ "content": "", "title": "" }], "themeInfo": { "id": "blue", "supportTypes": ["ss_yw", "ss_yy", "ss_sx", "xzk_yw", "xzk_yy", "xzk_sx"], "form": { "color": "#70caff", "text": "", "signImage": "https://icprs.koolearn.com/basic/3761949F905E0534/ss45/theme/blue_sign.png" }, "mould": { "titleTextColor": "#20ACFF", "titleBgColor": "#7BCEFF", "boxShadowColor": "#52B3FF" } }, "configData": { "quesList": [{ "ask": "", "word": "", "paragraph": "", "sentence": "", "audio": "", "picture": "", "explain": "", "abilityTip": "", "questionNature": "", "editContent": { "data": [], "html": "" }, "exclusiveAttribute": { "textLength": 0, "audioName": "", "random": [0.2101789434790451, 0.5568369618954674], "skinIndex": 1 }, "options": [{ "id": "CeyUFDK1yMs9h3t95FIb5", "word": "", "sentence": "", "audio": "", "picture": "", "explain": "", "sentence_2": "", "picture_2": "", "exclusiveAttribute": { "audioName": "" } }, { "id": "wiS6xTD0E1sFpvgyvaOVu", "word": "", "sentence": "", "audio": "", "picture": "", "explain": "", "sentence_2": "", "picture_2": "", "exclusiveAttribute": { "audioName": "" } }], "standardAnswer": "", "knowledgePoint": [] }] } }, "type": "toItemIframe", "domId": "6edab668-be00-48e4-ac69-ebdb459ee9f6" })
// const str = JSON.stringify({})
const str = '\{\}'
console.log('str', str)

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
          postessageData: str
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
        postessageData: jsonxContent.postessageData,
        _type: name,
        _name: name,
      };
    }
  }
}
