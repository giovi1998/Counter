 //-------import Funtions from CreateElements.js-------
 import {createDiv} from "./modules/createElementsHTML.js";
 import {createP} from "./modules/createElementsHTML.js";
 import {createH1} from "./modules/createElementsHTML.js";
 import {createButton} from "./modules/createElementsHTML.js";
 import {createInput} from "./modules/createElementsHTML.js";
 import {styleButton} from "./modules/createElementsHTML.js";
 import {appendElementToADiv} from "./modules/createElementsHTML.js";

//creeate H1 
 let content = "Counter";
 let className = "title is-1 mt-5";
 let h1= createH1(className,content);

//append to the H1 to body element
document.body.append(h1);

 //Create a new container
 let divContent = createDiv("mr-5 ml-5");

 let content1 = "This is an example of a counter. If you are too lazy to click on the two -/+ bottons click on the \"HELP\" button. The HELP button will automatically increase your counter every sec. If, on the other hand, you want to cancel the counter with a simple click, press the \"ERASE\" button";
 let p = createP(content1);

 //append to the H1 element to div element
 appendElementToADiv(divContent,p);
 
//Create a new container
 let divContainer1 = createDiv("mt-5");

 //myButtonMinus
 let myButtonsMinus = createButton('-');
 styleButton(myButtonsMinus,'button buttonMinus is-danger is-light mr-2 mb-6 ml-2');
 appendElementToADiv(divContainer1,myButtonsMinus);

//inputForm
 let inputForm1 = createInput();
 appendElementToADiv(divContainer1,inputForm1);

//myButtonPlus
 let myButtonsPlus = createButton('+');
 styleButton(myButtonsPlus,'button buttonMinus is-danger is-light mr-2 mb-6 ml-2');
 appendElementToADiv(divContainer1,myButtonsPlus);

//Create a new container
 let divContainer2 = createDiv();
 
 //myButtonHelp
 let myButtonsHelp = createButton('HELP');
 styleButton(myButtonsHelp,'button buttonHelp is-success mr-2 mb-6');
 appendElementToADiv(divContainer2,myButtonsHelp);

 //myButtonHelp
 let myButtonsErase = createButton('ERASE');
 styleButton(myButtonsErase,'button buttonErase is-danger ml-2 mb-6');
 appendElementToADiv(divContainer2,myButtonsErase);

//-------Import functions from javascript-------
import {plusNumberInput} from "./modules/functions.js";
import {minusNumberInput} from "./modules/functions.js";
import {eraseInput} from "./modules/functions.js";
import {helpInput} from "./modules/functions.js";

//-------Use funtion imported-------
plusNumberInput(myButtonsPlus);
minusNumberInput(myButtonsMinus);
eraseInput(myButtonsErase);
helpInput(myButtonsHelp);
