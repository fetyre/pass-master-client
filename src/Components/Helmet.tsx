import { Helmet } from "react-helmet"
import passFoto from '../photo/pass-master.jpg'

export const HelmetComponent: React.FC = () => {
  return (
    <Helmet>
      <meta property="og:title" content="PassMaster - Ваш надежный генератор паролей!" />
      <meta property="og:description" content="Смотрите, что я нашел! Это PassMaster - отличный сервис для генерации паролей. Попробуйте сами!" />
      <meta property="og:image" content={passFoto} />
      <meta property="og:url" content="URL вашего сайта" />
    </Helmet>
  )
}   