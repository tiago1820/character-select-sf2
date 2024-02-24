class TargetCounter {
    constructor(private n: number, private sequence: number[]){};

    countTargets(): number {
        let targets: number = 0;

        for(let i: number = this.n; i < this.sequence.length; i++){
            if(this.sequence[i] === this.sequence[i - this.n]){
                targets++;
            }
        }

        return targets;
    }
}

const secuencia: number[] = [1,0,1,1,0,1,1,1];
const n: number = 2;

const contador: TargetCounter = new TargetCounter(n, secuencia);
const cantidadDeObjetivos: number = contador.countTargets();
console.log("La cantidad de objetivos es: ", cantidadDeObjetivos);