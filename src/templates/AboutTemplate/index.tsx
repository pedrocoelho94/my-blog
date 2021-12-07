import AsidePosts from 'components/AsidePosts'
import Heading from 'components/Heading'
import { PostStrapi } from 'shared-typed/postStrapi'
import { SettingsStrapi } from 'shared-typed/settings'
import BaseTemplate from 'templates/Base'
import * as S from './styles'

export type AboutProps = {
  setting: SettingsStrapi
  posts: PostStrapi[]
}

const AboutTemplatePage = ({ setting, posts }: AboutProps) => (
  <BaseTemplate settings={setting}>
    <S.Wrapper>
      <S.Content>
        <Heading as="h2" size="medium" uppercase>
          Sobre
        </Heading>
        <p>
          Olá, sou o Pedro e este é um site fictício sobre cinema. O Proposíto
          deste projeto é botar em prática o que venho aprendendo sobre
          JavaScript.
        </p>

        <div>
          <Heading as="h3" size="small">
            Tecnologias utilizadas
          </Heading>
          <p>Frontend: HTML, CSS, TypeScript, NextJS, Styled-Components.</p>
          <p>Backend: Strapi e MongoDB.</p>
        </div>

        <div className="contact">
          <Heading as="h3" size="small">
            Contato
          </Heading>
          <div>
            <a
              href="https://github.com/pedrocoelho94"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="mailto:pedrohenriquesc@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </div>
        </div>

        <div>
          <Heading as="h3" size="small">
            Créditos
          </Heading>
          <p>
            Todos os títulos e subtitulos foram retirados do site{' '}
            <a
              href="https://cinemacomrapadura.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Cinema com Rapadura
            </a>{' '}
            e estão sendo usados apenas para fins de estudo para popular o site.
          </p>
        </div>
      </S.Content>
      <S.Aside>
        <S.AsideTitle>Últimas</S.AsideTitle>
        {posts.map((post) => (
          <AsidePosts
            key={post.id}
            title={post.title}
            cover={post.cover.url}
            slug={post.slug}
            categories={post.categories}
            createdAt={post.createdAt}
          />
        ))}
      </S.Aside>
    </S.Wrapper>
  </BaseTemplate>
)

export default AboutTemplatePage
