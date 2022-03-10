import { Injectable } from "@angular/core";
import { ActionStore, AddressStore, NetworkStatusStore, SettingStore, TransactionStore, UIStore, WalletStore, AccountHistoryStore } from "src/shared";

@Injectable({
    providedIn: 'root'
})
export class StateService {

    private stores: any = [];

    constructor(
        private addressStore: AddressStore,
        private actionStore: ActionStore,
        private networkStatusStore: NetworkStatusStore,
        private settingStore: SettingStore,
        private transactionStore: TransactionStore,
        private uiStore: UIStore,
        private walletStore: WalletStore,
        private accountHistoryStore: AccountHistoryStore
    ) {
        this.stores.push(addressStore);
        this.stores.push(actionStore);
        this.stores.push(networkStatusStore);
        this.stores.push(settingStore);
        this.stores.push(transactionStore);
        this.stores.push(uiStore);
        this.stores.push(walletStore);
        this.stores.push(accountHistoryStore);
    }

    async wipe() {
        for (let i = 0; i < this.stores.length; i++) {
            const store = this.stores[i];
            await store.wipe();
        }
    }

    async load() {
        for (let i = 0; i < this.stores.length; i++) {
            const store = this.stores[i];
            await store.load();
        }

        console.log('Stores:', this.stores);
    }

    async refresh() {
        await this.addressStore.load();
        await this.transactionStore.load();
        await this.walletStore.load();
        await this.accountHistoryStore.load();
    }

    // async load() {
    //     debugger;
    //     for (let i = 0; i < this.stores.length; i++) {
    //         const store = this.stores[i];
    //         await store.load();
    //     }

    //     console.log('Stores:', this.stores);
    // }
}
