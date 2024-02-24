class TargetCounter {
    constructor(n, sequence) {
        this.n = n;
        this.sequence = sequence;
    }

    countTargets() {
        let targets = 0;

        for(let i = this.n; i < this.sequence.length; i++) {
            if(this.sequence[i] === this.sequence[i - this.n]) {
                targets++;
            }
        }

        return targets;
    }
}

const secuencia = [1,0,1,1,0,1,1,1];
const n = 2;
const contador = new TargetCounter(n, secuencia);
const cantidadDeObjetivos = contador.countTargets();
console.log("La cantidad de objetivos es: ", cantidadDeObjetivos);