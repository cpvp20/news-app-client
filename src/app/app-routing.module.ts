import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { NewsComponent } from './components/news/news.component';
import { UsersComponent } from './components/users/users.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { UsersListComponent } from './components/users/users-list/users-list.component'
import { UserDataComponent } from './components/users/user-data/user-data.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { AuthGuard } from './common/guards/auth.guard'

const routes:Routes = [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'news', component: NewsComponent},
    {path: 'users', component: UsersComponent, canActivate:[AuthGuard], children: [
        {path: '', component: UsersListComponent},
        {path: ':id', component: UserDataComponent},
    ]},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    {path: '**', component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}