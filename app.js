function vowelSum(args){
  let n = args.length;
  let sum = 0;

  for(i = 0; i < n; i++){
    if(args[i] === "a"){
      sum += 1;
    }
    else if(args[i] === "e"){
      sum += 2;
    }
    else if(args[i] === "i"){
      sum += 3;
    }
    else if(args[i] === "o"){
      sum += 4;
    }
    else if(args[i] === "u"){
      sum += 5;
    }
  }
  console.log(sum);
  
}
vowelSum("hello");
