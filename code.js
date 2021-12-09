//1


//2
 
function hasUniqueChars(char) {
    for(let i = 0; i < char.length; i++)
        for(let j = i + 1; j < char.length - 1; j++)
            if (char[i] === char[j]){

                return false;
            }
            return true;
}
console.log(hasUniqueChars("hello"))
console.log(hasUniqueChars("hola"))
//O(n2) - Quadratic Time

//3

function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "not pangram";
     }
    }
   
   return "pangram";
 }
 console.log(pangrams("the quick brown fox jumps over the lazy dog"))
 // O(log n) - Logarithmic Time

 //4
 function find_longest_word(str)
{
  let array = str.match(/\w[a-z]{0,}/gi);
  let result = array[0];

  for(let i = 1; i < array.length ; i++)
  {
    if(result.length < array[i].length)
    {
    result = array[i];
    } 
  }
  return result.length;
}
console.log(find_longest_word("Whats up longword"));
//O(n) - Linear Time