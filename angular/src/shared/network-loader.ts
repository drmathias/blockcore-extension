import { Network, BTC44, BTC84, CITY, CRS, IDENTITY, NOSTR, STRAX, TSTRAX, TCRS } from './networks';
import { Servers } from './servers';

/** Holds a list of networks that is available. */
export class NetworkLoader {
    private networks: Network[] = [];

    constructor() {
        this.createNetworks();
    }

    /** Returns a list of networks that correspond to the filter supplied. */
    getNetworks(filter: string[]) {
        // When the filter is empty, we'll return the full list.
        if (filter.length == 0) {
            return this.networks;
        }

        return this.networks.filter((network) => {
            return filter.includes(network.id);
        });
    }

    /** Get the network definition based upon the network identifier. */
    getNetwork(networkType: string) {
        return this.networks.find(w => w.id == networkType);
    }

    getAllNetworks() {
        return this.networks;
    }

    createNetworks() {
        this.networks.push(new STRAX());
        this.networks.push(new CRS());
        this.networks.push(new TSTRAX());
        this.networks.push(new TCRS());
        this.networks.push(new CITY());
        this.networks.push(new IDENTITY());
        this.networks.push(new NOSTR());
        this.networks.push(new BTC44());
        this.networks.push(new BTC84());
    }

    private generateRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getServer(networkType: string, networkGroup: string, customServer?: string) {
        console.log(`getServer: ${networkType} | ${networkGroup} | ${customServer}`);

        if (networkGroup == 'custom') {
            const server = customServer.replace('{id}', networkType.toLowerCase());
            return server;
        } else {
            const serversGroup = Servers[networkGroup];
            const servers = serversGroup[networkType];

            console.log(`servers:`, servers);

            // TODO: Figure out the best way to pick and perhaps cycle the servers. 
            // As of now, we'll randomly pick every time this method is called.
            const serverIndex = this.generateRandomNumber(0, servers.length - 1);
            const server = servers[serverIndex];

            console.log(`server:`, server);

            return server;
        }
    }
}
