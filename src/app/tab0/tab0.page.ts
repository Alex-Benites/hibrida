import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
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
      name: 'Seña A',
      tutorial: 'Cierra la mano en un puño.',
      detalles: 'Mantén el pulgar levantado hacia un lado (como un "pulgar arriba"). El resto de los dedos permanecen doblados, cubriendo la palma.',
      imageUrl: 'assets/imagenes/a.png',
    },
    {
      name: 'Seña B',
      tutorial: 'Abre la mano completamente.',
      detalles: 'Los dedos están rectos y juntos, con la palma mirando hacia adelante. El pulgar está doblado hacia la base de la palma.',
      imageUrl: 'assets/imagenes/b.png',
    },
    {
      name: 'Seña C',
      tutorial: 'Forma una "C"',
      detalles: 'Dobla los dedos como si estuvieras sosteniendo una pelota pequeña. Mantén la palma hacia el frente y el pulgar opuesto a los dedos formando el arco de la "C"',
      imageUrl: 'assets/imagenes/c.png',
    },
    {
      name: 'Seña D',
      tutorial: 'Levanta el dedo índice.',
      detalles: 'Mantén el dedo índice recto apuntando hacia arriba. Los otros dedos están doblados hacia la palma, y el pulgar toca el medio de los dedos doblados.',
      imageUrl: 'assets/imagenes/d.png',
    },
    {
      name: 'Seña E',
      tutorial: 'Haz un puño parcialmente cerrado.',
      detalles: 'Dobla los dedos hacia la palma sin apretarlos completamente. El pulgar descansa sobre los dedos doblados.',
      imageUrl: 'assets/imagenes/e.png',
    },
  ];

}
