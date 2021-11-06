import boRequest from './request/index.js'

export function getSwiper() {
  return boRequest({
    url: '/banner'
  })
}

export function getMusicUrl(musicId) {
  return boRequest({
    url: 'song/url',
    params: {
      id: musicId
    }
  })
}
export function getMusicMenu(musicId) {
  return boRequest({
    url: 'song/detail',
    params: {
      ids: musicId
    }
  })
}
export function getMusicList() {
  return boRequest({
    url: '/top/playlist',
    params: {
      offset: (Math.random() * 1297).toFixed(0) - 12,
      limit: 12
    }
  })
}
export function getOnlyList() {
  return boRequest({
    url: '/personalized/privatecontent'
  })
}
export function getNewList() {
  return boRequest({
    url: 'personalized/newsong'
  })
}
export function getSongListInfo(songsid) {
  return boRequest({
    url: 'playlist/detail',
    params: {
      id: songsid
    }
  })
}
export function getSongListInfoSongs(songsid) {
  return boRequest({
    url: 'song/detail',
    params: {
      ids: songsid
    }
  })
}
export function getSongListCollect(songsid) {
  return boRequest({
    url: 'playlist/subscribers',
    params: {
      id: songsid
    }
  })
}
export function getSongListComment(songsid) {
  return boRequest({
    url: 'comment/playlist',
    params: {
      id: songsid
    }
  })
}
export function getSongLyric(id) {
  return boRequest({
    url: '/lyric',
    params: {
      id
    }
  })
}
export function getSongSimi(id) {
  return boRequest({
    url: '/simi/song',
    params: {
      id
    }
  })
}
export function getSongLyricComment(id, limit = 20, offset = 0) {
  return boRequest({
    url: '/comment/music',
    params: {
      id,
      limit,
      offset
    }
  })
}
