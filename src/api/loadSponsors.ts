import { SponsorProps } from 'components/Sponsor'
import config from 'config'
import { request } from 'graphql-request'
import { GRAPHQL_SPONSORS } from 'graphql/queries'

export type Props = SponsorProps

export const loadSponsors = async (): Promise<Props> => {
  const { sponsor } = await request(config.graphqlURL, GRAPHQL_SPONSORS)
  return sponsor
}
