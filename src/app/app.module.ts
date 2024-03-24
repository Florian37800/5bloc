import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomepageComponent } from './component/homepage/homepage.component';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './component/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { SmartContractService } from './service/smart-contract/smart-contract.service';
import { TicketComponent } from './component/ticket/ticket.component';
import { AboutComponent } from './component/about/about.component';
import { TransactionConfirmationComponent } from './component/transaction-confirmation/transaction-confirmation.component';
import { AdministratorComponent } from './component/administrator/administrator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CardComponent,
    TicketComponent,
    AboutComponent,
    TransactionConfirmationComponent,
    AdministratorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    
  ],
  providers: [
    provideAnimationsAsync(),
    SmartContractService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
