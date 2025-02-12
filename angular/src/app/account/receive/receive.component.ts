import { Component, Inject, HostBinding, OnDestroy, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { UIState, CommunicationService, IconService, NetworksService, WalletManager } from '../../services';
import { copyToClipboard } from '../../shared/utilities';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as QRCode from 'qrcode';
import { Address } from '../../../shared/interfaces';
import { Network } from '../../../shared/networks';
var QRCode2 = require('qrcode');

@Component({
    selector: 'app-account-receive',
    templateUrl: './receive.component.html',
    styleUrls: ['./receive.component.css']
})
export class AccountReceiveComponent implements OnInit, OnDestroy {

    addressEntry: Address;
    address: string;
    qrCode: string;
    network: Network;

    constructor(public uiState: UIState,
        private renderer: Renderer2,
        private networks: NetworksService,
        public walletManager: WalletManager,
        private snackBar: MatSnackBar) {
        // this.uiState.title = 'Receive Address';
        this.uiState.goBackHome = false;
        this.uiState.backUrl = null;

        const account = this.walletManager.activeAccount;
        this.network = this.networks.getNetwork(account.networkType);
    }

    ngOnDestroy(): void {

    }

    copy() {
        copyToClipboard(this.address);

        this.snackBar.open('Receive address copied to clipboard', 'Hide', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        });
    }

    async ngOnInit() {
        // When using CRS/TCRS, the change address should always be the primary address.
        if (this.network.singleAddress === true) {
            this.addressEntry = this.walletManager.activeAccount.state.receive[0];
        } else {
            // TODO: When can we start using .lastItem and similar functions on arrays?
            this.addressEntry = this.walletManager.activeAccount.state.receive[this.walletManager.activeAccount.state.receive.length - 1];
        }

        this.address = this.addressEntry.address;

        try {
            this.qrCode = await QRCode.toDataURL(this.address, {
                errorCorrectionLevel: 'L',
                margin: 2,
                scale: 5,
            });

            // LEFT TO HAVE INSTRUCTIONS ON POSSIBLE OPTIONS :-)
            // this.qrCode = await QRCode.toDataURL(this.address, {
            //     // version: this.version,
            //     errorCorrectionLevel: 'L',
            //     // margin: this.margin,
            //     // scale: this.scale,
            //     // width: this.width,
            //     // color: {
            //     //     dark: this.colorDark,
            //     //     light: this.colorLight
            //     // }
            // });

        } catch (err) {
            console.error(err);
        }
    }
}