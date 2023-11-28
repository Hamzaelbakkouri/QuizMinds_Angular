import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/Section/container/container.component';
import { ButtonBoxComponent } from './components/Button/button-box/button-box.component';
import { SubjectsListComponent } from './components/Section/subjects-list/subjects-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgIconsModule } from '@ng-icons/core';
import { ionBackspaceSharp , ionPencil} from '@ng-icons/ionicons';
import { ConfirmComponent } from './components/popup/confirm/confirm.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    ButtonBoxComponent,
    SubjectsListComponent,
    FooterComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ ionBackspaceSharp , ionPencil})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
