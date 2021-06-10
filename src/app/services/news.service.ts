import {Injectable} from '@angular/core';

export interface News {
  image: string;
  title: string;
  description: string;
  text: string;
  url: string;
}

const mockNews: News[] = [
  {
    image:'/assets/images/covid-19.jpg',
    title: 'COVID-19',
    description: 'Chiffres clés, interviews d\'experts, questions-réponses, outils de prévention... tout savoir sur le coronavirus (SARS-CoV-2), COVID-19, son évolution en France et dans le Monde, et l’action de Santé publique France.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ipsum ut luctus pharetra. Nulla non eros\n' +
      '    nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sodales justo eros, ac elementum risus\n' +
      '    tristique convallis. Aenean lectus metus, ultrices sit amet facilisis in, molestie vel mauris. Phasellus mattis\n' +
      '    porttitor placerat. Curabitur non ipsum pretium, aliquam eros a, venenatis dui. Cras auctor at quam eget accumsan.\n' +
      '    Vivamus mi orci, tincidunt sit amet nisl quis, rhoncus accumsan sem. Vestibulum vitae ex a ex laoreet pellentesque.\n' +
      '    Curabitur pulvinar justo augue, semper rhoncus lacus aliquam sed.\n' +
      '    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ipsum ut luctus pharetra. Nulla non eros\n' +
      '    nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sodales justo eros, ac elementum risus\n' +
      '    tristique convallis. Aenean lectus metus, ultrices sit amet facilisis in, molestie vel mauris. Phasellus mattis\n' +
      '    porttitor placerat. Curabitur non ipsum pretium, aliquam eros a, venenatis dui. Cras auctor at quam eget accumsan.\n' +
      '    Vivamus mi orci, tincidunt sit amet nisl quis, rhoncus accumsan sem. Vestibulum vitae ex a ex laoreet pellentesque.\n' +
      '    Curabitur pulvinar justo augue, semper rhoncus lacus aliquam sed.\n' +
      '    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ipsum ut luctus pharetra. Nulla non eros\n' +
      '    nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sodales justo eros, ac elementum risus\n' +
      '    tristique convallis. Aenean lectus metus, ultrices sit amet facilisis in, molestie vel mauris. Phasellus mattis\n' +
      '    porttitor placerat. Curabitur non ipsum pretium, aliquam eros a, venenatis dui. Cras auctor at quam eget accumsan.\n' +
      '    Vivamus mi orci, tincidunt sit amet nisl quis, rhoncus accumsan sem. Vestibulum vitae ex a ex laoreet pellentesque.\n' +
      '    Curabitur pulvinar justo augue, semper rhoncus lacus aliquam sed.',
    url:'/covid-news-page'
  },
  {
    image:'/assets/images/vaccin.jpg',
    title: 'Vaccination pour tous (dès 18 ans)',
    description: 'Les personnes de plus de 18 ans peuvent se faire vacciner sans conditions en centre de vaccination avec le\n' +
      '          vaccin Pfizer (ou Moderna uniquement pour la 2ème dose) ou en pharmacie ou chez leur médecin généraliste, dans\n' +
      '          un cabinet infirmier ou auprès d\'une sage-femme avec le vaccin Moderna.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ipsum ut luctus pharetra. Nulla non eros\n' +
      '    nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sodales justo eros, ac elementum risus\n' +
      '    tristique convallis. Aenean lectus metus, ultrices sit amet facilisis in, molestie vel mauris. Phasellus mattis\n' +
      '    porttitor placerat. Curabitur non ipsum pretium, aliquam eros a, venenatis dui. Cras auctor at quam eget accumsan.\n' +
      '    Vivamus mi orci, tincidunt sit amet nisl quis, rhoncus accumsan sem. Vestibulum vitae ex a ex laoreet pellentesque.\n' +
      '    Curabitur pulvinar justo augue, semper rhoncus lacus aliquam sed.\n' +
      '    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ipsum ut luctus pharetra. Nulla non eros\n' +
      '    nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sodales justo eros, ac elementum risus\n' +
      '    tristique convallis. Aenean lectus metus, ultrices sit amet facilisis in, molestie vel mauris. Phasellus mattis\n' +
      '    porttitor placerat. Curabitur non ipsum pretium, aliquam eros a, venenatis dui. Cras auctor at quam eget accumsan.\n' +
      '    Vivamus mi orci, tincidunt sit amet nisl quis, rhoncus accumsan sem. Vestibulum vitae ex a ex laoreet pellentesque.\n' +
      '    Curabitur pulvinar justo augue, semper rhoncus lacus aliquam sed.\n' +
      '    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ipsum ut luctus pharetra. Nulla non eros\n' +
      '    nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sodales justo eros, ac elementum risus\n' +
      '    tristique convallis. Aenean lectus metus, ultrices sit amet facilisis in, molestie vel mauris. Phasellus mattis\n' +
      '    porttitor placerat. Curabitur non ipsum pretium, aliquam eros a, venenatis dui. Cras auctor at quam eget accumsan.\n' +
      '    Vivamus mi orci, tincidunt sit amet nisl quis, rhoncus accumsan sem. Vestibulum vitae ex a ex laoreet pellentesque.\n' +
      '    Curabitur pulvinar justo augue, semper rhoncus lacus aliquam sed.',
    url:'/vaccin-news-page'
  },
  {
    image:'/assets/images/ps5.jpg',
    title: 'Jim Ryan affirme que la pénurie de PS5 sera bientôt terminée',
    description:'Fini les temps difficiles pour la PS5, la situation s’améliorera bientôt pour la dernière console de Sony, foi\n' +
      'de Jim Ryan.\n' +
      'Bien que toujours engluée dans des problèmes de productions comme sa concurrente, la PS5 devrait être\n' +
      'accessible plus facilement d’ici quelques semaines/mois.',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ipsum ut luctus pharetra. Nulla non eros\n' +
      '    nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sodales justo eros, ac elementum risus\n' +
      '    tristique convallis. Aenean lectus metus, ultrices sit amet facilisis in, molestie vel mauris. Phasellus mattis\n' +
      '    porttitor placerat. Curabitur non ipsum pretium, aliquam eros a, venenatis dui. Cras auctor at quam eget accumsan.\n' +
      '    Vivamus mi orci, tincidunt sit amet nisl quis, rhoncus accumsan sem. Vestibulum vitae ex a ex laoreet pellentesque.\n' +
      '    Curabitur pulvinar justo augue, semper rhoncus lacus aliquam sed.\n' +
      '    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ipsum ut luctus pharetra. Nulla non eros\n' +
      '    nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sodales justo eros, ac elementum risus\n' +
      '    tristique convallis. Aenean lectus metus, ultrices sit amet facilisis in, molestie vel mauris. Phasellus mattis\n' +
      '    porttitor placerat. Curabitur non ipsum pretium, aliquam eros a, venenatis dui. Cras auctor at quam eget accumsan.\n' +
      '    Vivamus mi orci, tincidunt sit amet nisl quis, rhoncus accumsan sem. Vestibulum vitae ex a ex laoreet pellentesque.\n' +
      '    Curabitur pulvinar justo augue, semper rhoncus lacus aliquam sed.\n' +
      '    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius ipsum ut luctus pharetra. Nulla non eros\n' +
      '    nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sodales justo eros, ac elementum risus\n' +
      '    tristique convallis. Aenean lectus metus, ultrices sit amet facilisis in, molestie vel mauris. Phasellus mattis\n' +
      '    porttitor placerat. Curabitur non ipsum pretium, aliquam eros a, venenatis dui. Cras auctor at quam eget accumsan.\n' +
      '    Vivamus mi orci, tincidunt sit amet nisl quis, rhoncus accumsan sem. Vestibulum vitae ex a ex laoreet pellentesque.\n' +
      '    Curabitur pulvinar justo augue, semper rhoncus lacus aliquam sed.',
    url:'/ps5-news-page'
  }
];

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() {
  }
  getAll(): News[]{
    return [...mockNews];
  }
}
