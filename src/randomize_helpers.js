
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.getRandomIntInclusive = getRandomIntInclusive;

function generate_random_percent_distribution(percent){
    arr = Array(100).fill(0);
    arr.fill(1, 0, percent);
    return shuffle_array_using_fisher_yates(arr);
}
exports.generate_random_percent_distribution = generate_random_percent_distribution;

function shuffle_array_using_fisher_yates(arr){
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
