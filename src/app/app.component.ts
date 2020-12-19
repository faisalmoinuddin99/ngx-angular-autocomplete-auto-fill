import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Ngx Angular AutoComplete";
  selected_employee: any;
  public employees = [
    {
      id: 1,
      name: "Byram",
      gender: "Male",

      pincode: "400708",
      village: "Airoli",
      taluka: "Thane",
      district: "Thane",
      state: "Maharashtra"
    },
    {
      id: 2,
      name: "Jeniffer",
      gender: "Female",

      pincode: "416007",
      village: "Kalamba",
      taluka: "Kalyan",
      district: "Thane",
      state: "Maharashtra"
    },
    {
      id: 3,
      name: "Gerda",
      gender: "Female",
      pincode: "421102",
      village: "Atali",
      taluka: "Kalyan",
      district: "Thane",
      state: "Maharashtra"
    }
    // {
    //   id: 4,
    //   name: "Ferrell",
    //   gender: "Male"
    // },
    // {
    //   id: 5,
    //   name: "Rowe",
    //   gender: "Female"
    // },
    // {
    //   id: 6,
    //   name: "Josephine",
    //   gender: "Female"
    // },
    // {
    //   id: 7,
    //   name: "Alfons",
    //   gender: "Male"
    // },
    // {
    //   id: 8,
    //   name: "Rycca",
    //   gender: "Female"
    // },
    // {
    //   id: 9,
    //   name: "Mandy",
    //   gender: "Female"
    // },
    // {
    //   id: 10,
    //   name: "Bunni",
    //   gender: "Female"
    // },
    // {
    //   id: 11,
    //   name: "Stepha",
    //   gender: "Female"
    // },
    // {
    //   id: 12,
    //   name: "Pete",
    //   gender: "Male"
    // },
    // {
    //   id: 13,
    //   name: "Keary",
    //   gender: "Male"
    // },
    // {
    //   id: 14,
    //   name: "Esme",
    //   gender: "Female"
    // },
    // {
    //   id: 15,
    //   name: "Juieta",
    //   gender: "Female"
    // }
  ];

  selectEvent(event) {
    this.selected_employee = JSON.stringify(event);
  }
}
