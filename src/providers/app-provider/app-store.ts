import { CommonManager } from './../../managers/common-manager';
import { ApiServices } from 'api';
import { UserManager } from 'managers/user-manager';
import { UserInfoModel } from 'models/user-model';
import { makeObservable, observable } from 'mobx';

class AppStore {

    @observable userManager = new UserManager();
    @observable common = new CommonManager();

    apiServices = new ApiServices();

    constructor() {
        this.userManager.updateUserInfo({
            id: 11,
            name: 'Le Thuy Linh',
            title :'Ui Designer',
            email: 'string',
            phone: 'string'
        } as UserInfoModel);

        makeObservable(this);
    }

}

export type AppStoreType = AppStore;
export default AppStore;
