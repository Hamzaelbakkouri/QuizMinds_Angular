import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/Section/container/container.component';
import { ButtonBoxComponent } from './components/Button/button-box/button-box.component';
import { SubjectsListComponent } from './components/Section/Subject/subjects-list/subjects-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgIconsModule } from '@ng-icons/core';
import { ionBackspaceSharp, ionPencil } from '@ng-icons/ionicons';
import { bootstrapCalendarCheckFill, bootstrapBell } from '@ng-icons/bootstrap-icons';
import { ConfirmComponent } from './components/Section/Subject/confirm/confirm.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/Section/Subject/create/create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    ButtonBoxComponent,
    SubjectsListComponent,
    FooterComponent,
    ConfirmComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ ionBackspaceSharp, ionPencil, bootstrapCalendarCheckFill, bootstrapBell }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
