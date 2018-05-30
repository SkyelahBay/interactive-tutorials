
/* EXAMPLE */
function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}
function callback(sentence) {
    // TODO: print out sentence
}




/* SOLUTION */
useCallback = callback =>{
    callback(1);
    callback(2);
    callback(3);
}

callback = sentence => console.log(sentence); 
useCallback(callback);
