import { isEqual } from 'lodash'

export default function install(dependencies) {
   const { enowInstance, CoursewareState, EventTypes } = dependencies
   let lastInfo = {}
   enowInstance.addListener(EventTypes.COURSEWARE_SYNC_STATE, type => {
      switch (type) {
         case CoursewareState.SYNCED: {
            // 由于自动同步功能, 该事件大约每5s触发一次
            const info = enowInstance.getCoursewareInfo()
            if (!isEqual(info, lastInfo)) {
               lastInfo = info
               console.log('SYNCED', info)
            }
            break;
         }
         default:
      }
   })
}
