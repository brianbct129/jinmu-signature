export type CategoryOnly = {
  category: string;
  tags: string[];
};

export type RestaurantMenuProps = {
  onSeeMenuClick: (category: string) => void;
};