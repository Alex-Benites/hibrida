import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipe } from '../pipes/safe.pipe';
import { IonCardContent, IonCardTitle, IonCardHeader, IonContent, IonCard, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';  // Asegúrate de importar IonIcon aquí

@Component({
  selector: 'app-sign-details',
  templateUrl: './sign-details.page.html',
  styleUrls: ['./sign-details.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCardTitle,
    SafePipe,
    IonCardHeader,
    IonContent,
    IonCard,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    CommonModule,
    FormsModule
  ]
})
export class SignDetailsPage implements OnInit {
  sign: any = {};
  videoUrl: string = 'https://www.youtube.com/embed/a616tBRvPgk?start=127'; 

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const signData = params['sign'];
      if (signData) {
        this.sign = JSON.parse(signData);
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
