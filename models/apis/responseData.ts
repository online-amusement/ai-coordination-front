import Basic from './basic';
import Member from '../entitis/member';
import * as AI_CD from '~/vendor/apis/ai_coordination';

export default class ResponseData extends Basic {
    public static temporaryRegistration(email:string):Promise<Member> {
        return this.createPromise(AI_CD.memberTemporaryRegistration, {
            email: email
        })
    }

    public static officialRegistration(nickname: string, password: string, token: string):Promise<Member> {
        return this.createPromise(AI_CD.memberOfficialRegistration, {
            nickname: nickname,
            password: password,
            token: token
        });
    }
}