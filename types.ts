export interface ModelDataMarvelGet {
  attributionHTML: string
    attributionText : string
    code : number
    copyright: string
    etag: string
    status: string
    data : {
      count : number
      limit : number
      offset: number
      results: ModelHeroData[]
      total : number
    }
}
export interface ModelHeroData {
  comics : ComicsData
  description : string
  events: EventsData
  id : number
  modified : string
  name : string 
  resourceURI : string
  series: SeriesData
  stories : StoriesData
  thumbnail: {
    extension: string
    path: string
  }
  urls : {
    type: string
    url : string
  }[]
}

interface ComicsData {
  available : number 
  collectionURI : string
  items : {
    name: string
    resourceURI : string
  }[]
  returned : number
}
interface EventsData {
  available : number 
  collectionURI : string
  items : {
    name: string
    resourceURI : string
  }[]
  returned : number
}
interface SeriesData {
  available : number 
  collectionURI : string
  items : {
    name: string
    resourceURI : string
  }[]
  returned : number
}
interface StoriesData {
  available : number 
  collectionURI : string
  items : {
    name: string
    resourceURI : string
  }[]
  returned : number
}
