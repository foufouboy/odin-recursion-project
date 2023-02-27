function iterativeFibo(n) {
    if (n <= 1) return [0];

    let a = 0;
    let b = 1;
    let res = [0, 1];

    for (let i = 2; i < n; i++) {
        let c = a + b;

        res.push(c);

        a = b;
        b = c;
    }

    return res;
}

function recursiveFibo(n) {
    if (n <= 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const prec = recursiveFibo(n - 1);
        return prec.concat(prec[prec.length - 1] + prec[prec.length - 2]);
    }
}

// retourner une liste contenant la somme des deux derniers éléments de la liste



