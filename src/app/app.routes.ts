import { Routes } from '@angular/router';
import { GetSetInputComponent } from './components/get-set-input/get-set-input.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForLoopComponent } from './components/for-loop/for-loop.component';
import { EventsComponent } from './components/events/events.component';
import { SignalsComponent } from './components/signals/signals.component';
import { Signals2Component } from './components/signals2/signals2.component';
import { ComputedSignalsComponent } from './components/computed-signals/computed-signals.component';
import { EffectComponent } from './components/effect/effect.component';
import { ForLoopContextualComponent } from './components/for-loop-contextual/for-loop-contextual.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { DynamicStylingComponent } from './components/dynamic-styling/dynamic-styling.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ReactiveFormsGroupComponent } from './components/reactive-forms-group/reactive-forms-group.component';
import { ReactiveFormsValidationComponent } from './components/reactive-forms-validation/reactive-forms-validation.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { TemplateFormValidationComponent } from './components/template-form-validation/template-form-validation.component';
import { UserComponent } from './components/user/user.component';
import { ParentUserComponent } from './components/parent-user/parent-user.component';
import { UserReuseComponent } from './components/user-reuse/user-reuse.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductsComponent } from './components/products/products.component';
import { UserApiComponent } from './components/user-api/user-api.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    {
        path:'input',
        component:GetSetInputComponent
    },
    {
        path:'control',
        component:ControlFlowComponent
    },
    {
        path:'switch',
        component:SwitchComponent
    },
    {
        path:'for',
        component:ForLoopComponent
    },
    {
        path:'events',
        component:EventsComponent
    },
    {
        path:'signal',
        component:SignalsComponent
    },
    {
        path:'signal2',
        component:Signals2Component
    },
    {
        path:'computedsignal',
        component:ComputedSignalsComponent
    },
    {
        path:'effect',
        component:EffectComponent
    },
    {
        path:'forcontextual',
        component:ForLoopContextualComponent
    },
    {
        path:'binding',
        component:TwoWayBindingComponent
    },
    {
        path:'todo',
        component:TodolistComponent
    },
    {
        path:'dynamicstyle',
        component:DynamicStylingComponent
    },
    {
        path:'ngfor',
        component:NgforComponent
    },
    {
        path:'ngif',
        component:NgifComponent
    },
    {
        path:'ngswitch',
        component:NgswitchComponent
    },
    {
        path:'profile',
        component:ProfileComponent,
        data:{name:'Ivriel Gunawan'} // hanya work ketika akan mengoper data yang selalu sama
   },
   {
    path:'reactiveform',
    component:ReactiveFormsComponent
   },
   {
    path:'reactiveformgroup',
    component:ReactiveFormsGroupComponent
   },
   {
    path:'reactiveformvalidation',
    component:ReactiveFormsValidationComponent
   },
   {
    path:'templateform',
    component:TemplateFormsComponent
   },
   {
    path:'templateformvalidation',
    component:TemplateFormValidationComponent
   },
   {
    path:'parentuser',
    component:ParentUserComponent
   },
   {
    path:'reuseuser',
    component:UserReuseComponent
   },
   {
    path:'parent',
    component:ParentComponent
   },
   {
    path:'pipes',
    component:PipesComponent
   },
   {
    path:'lifecycle',
    component:LifecycleComponent
   },
   {
    path:'service',
    component:ServiceComponent
   },
   {
    path:'products',
    component:ProductsComponent
   },
   {
    path:'usersapi',
    component:UserApiComponent
   },
   {
    path:'admin',
    loadComponent:()=>import('./components/admin/admin.component').then(c=>c.AdminComponent) // penerapan lazy loading
   },
];
