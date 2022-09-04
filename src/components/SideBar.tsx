import { memo } from "react";
import { Button } from "./Button";
import { SideBarButton } from "./SideBarButton";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  buttonClickCallback
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <SideBarButton
            key={String(genre.id)}
            genre={genre}
            onClick={() => buttonClickCallback(genre.id)}
            isSelected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}