class Formation {
  constructor(nom, eleves) {
    this.nom = nom;
    this.eleves = eleves;
  }
  get_eleves() {
    console.log(`Voici les élèves de la formation ${this.nom} :`);
    this.eleves.forEach((elem, ind) => {
      console.log(`${ind} -> ${elem}`);
    });
  }
}

class FormationJS extends Formation {
  constructor(nom, prof, eleves) {
    super(nom, eleves);
    this.prof = prof;
  }
  get_prof() {
    console.log(`Le prof s'appelle ${this.prof}`);
  }
}

let formation = new FormationJS('test', 'Pascal', ['Loic', 'Mathieu', 'Nicolas']);

debugger
