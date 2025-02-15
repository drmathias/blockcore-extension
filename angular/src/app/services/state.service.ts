import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ActionStore, AddressStore, NetworkStatusStore, SettingStore, TransactionStore, UIStore, WalletStore, AccountHistoryStore, AddressIndexedStore } from "src/shared";
import { AddressWatchStore } from "src/shared/store/address-watch-store";
import { StoreBase, StoreListBase } from "src/shared/store/store-base";

@Injectable({
    providedIn: 'root'
})
export class StateService {
    private stores: any = [];
    changedSubject: BehaviorSubject<StateService>;

    public get changed$(): Observable<StateService> {
        return this.changedSubject.asObservable();
    }

    constructor(
        private addressStore: AddressStore,
        private actionStore: ActionStore,
        private networkStatusStore: NetworkStatusStore,
        private settingStore: SettingStore,
        private transactionStore: TransactionStore,
        private uiStore: UIStore,
        private walletStore: WalletStore,
        private accountHistoryStore: AccountHistoryStore,
        private addressWatchStore: AddressWatchStore,
        private addressIndexedStore: AddressIndexedStore

    ) {
        this.changedSubject = new BehaviorSubject<StateService>(this);

        this.stores.push(addressStore);
        this.stores.push(actionStore);
        this.stores.push(networkStatusStore);
        this.stores.push(settingStore);
        this.stores.push(transactionStore);
        this.stores.push(uiStore);
        this.stores.push(walletStore);
        this.stores.push(accountHistoryStore);
        this.stores.push(addressWatchStore);
        this.stores.push(addressIndexedStore);
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

    /** Find an individual store and reload that. */
    async reloadStore(name: string) {
        const store = this.stores.find((s: { stateKey: string; }) => s.stateKey == name);

        if (store == null) {
            return;
        }

        await store.load();
        this.changedSubject.next(this);
    }

    async reload() {
        await this.addressStore.load();
        await this.transactionStore.load();
        await this.walletStore.load();
        await this.accountHistoryStore.load();
        await this.addressWatchStore.load();
        await this.addressIndexedStore.load();

        console.log('RELOAD CALLED:');
        console.log(this.accountHistoryStore.all());

        this.changedSubject.next(this);
    }

    async refresh() {

        // console.log('BEFORE:')
        // console.log(JSON.stringify(this.walletStore.all()));
        // console.log(JSON.stringify(this.addressStore.all()));
        // console.log(JSON.stringify(this.accountHistoryStore.all()));

        await this.addressStore.load();
        await this.transactionStore.load();
        await this.walletStore.load();
        await this.accountHistoryStore.load();
        await this.addressWatchStore.load();
        await this.addressIndexedStore.load();

        // console.log('AFTER:')
        // console.log(JSON.stringify(this.walletStore.all()));
        // console.log(JSON.stringify(this.addressStore.all()));
        // console.log(JSON.stringify(this.accountHistoryStore.all()));

        this.changedSubject.next(this);
    }

    async update() {
        await this.walletStore.load();
        console.log('GET WALLETS:', this.walletStore.getWallets())
        this.changedSubject.next(this);
    }
}
