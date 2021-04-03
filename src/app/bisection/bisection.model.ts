export class BisectionModel {
    private a: number;
    private b: number;
    private f_m: number;
    private f_a_m: number;
    private m: number;

    constructor(a: number,b: number, m: number,f_m: number,f_a_m: number){
      this.a = a;
      this.b = b;
      this.f_m = f_m;
      this.f_a_m = f_a_m;
      this.m = m;
    }
}