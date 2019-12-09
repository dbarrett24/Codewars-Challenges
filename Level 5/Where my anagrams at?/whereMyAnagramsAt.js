function anagrams(word, words) {
    let anagramMatches = [];
    let wordMatch = [];
    for(let i = 0; i < words.length; i++){
        
        if(words[i].length !== word.length){
            i++;
        } else{
            for(let j = 0; j < words[i].length; j++){
                if(word.includes(words[i][j]) && !wordMatch.includes(words[i][j])){
                    wordMatch.push(words[i][j]);
                }
            }
        }

    }
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));