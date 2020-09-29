import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  private allgemeinReadonly: boolean;
  private firma: string;
  private besuchBei: string;
  private taetigkeit: string;
  private anrede: string;
  private vorname: string;
  private nachname: string;
  private besucherList: any[] = [
    { anrede: "Herr", vorname: "Max", nachname: "Mustermann" },
    { anrede: "Herr", vorname: "John", nachname: "Doe" },
    { anrede: "Frau", vorname: "Jane", nachname: "Doe" }
  ];

  constructor() {}

  private addBesucher(): void {
    this.besucherList.push({
      anrede: this.anrede, 
      vorname: this.vorname, 
      nachname: this.nachname
    });
    this.allgemeinReadonly = true;
  }

  private reset(): void {
    this.allgemeinReadonly = false;
    this.firma = '';
    this.besuchBei = '';
    this.taetigkeit = '';
    this.anrede = '';
    this.vorname = '';
    this.nachname = '';
    this.besucherList = [];
  }

  private checkIn(): void {
    this.reset();
  }

}
