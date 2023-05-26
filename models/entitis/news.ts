import BaseResponse from "./baseResponse";

export interface NewsEntity {
    id:number,
    title: string,
    description: string,
    started_at: string,
    ended_at: string,
}

export default interface News extends BaseResponse {
    data: NewsEntity
}