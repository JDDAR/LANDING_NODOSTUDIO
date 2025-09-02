export interface VideoSourceProps {
  src: string;
  type: 'video/mp4' | 'video/web' | 'video/ogg'; 
}

export interface HeroVideoProps {
  source: VideoSourceProps[],
  poster: string;
  fallbackImg: string;
}

export interface VideoLoadState {
  isLoaded: boolean;
  hasError: boolean;
  shouldShow: boolean; 
}
