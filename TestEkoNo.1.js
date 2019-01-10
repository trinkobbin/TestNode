var array_word = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO',
'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];

var lens = [4,5,6,7];
var first_word = ['AMOR','MONJA','ALEXIS','ESPONJA']
var tmp_size = 0;
var str_word;
var str_word2;
for(var i = 0;i<lens.length;i++){
    tmp_size = lens[i];
    str_word = first_word[0];
    str_word2 = "";
    // console.log(first_word[i]);
    for(var j = 0;j<array_word.length;j++){
        lens_word = array_word[j].length;
        str_word2 = array_word[j];
        if(tmp_size == lens_word){
            if(first_word[i]!=str_word2){
                // console.log(" - ",array_word[j]);
                str_word = str_word.concat(" - ",str_word2);
            }else{
                continue;
            }
        }
    }
    console.log(str_word);
    console.log();
}