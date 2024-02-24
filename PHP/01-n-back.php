<?php
class TargetCounter {
    private $n;
    private $sequence;

    public function __construct($n, $sequence) {
        $this->n = $n;
        $this->sequence = $sequence;
    }

    public function countTargets() {
        $targets = 0;
        $length = count($this->sequence);

        for($i = $this->n; $i < $length; $i++) {
            if($this->sequence[$i] === $this->sequence[$i - $this->n]){
                $targets++;
            }
        }

        return $targets;
    }
}

$sequence = array(1,0,1,1,0,1,1,1);
$n = 2;

$contador = new TargetCounter($n, $sequence);
$cantidadDeObjetivos = $contador->countTargets();
echo "(PHP) La cantidad de objetivos es: " . $cantidadDeObjetivos;

?>
