function számol() {
    const tört1 = document.getElementById("tört1");
    const tört2 = document.getElementById("tört2");
    const tört3 = document.getElementById("tört3");
    const tört4 = document.getElementById("tört4");
    const muvelet = document.getElementById("művelet");
    const eredmény = document.getElementById("eredmény");

    if (
        tört1 instanceof HTMLInputElement &&
        tört2 instanceof HTMLInputElement &&
        tört3 instanceof HTMLInputElement &&
        tört4 instanceof HTMLInputElement &&
        eredmény instanceof HTMLElement
    ) {
        const xy: number = parseInt(tört1.value) / parseInt(tört2.value);
        const yx: number = parseInt(tört3.value) / parseInt(tört4.value);
        const oszto1: number = parseInt(tört1.value);
        const oszto2: number = parseInt(tört3.value);
        const osztando1: number = parseInt(tört2.value);
        const osztando2: number = parseInt(tört4.value);

        if (isNaN(xy) || isNaN(yx) || isNaN(oszto1) || isNaN(oszto2) || isNaN(osztando1) || isNaN(osztando2)) {
            eredmény.innerHTML = "A megadott számok egyike nem jó!";
            return;
        }

        let nsz = Math.max(osztando1, osztando2);
        const ksz = Math.min(osztando1, osztando2);

        while (nsz % ksz !== 0) {
            nsz += Math.max(osztando1, osztando2);
        }
        if (oszto1 != 0 && oszto2 != 0 && osztando1 >= 0 && osztando2 >= 0) {
            const szam1: number = oszto1 * (nsz / oszto1);
            const szam2: number = oszto2 * (nsz / oszto2);

            eredmény.innerHTML = `${oszto1} / ${osztando1} + ${oszto2} / ${osztando2} = ${xy} + ${yx} = ${szam1} / ${szam2}`;
        }
    }
}

document.getElementById("tört1")!.addEventListener("input", számol);
document.getElementById("tört2")!.addEventListener("input", számol);
document.getElementById("tört3")!.addEventListener("input", számol);
document.getElementById("tört4")!.addEventListener("input", számol);
