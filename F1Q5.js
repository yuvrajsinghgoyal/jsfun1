let TypeOfPackage="express"
switch(TypeOfPackage){
    case "express":
        console.log("within 1-2 days")
        break;
    case "standerd":
        console.log("Might take 3-5 days")
        break;

    case "overnight":
        console.log("would be delivered the next day")
        break;

    default:
        console.log("an error occure")
        break;

}
