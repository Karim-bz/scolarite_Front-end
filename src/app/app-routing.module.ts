import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { AddAdministrativeDocComponent } from "./pages/add-administrative-doc/add-administrative-doc.component";
import { DashboardDefaultComponent } from "./pages/dashboard/dashboard-default/dashboard-default.component";
import { MyDemandsComponent } from "./pages/my-demands/my-demands.component";
import { SimplePageComponent } from "./pages/simple-page/simple-page.component";
import { ProfileComponent } from "./pages/user/profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    children: [
      {
        path: "",
        component: DashboardDefaultComponent,
      },
    ],
  },
  {
    path: "dashboard",
    component: HomePageComponent,
    children: [
      {
        path: "",
        component: DashboardDefaultComponent,
      },
      {
        path: "addAdministrativeDocument",
        component: AddAdministrativeDocComponent,
      },
      {
        path: "myDemands",
        component: MyDemandsComponent
      },
      // {
      //   path: "stage", component : ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
      // {
      //   path: "club", component: ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
      // {
      //   path: "communication", component: ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
      // {
      //   path: "scolarite", component: ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
      // {
      //   path: "selection", component: ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
