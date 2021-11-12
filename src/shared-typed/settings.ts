import { MenuPropsLinks } from 'components/Menu'
import { StrapiImage } from './cover'

export type SettingsStrapi = {
  id: string
  blogName: string
  blogDescription: string
  logo: StrapiImage
  menuLink: MenuPropsLinks[]
  footer: string
}
