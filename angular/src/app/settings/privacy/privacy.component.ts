import { Component, HostBinding, OnDestroy, ViewEncapsulation } from '@angular/core';
import { UIState } from 'src/app/services/ui-state.service';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PrivacyComponent implements OnDestroy {
    @HostBinding('class.privacy') hostClass = true;

    constructor(public uiState: UIState) {
        this.uiState.title = 'Privacy';
        this.uiState.showBackButton = true;
        this.uiState.goBackHome = false;
    }

    ngOnDestroy() {

    }
}
