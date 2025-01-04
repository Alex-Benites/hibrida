import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // Importa NgFor
import { IonCardContent, IonCardTitle, IonCardHeader, IonButton, IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon, IonCard, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-tab0',
  templateUrl: 'tab0.page.html',
  styleUrls: ['tab0.page.scss'],
  standalone: true,
  imports: [
    NgFor, // Asegúrate de incluir NgFor
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
  signCatalog = [
    {
      name: 'Seña de Adiós',
      description: 'Expresión usada para despedirse de alguien.',
      imageUrl: 'assets/imagenes/adios.png',
    },
    {
      name: 'Seña de Buenos Días',
      description: 'Expresión de saludo usada para desear a alguien un día agradable.',
      imageUrl: 'assets/imagenes/buenosDias.png',
    },
    {
      name: 'Seña de Gracias',
      description: 'Expresión usada para demostrar agradecimiento.',
      imageUrl: 'assets/imagenes/gracias.png',
    },
  ];

  viewDetails(sign: { name: string; description: string; imageUrl: string }) {
    alert(`Detalles de ${sign.name}:\n${sign.description}`);
  }
}
