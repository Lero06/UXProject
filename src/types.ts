export type Tour = {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviewsCount: number;
  pricePerPerson: number;
  durationHours: number;
  isFavorite?: boolean;
  imageUrl: string;
  tags?: string[];
};

export type Message = {
  id: string;
  guideName: string;
  lastMessage: string;
  timeAgo: string;
  unreadCount?: number;
  avatarUrl?: string;
};

export type ActivityItem = {
  id: string;
  tourTitle: string;
  status: "completed" | "upcoming" | "cancelled";
  date: string;
  imageUrl: string;
};
