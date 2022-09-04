import { memo } from 'react';
import { Button } from './Button'

interface SideBarButtonProps {
  genre: {
    title: string
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }
  onClick: () => void
  isSelected: boolean
}

export const SideBarButton = memo(({ genre, onClick, isSelected }: SideBarButtonProps) => {
  return (
    <Button
      title={genre.title}
      iconName={genre.name}
      onClick={onClick}
      selected={isSelected}
    />
  )
}, (prevProps, nextProps) => {
  return prevProps.isSelected === nextProps.isSelected
})