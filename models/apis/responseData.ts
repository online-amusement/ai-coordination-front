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

    public static login(email: string, password: string):Promise<Member> {
        return this.createPromise(AI_CD.login, {
            email: email,
            password: password
        });
    }

    public static memberEmailEdit(email: string):Promise<Member> {
        return this.createPromise(AI_CD.memberEmailEdit, {
            email: email,
        });
    }

    public static memberNicknameEdit(nickname: string):Promise<Member> {
        return this.createPromise(AI_CD.memberNicknameEdit, {
            nickname: nickname,
        });
    }

    public static memberPasswordEdit(password: string, password_confirmation: string):Promise<Member> {
        return this.createPromise(AI_CD.memberPasswordEdit, {
            password: password,
            password_confirmation: password_confirmation
        });
    }
}