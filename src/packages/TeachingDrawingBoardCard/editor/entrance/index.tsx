import EntranceComponent from './entrance';

export default function install(dependencies) {
  return {
    name: '数学画板',
    icon: 'https://store-tg1.cvte.com/enow-cloud_assets/c54bb9d03ae3104d7a42179fdd2e4dbc',
    onClick: () => {
      console.log('点击到数学画板的入口')
    },
    tooltip: {
      title: '数学画板',
      description: '创建数学画板'
    },
    popupComponent: EntranceComponent(dependencies),
  }
}
