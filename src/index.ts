import axios from 'axios';
import { getById } from 'api';

const API_URL: string = 'https://pokeapi.co/api/v2';

interface PaginatedResponse<T> {
  num_items: number;
  start: number;
  limit: number;
  results: T[];
}

interface CategoryResult {
  id: string;
  name: string;
  title: string;
  last_modified: number;
  num_items: number;
  content_url: string;
}

interface Playlist {
  id: string;
  type: 'Playlist';
  name: string;
  title: string;
  content_url: string;
  last_modified: number;
  num_items: number;
  category_results: CategoryResult[];
}

interface Image {
  width: number;
  height: number;
  ratio?: string;
  orientation?: string;
  tags: string[];
  url: string;
}

interface Performer {
  performer_type: 'INDIVIDUAL' | 'GROUP';
  name: string;
  role: string;
}

enum ProgramType {
  SPORTS = 'SPORTS',
  ESPORTS = 'ESPORTS',
  MUSIC = 'MUSIC',
  FILM = 'FILM',
}

interface AssetCount {
  [asset_type: string]: number;
}

interface Program {
  id: string;
  program_type: ProgramType;
  name: string;
  title?: string;
  description?: string;
  images: Image[];
  performers: Performer[];
  categoryNames: string[];
  assetCount: AssetCount;
  assets_url: string;
}

export function getPlaylists(
  app_id: string,
  start: number = 0,
  limit: number = 10
): Promise<PaginatedResponse<Playlist>> {
  return Promise.resolve({
    num_items: 10,
    start,
    limit,
    results: [],
  });
}

export function getPrograms(
  app_id: string,
  playlist_id: string,
  start: number = 0,
  limit: number = 0,
  categoryNames: string[]
): Promise<PaginatedResponse<Program>> {
  return Promise.resolve({
    num_items: 10,
    start,
    limit,
    results: [],
  });
}

interface VideoAsset {
  id: string;
  url: string;
  name: string;
  title?: string;
  description?: string;
  asset_type: 'LIVE' | 'CLIP' | 'ON_DEMAND';
  codec: 'HLS_H264_AVC' | 'HLS_H265_HEVC';
  format: 'FLAT' | 'EQUIRECTANGULAR';
  dimensions: 'MONOSCOPIC' | 'STEREOSCOPIC_TOP_BOTTOM' | 'STEREOSCOPIC_LEFT_RIGHT';
  field_of_view: 'ONE_EIGHTY' | 'THREE_SIXTY';
  requires_auth: boolean;
  content_flags: string[];
  drm: 'NONE' | 'WIDEVINE' | 'FAIRPLAY';
}

export function getVideoAssets(
  app_id: string,
  program_id: string,
  start: number = 0,
  limit: number = 10
): Promise<PaginatedResponse<VideoAsset>> {
  return Promise.resolve({
    num_items: 0,
    start,
    limit,
    results: [],
  });
}

interface TokenResponse {
  token: string;
  expires: number;
}

export function getPlaybackToken(
  app_id: string,
  accessToken: string,
  options: any
): Promise<TokenResponse> {
  return Promise.resolve({
    token: 'some_token',
    expires: 0,
  });
}

export function playVideo(video_id: string, playbackToken: string): Promise<void> {
  return Promise.resolve();
}

export function playVideoByUrl(url: string, playbackToken: string): Promise<void> {
  return Promise.resolve();
}

export default {
  getPlaylists,
  getPrograms,
  getVideoAssets,
  getPlaybackToken,
  playVideo,
  playVideoByUrl,
};
