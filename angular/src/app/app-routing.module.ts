import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WalletCreateComponent } from './wallet/create/create.component';
import { WalletRemoveComponent } from './wallet/remove/remove.component';
import { WalletEditComponent } from './wallet/edit/edit.component';
import { AccountEditComponent } from './account/edit/edit.component';
import { AccountCreateComponent } from './account/create/create.component';
import { AccountRemoveComponent } from './account/remove/remove.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { ActionSignComponent } from './action/sign/sign.component';
import { ActionIdentityComponent } from './action/identity/identity.component';
import { ActionLoginComponent } from './action/login/login.component';
import { WipeComponent } from './wipe/wipe.component';
import { PrivacyComponent } from './settings/privacy/privacy.component';
import { LicensesComponent } from './settings/licenses/licenses.component';
import { ChangesComponent } from './settings/changes/changes.component';
import { PasswordComponent } from './settings/password/password.component';
import { AboutComponent } from './settings/about/about.component';
import { RecoveryComponent } from './settings/recovery/recovery.component';
import { AccountReceiveComponent } from './account/receive/receive.component';
import { AccountSelectComponent } from './account/select/select.component';
import { AccountTransactionComponent } from './account/transaction/transaction.component';
import { AccountSendComponent } from './account/send/send.component';
import { AccountSendAddressComponent } from './account/send/address/send-address.component';
import { AccountSendConfirmComponent } from './account/send/confirm/send-confirm.component';
import { AccountSendSuccessComponent } from './account/send/success/send-success.component';
import { AccountSendSendingComponent } from './account/send/sending/send-sending.component';
import { HandlerComponent } from './settings/handler/handler.component';
import { ActionStratisIdentityComponent } from './action/sid/sid.component';
import { ActionNostrIdentityComponent } from './action/nostr/nostr.component';
import { LoadingResolverService } from './services/loading-resolver.service';

const routes: Routes = [
  {
    path: '', component: LoadingComponent, pathMatch: 'full'
  },
  {
    path: 'popup', component: LoadingComponent, data: { popup: true }
  },
  {
    path: 'home', component: HomeComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'wipe', component: WipeComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'settings', component: SettingsComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'settings/privacy', component: PrivacyComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'settings/licenses', component: LicensesComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'settings/changes', component: ChangesComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'settings/password', component: PasswordComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'settings/about', component: AboutComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'settings/export-recovery-phrase', component: RecoveryComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'settings/handler', component: HandlerComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'account/select', component: AccountSelectComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'account/view/:index', component: AccountComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'account/send', component: AccountSendComponent, children: [
      { path: '', redirectTo: 'address', pathMatch: 'full' },
      {
        path: 'address',
        component: AccountSendAddressComponent, resolve: {
          data: LoadingResolverService
        }
      },
      {
        path: 'confirm',
        component: AccountSendConfirmComponent, resolve: {
          data: LoadingResolverService
        }
      },
      {
        path: 'sending',
        component: AccountSendSendingComponent, resolve: {
          data: LoadingResolverService
        }
      },
      {
        path: 'success',
        component: AccountSendSuccessComponent, resolve: {
          data: LoadingResolverService
        }
      }
    ], resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'account/receive/:index', component: AccountReceiveComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'account/transaction/:txid', component: AccountTransactionComponent, resolve: {
      data: LoadingResolverService
    }
  },
  // {
  //   path: 'account/view/identity/:index', component: AccountIdentityComponent
  // },
  // {
  //   path: 'account/view/nostr/:index', component: NostrIdentityComponent
  // },
  {
    path: 'account/create', component: AccountCreateComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'account/edit/:index', component: AccountEditComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'account/remove/:index', component: AccountRemoveComponent, resolve: {
      data: LoadingResolverService
    }
  },
  // {
  //   path: 'vault/view/:index', component: VaultComponent
  // },
  // {
  //   path: 'vault/view/identity/:index', component: VaultIdentityComponent
  // },
  // {
  //   path: 'vault/create', component: VaultCreateComponent
  // },
  // {
  //   path: 'vault/edit/:index', component: VaultEditComponent
  // },
  // {
  //   path: 'vault/remove/:index', component: VaultRemoveComponent
  // },
  {
    path: 'dashboard', component: DashboardComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'dashboard/:id', component: DashboardComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'wallet/create', component: WalletCreateComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'wallet/edit', component: WalletEditComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'wallet/remove', component: WalletRemoveComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'action/sign', component: ActionSignComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'action/identity', component: ActionIdentityComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'action/login', component: ActionLoginComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'action/sid', component: ActionStratisIdentityComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'action/nostr', component: ActionNostrIdentityComponent, resolve: {
      data: LoadingResolverService
    }
  },
  {
    path: 'popup2',
    loadChildren: () => import('./modules/popup/popup.module').then(m => m.PopupModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./modules/tab/tab.module').then(m => m.TabModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./modules/options/options.module').then(m => m.OptionsModule)
  },
  {
    path: '**', redirectTo: '/'
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
