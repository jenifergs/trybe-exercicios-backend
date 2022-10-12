class Students {
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

}