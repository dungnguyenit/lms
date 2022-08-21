import { action, makeObservable, observable } from 'mobx';

export class CommonManager {
    @observable isEdit = false;

    constructor() {
        makeObservable(this);
    }

    @action setIsEdit(isEdit: boolean) {
        this.isEdit = isEdit;
    }
}
