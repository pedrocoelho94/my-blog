import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'
import mock from './mock'

export default {
  title: 'Menu',
  component: Menu,
  args: mock
} as Meta

export const Default: Story<MenuProps> = (args) => (
  <div style={{ maxWidth: '60rem', margin: '5rem auto', padding: '3.2rem' }}>
    <Menu {...args} />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
      nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
      tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
      nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos.{' '}
    </p>

    <br />
    <br />

    <p>
      Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.{' '}
      <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Curabitur
      tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.{' '}
      <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin
      ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
      suscipit quis, luctus non, massa.{' '}
      <b>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos
      </b>
      . Fusce ac turpis quis ligula lacinia aliquet.{' '}
    </p>

    <br />
    <br />

    <p>
      Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod
      in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu
      ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
      ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing
      diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
      Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
      Vestibulum sapien. Proin quam.{' '}
    </p>

    <br />
    <br />

    <p>
      <b>
        Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a
        cursus ipsum ante quis turpis
      </b>
      . Etiam ultrices. <b>Nam nec ante</b>. Suspendisse in justo eu magna
      luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque
      cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum
      magna augue eget diam. <i>Proin ut ligula vel nunc egestas porttitor</i>.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non
      quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet
      pede facilisis laoreet. <i>Ut fringilla</i>. Donec lacus nunc, viverra
      nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada
      tellus.{' '}
    </p>

    <br />
    <br />

    <p>
      Ut ultrices ultrices enim. Curabitur sit amet mauris. <b>Sed non quam</b>.
      Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer
      lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor.{' '}
      <b>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue</b>.
      Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique,
      dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.
      Nulla quam. Aenean laoreet.{' '}
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
      nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
      tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
      nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos.{' '}
    </p>

    <br />
    <br />

    <p>
      Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.{' '}
      <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Curabitur
      tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.{' '}
      <b>Mauris massa</b>. Maecenas mattis. Sed convallis tristique sem. Proin
      ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
      suscipit quis, luctus non, massa.{' '}
      <b>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos
      </b>
      . Fusce ac turpis quis ligula lacinia aliquet.{' '}
    </p>

    <br />
    <br />

    <p>
      Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod
      in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu
      ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
      ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing
      diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
      Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
      Vestibulum sapien. Proin quam.{' '}
    </p>

    <br />
    <br />

    <p>
      <b>
        Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a
        cursus ipsum ante quis turpis
      </b>
      . Etiam ultrices. <b>Nam nec ante</b>. Suspendisse in justo eu magna
      luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque
      cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum
      magna augue eget diam. <i>Proin ut ligula vel nunc egestas porttitor</i>.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non
      quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet
      pede facilisis laoreet. <i>Ut fringilla</i>. Donec lacus nunc, viverra
      nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada
      tellus.{' '}
    </p>

    <br />
    <br />

    <p>
      Ut ultrices ultrices enim. Curabitur sit amet mauris. <b>Sed non quam</b>.
      Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer
      lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor.{' '}
      <b>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue</b>.
      Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique,
      dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.
      Nulla quam. Aenean laoreet.{' '}
    </p>
  </div>
)
