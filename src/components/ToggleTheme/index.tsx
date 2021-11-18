import { BlogThemeContext } from 'context/BlogThemeContext'
import { useState, useContext, useEffect } from 'react'
import * as S from './styles'

const ToggleTheme = () => {
  const { setTheme } = useContext(BlogThemeContext)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (!localTheme) return
    const newTheme = JSON.parse(localTheme)

    if (newTheme.name === 'inverted') {
      setIsChecked(true)
    }
  }, [])

  useEffect(() => {
    setTheme?.(isChecked ? 'inverted' : 'default')
  }, [isChecked, setTheme])

  const handleChange = () => {
    setIsChecked((isChecked) => !isChecked)
    setTheme?.(isChecked ? 'inverted' : 'default')
  }

  return (
    <S.Wrapper>
      <S.Label>
        Toggle light and dark modes
        <S.Input
          type="checkbox"
          value="Dark mode active"
          onChange={handleChange}
          checked={isChecked}
        />
        <S.Slider></S.Slider>
      </S.Label>
    </S.Wrapper>
  )
}

export default ToggleTheme
