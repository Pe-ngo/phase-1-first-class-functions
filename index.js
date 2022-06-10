//callback function
function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function ft() {};
}

function returnsAnAnonymousFunction() {
    return () => ('');
}