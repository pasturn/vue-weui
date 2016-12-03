// import Actionsheet from './Actionsheet/index.js'
// import Article from './Article/index.js'
import Button from './Button/index.js'
// import Dialog from './Dialog/index.js'
// import Flex from './Flex/index.js'
// import Footer from './Footer/index.js'
// import Gallery from './Gallery/index.js'
// import Grid from './Grid/index.js'
// import Icons from './Icons/index.js'
// import Input from './Input/index.js'
// import List from './List/index.js'
// import Loadmore from './Loadmore/index.js'
// import Msg from './Msg/index.js'
// import Navbar from './Navbar/index.js'
// import Panel from './Panel/index.js'
// import Preview from './Preview/index.js'
// import Progress from './Progress/index.js'
// import SearchBar from './SearchBar/index.js'
// import Tarbar from './SearchBar/index.js'
// import Toast from './Toast/index.js'
// import Uploader from './Uploader/index.js'

const install = function (Vue) {
  if (install.installed) return

  // Vue.component(Actionsheet.name, Actionsheet)
  // Vue.component(Article.name, Article)
  Vue.component(Button.name, Button)
  // Vue.component(Dialog.name, Didlog)
  // Vue.component(Flex.name, Flex)
  // Vue.component(Footer.name, Footer)
  // Vue.component(Gallery.name, Gallery)
  // Vue.component(Grid.name, Grid)
  // Vue.component(Icons.name, Icons)
  // Vue.component(List.name, List)
  // Vue.component(Loadmore.name, Loadmore)
  // Vue.component(Msg.name, Msg)
  // Vue.component(Navbar.name, Navbar)
  // Vue.component(Panel.name, Panel)
  // Vue.component(Progress.name, Progress)
  // Vue.component(SearchBar.name, SearchBar)
  // Vue.component(Tarbar.name, Tarbar)
  // Vue.component(Toast.name, Toast)
  // Vue.component(Uploader.name, Uploader)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  version: '0.2.0',
  // Actionsheet,
  // Article,
  Button,
  // Dialog,
  // Flex,
  // Footer,
  // Gallery,
  // Grid,
  // Icons,
  // List,
  // Loadmore,
  // Msg,
  // Navbar,
  // Panel,
  // Progress,
  // SearchBar,
  // Tarbar,
  // Toast,
  // Uploader
}
