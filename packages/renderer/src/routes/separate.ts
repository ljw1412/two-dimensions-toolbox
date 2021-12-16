import SeparateContainer from '/@/containers/Separate.vue'
import AppErrorPage from '/@/pages/pageError/index.vue'
import AppSetting from '/@/pages/Setting/index.vue'
import AppTheme from '/@/pages/Theme/index.vue'
import ExitApp from '/@/pages/Modal/ExitApp/index.vue'
import AnimeBangumiS from '/@/pages/Anime/Bangumi/index.vue'
import AnimeWiki from '/@/pages/Anime/Wiki/index.vue'

const routes = [
  // 内置浏览器
  {
    path: '/browser',
    name: 'AppBuiltInBrowser',
    component: SeparateContainer,
    meta: { hasView: true }
  },
  // 退出弹窗
  { path: '/exit-app', name: 'ExitApp', component: ExitApp },
  // 系统设置
  {
    path: '/setting',
    name: 'AppSetting',
    component: AppSetting,
    meta: {
      separate: true,
      title: '系统设置',
      hideBackUp: true,
      minimizable: false,
      maximizable: false,
      hidable: true
    }
  },
  // 带标题栏的界面
  {
    path: '/view',
    name: 'SeparateApp',
    component: SeparateContainer,
    meta: { separate: true },
    children: [
      { path: '/error', name: 'ViewError', component: AppErrorPage },

      // 应用主题
      {
        path: '/theme',
        name: 'AppTheme',
        component: AppTheme,
        meta: {
          title: '主题',
          hideBackUp: true,
          minimizable: false,
          maximizable: false,
          hidable: true
        }
      },
      {
        path: '/anime/bangumi/:code?',
        name: 'AnimeBangumiS',
        component: AnimeBangumiS,
        props: true,
        meta: { title: '新番表' }
      },
      {
        path: '/anime/wiki/:id',
        name: 'AnimeWiki',
        props: true,
        component: AnimeWiki,
        meta: { title: '番剧百科' }
      }
    ]
  }
]

export default routes
