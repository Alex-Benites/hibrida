import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // Importa NgFor
import { IonCardContent, IonCardTitle, IonCardHeader, IonButton, IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon, IonCard, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PercentPipe } from '@angular/common';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab0',
  templateUrl: 'tab0.page.html',
  styleUrls: ['tab0.page.scss'],
  standalone: true,
  imports: [
    NgFor,
    PercentPipe,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonFab,
    IonFabButton,
    IonIcon,
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent
  ],
})
export class Tab0Page {
  constructor(private navCtrl: NavController) {}
  signCatalog = [
    {
      name: 'Seña de Adiós',
      description: 'Expresión usada para despedirse de alguien.',
      tutorial: 'La mano se desplaza desde un costado de la frente hacia delante. La cabeza se reclina ligeramente y la boca se abre.',
      imageUrl: 'assets/imagenes/adios.png',
    },
    {
      name: 'Seña de Buenos Días',
      description: 'Expresión de saludo usada para desear a alguien un día agradable.',
      tutorial: 'La mano desde la frente se desplaza hacia abajo y después hacia arriba mientras se abre simultáneamente.',
      imageUrl: 'assets/imagenes/buenosDias.png',
    },
    {
      name: 'Seña de Gracias',
      description: 'Expresión usada para demostrar agradecimiento.',
      tutorial: 'La mano se separa del mentón hacia la palma contaría. El rostro sonríe.',
      imageUrl: 'assets/imagenes/gracias.png',
    },
  ];

  viewDetails(sign: any) {
    this.navCtrl.navigateForward('/sign-details', {
      queryParams: {
        sign: JSON.stringify(sign) // Pasamos el objeto completo
      }
    });
  }
}
