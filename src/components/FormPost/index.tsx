import TextInput from 'components/TextInput'
import { GuestPost } from 'pages/profile/posts'
import React, { useState } from 'react'
import * as S from './styles'

import slugify from 'slugify'
import Button from 'components/Button'

export type FormPostPorps = {
  onSave?: (post: GuestPost) => Promise<void>
  guestReview?: GuestPost
}

const FormPost = ({ guestReview, onSave }: FormPostPorps) => {
  const {
    id = '',
    title = '',
    cover = '',
    excerpt = '',
    content = ''
  } = guestReview || {}

  const [newTitle, setNewTitle] = useState(title)
  const [newCover, setNewCover] = useState(cover)
  const [newExcerpt, setNewExcerpt] = useState(excerpt)
  const [newContent, setNewContent] = useState(content)
  const [isSaving, setIsSaving] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    setIsSaving(true)
    event.preventDefault()

    const newGuestReview = {
      id,
      title: newTitle,
      slug: slugify(newTitle, { lower: true, strict: true }),
      cover: newCover,
      excerpt: newExcerpt,
      content: newContent
    }

    if (onSave) {
      await onSave(newGuestReview)
    }

    setIsSaving(false)
  }

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <TextInput
          name="guestReview-title"
          label="Título"
          value={newTitle}
          onInputChange={(v) => setNewTitle(v)}
        />
        <TextInput
          name="guestReview-cover"
          label="Link Image"
          value={newCover}
          onInputChange={(v) => setNewCover(v)}
        />
        <TextInput
          name="guestReview-excerpt"
          label="Resumo"
          value={newExcerpt}
          onInputChange={(v) => setNewExcerpt(v)}
          as="textarea"
        />
        <TextInput
          name="guestReview-content"
          label="Conteúdo"
          value={newContent}
          onInputChange={(v) => setNewContent(v)}
          as="textarea"
        />
        <Button type="submit" disabled={isSaving}>
          {isSaving ? 'Salvando...' : 'Salvar'}
        </Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default FormPost
