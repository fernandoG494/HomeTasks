/**
 * Create your custom error and trigger it:
 */

const statusCheck = (input) => {
    try{
        if(input.length <= 5) throw "Length should be at least 5";
    }catch(err){
        console.log("[Error]: " + err)
    }
}

statusCheck("some");