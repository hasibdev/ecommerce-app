import { boot } from 'quasar/wrappers'
// import Swiper core and required modules
import SwiperCore, {
  FreeMode, Mousewheel, Pagination
} from 'swiper'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // install Swiper modules
  SwiperCore.use([FreeMode, Mousewheel, Pagination])
})
