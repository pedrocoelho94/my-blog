import { SponsorProps } from 'components/Sponsor'
import { request } from 'graphql-request'
import { GRAPHQL_SPONSORS } from 'graphql/queries'

export type Props = SponsorProps

export const loadSponsors = async (): Promise<Props> => {
  const { sponsor } = await request(
    `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    GRAPHQL_SPONSORS
  )
  return sponsor
}
