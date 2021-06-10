import {Injectable} from '@angular/core';

// Définition du contenu de News
export interface News {
  image: string;
  title: string;
  description: string;
  url: string;
}

// Remplissage de news
const mockNews: News[] = [
  {
    image: '/assets/images/covid-19.jpg',
    title: 'COVID-19',
    description: 'Chiffres clés, interviews d\'experts, questions-réponses, outils de prévention... tout savoir sur le coronavirus (SARS-CoV-2), COVID-19, son évolution en France et dans le Monde, et l’action de Santé publique France.',
    url: '/covid-news-page'
  },
  {
    image: '/assets/images/vaccin.jpg',
    title: 'Vaccination pour tous (dès 18 ans)',
    description: 'Les personnes de plus de 18 ans peuvent se faire vacciner sans conditions en centre de vaccination avec le\n' +
      '          vaccin Pfizer (ou Moderna uniquement pour la 2ème dose) ou en pharmacie ou chez leur médecin généraliste, dans\n' +
      '          un cabinet infirmier ou auprès d\'une sage-femme avec le vaccin Moderna.',
    url: '/vaccin-news-page'
  },
  {
    image: '/assets/images/ps5.jpg',
    title: 'Jim Ryan affirme que la pénurie de PS5 sera bientôt terminée',
    description: 'Fini les temps difficiles pour la PS5, la situation s’améliorera bientôt pour la dernière console de Sony, foi\n' +
      'de Jim Ryan.\n' +
      'Bien que toujours engluée dans des problèmes de productions comme sa concurrente, la PS5 devrait être\n' +
      'accessible plus facilement d’ici quelques semaines/mois.',
    url: '/ps5-news-page'
  }
];

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() {
  }
  //cette fonction permets de récupèrer News
  getAll(): News[] {
    return [...mockNews];
  }
}
