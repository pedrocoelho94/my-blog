import { Story, Meta } from '@storybook/react'
import FormLogin, { FormLoginProps } from '.'

export default {
  title: 'FormLogin',
  component: FormLogin
} as Meta

export const Default: Story<FormLoginProps> = (args) => (
  <div style={{ padding: '3rem' }}>
    <FormLogin {...args} />
  </div>
)

export const WithError: Story<FormLoginProps> = (args) => (
  <div style={{ padding: '3rem' }}>
    <FormLogin {...args} errorMessage="Erro de exemplo" />
  </div>
)
