const vm = new Vue({
    el: '#app',
    data: {
        contador: 0,
    },
    methods: {
        incrementar(){
        this.contador++;
        },
        // sintaxe curta ES6
        diminuir() {
        this.contador--;
        },
    },
});