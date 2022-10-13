export default class Students {
  private _nome: string;
  private _matricula: number;
  _provas: number[];
  _trabalhos: number[];

  constructor(name: string, matricula: number) {
    this._nome = name;
    this._matricula = matricula;
    this._provas = [];
    this._trabalhos = [];
  }

  get nome() {
    return this._nome;
  }

  get matricula() {
    return this._matricula;
  }

  set provas(provas: number[]) {
    if ( provas.length > 4 ) {
      throw new Error("Não é possível adicionar mais de 4 provas");
    }
    this._provas = provas;
  }

  set trabalhos(trabalhos: number[]) {
    if ( trabalhos.length > 2 ) {
      throw new Error("Não é possível adicionar mais de 2 trabalhos");
    }
    this._trabalhos = trabalhos;
  }

  somaDasNotas(): number {
    const soma = this._provas.reduce((acc, atual) => acc + atual, 0);
    return soma;
  }

  mediaDasNotas(): number {
    if ( this._provas.length === 0 ) {
      throw new Error("Não é possível calcular a média sem provas");
    }
    const soma = this.somaDasNotas();
    const media = this.somaDasNotas() / this._provas.length;
    return media;
  }

}


