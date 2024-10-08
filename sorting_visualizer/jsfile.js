const which_algorithm = document.getElementById("algorithm");
const submit_array = document.getElementById("submit-array");
// console.log(which_algorithm.value);


//speed animation

const slow = document.getElementById("slow-btn");
const fast = document.getElementById("fast-btn");
let speed = 1500;

fast.addEventListener("click", ()=>{

    if(speed <= 800 && speed >= 300)
    {
        speed = 300;
    }
    else
    {
        speed -= 500;
    }

});
slow.addEventListener("click", ()=>{

    speed += 500;

});


let submit_array_pressed_times = 0;
submit_array.addEventListener("click", ()=>
{ 
        if(submit_array_pressed_times == 0)
        {
            alert("click \"submit array\" button once");
            submit_array_pressed_times++;
        }
    
        if(which_algorithm.value == "select")
        {
            alert("Select an algorithm");
            
        }

        if(which_algorithm.value == "BubbleSort")
        {
            const pause_btn = document.getElementById("pause-btn");
            pause_btn.addEventListener("click", ()=>{
                alert("Paused!!!  Press ok to continue");
            });
            
            
            const arrayInput = document.getElementById("array");
            const submitArrayBtn = document.getElementById("submit-array");
            const visualizeBtn = document.getElementById("visualize-btn");
            const inputForm = document.querySelector(".input-form");
            const visualizationDiv = document.querySelector(".visualization-div");
            
            let maxElementVal = 0;
            let intArray = [];
            
            submitArrayBtn.addEventListener("click", () => {
                submitArray();
                
            });
            
            visualizeBtn.addEventListener("click", () => {
                bubbleSort();
            });
            
            
            
            const submitArray = () => {
                
                const stringArray = arrayInput.value;
                intArray = stringArray.split(",").map(Number);
                
                maxElementVal = Math.max(...intArray);
                
                visualizeBtn.disabled = false;
                visualizeArray();
            };


            
           

            const visualizeArray = () => {
                visualizationDiv.innerHTML = ""; // Clear previous visualization

                intArray.forEach((element, index) => {
                    const arrayElementBar = document.createElement("div");
                    arrayElementBar.innerHTML = `<p style="text-align: center; font-size: 15px"> ${intArray[index]} </p>`;
                    arrayElementBar.classList.add("array-element");
                    arrayElementBar.style.height = `${(element / maxElementVal) * 65}vh`;
                    arrayElementBar.style.width = `${55 / intArray.length}vw`;
                    arrayElementBar.style.left = `${(65 / intArray.length) * index}vw`;
                    arrayElementBar.style.top = `${65 - (element / maxElementVal) * 65}vh`;
                    
                    visualizationDiv.appendChild(arrayElementBar);




                });

            };

            const swapElements = (index1, index2) => {
                const temp = intArray[index1];
                intArray[index1] = intArray[index2];
                intArray[index2] = temp;

                // Swap bars visually with a delay
                const bars = document.querySelectorAll(".array-element");
                const bar1 = bars[index1];
                const bar2 = bars[index2];
                // console.log(bar1);
                // console.log(bar2);

                const tempLeft = bar1.style.left;
                bar1.style.left = bar2.style.left;
                bar2.style.left = tempLeft;

                

            };

            const addstyle = (j) => {
                const bars = document.querySelectorAll(".array-element");

                const bar1 = bars[j];
                const bar2 = bars[j + 1];

                bar1.classList.add("highlight-bar");
                bar2.classList.add("highlight-bar");
            };

            const removestyle = (j) => {
                const bars = document.querySelectorAll(".array-element");

                const bar1 = bars[j];
                const bar2 = bars[j + 1];

                bar1.classList.remove("highlight-bar");
                bar2.classList.remove("highlight-bar");
            };

            let last_iteration_index = -1;


            const desc_box = document.querySelector(".real-time-description-section");


            const bubbleSort = () => {

                const n = intArray.length;
                let i = 0;
                let j = 0;

                const sortStep = () => {
                    if (i < n - 1) 
                    {
                        last_iteration_index = n - i - 1;

                        
                        if (j < n - i - 1) 
                        {
                            desc_box.innerHTML = `<h3 style="text-align: center;">
                            Description Box
                        </h3><br><br><br><br><p>consider index ${j} and ${j+1} </p>`;
                            addstyle(j);

                            if (intArray[j] > intArray[j + 1]) 
                            {
                                
                                desc_box.innerHTML += `<br> <p> Swapped because ${j} th value (${intArray[j]}) is larger than ${j+1} th value (${intArray[j+1]})`;

                                swapElements(j, j + 1);

                            }
                            else
                            {
                                desc_box.innerHTML += `<br> <p> Not swapped because ${j} th value (${intArray[j]}) is smaller than ${j+1} th value (${intArray[j+1]})`;
                            }
                            j++;
                        }
                        else 
                        {
                            i++;
                            j = 0;
                        }

                        setTimeout(() => {

                            visualizeArray();

                            removestyle(j);

                        }, `${speed}`); // Adjust the delay as needed

                        setTimeout(sortStep, `${speed}`); // Adjust the delay as needed

                    }
                }

                sortStep();


            };
        }






















        if(which_algorithm.value == "SelectionSort")
            {

                



                const pause_btn = document.getElementById("pause-btn");
                pause_btn.addEventListener("click", ()=>{
                    alert("Paused!!!  Press ok to continue");
                });
                
                
                const arrayInput = document.getElementById("array");
                const submitArrayBtn = document.getElementById("submit-array");
                const visualizeBtn = document.getElementById("visualize-btn");
                const inputForm = document.querySelector(".input-form");
                const visualizationDiv = document.querySelector(".visualization-div");
                
                let maxElementVal = 0;
                let intArray = [];
                
                submitArrayBtn.addEventListener("click", () => {
                    submitArray();
                    
                });
                
                visualizeBtn.addEventListener("click", () => {
                    // console.log("visualize btn is pressed");
                    selectionSort();
                });
                
                
                
                const submitArray = () => {
                    
                    const stringArray = arrayInput.value;
                    intArray = stringArray.split(",").map(Number);
                    
                    maxElementVal = Math.max(...intArray);
                    
                    visualizeBtn.disabled = false;
                    visualizeArray();
                };
    
    
                
               
    
                const visualizeArray = () => {
                    // console.log("visualize array function");
                    visualizationDiv.innerHTML = ""; // Clear previous visualization
    
                    intArray.forEach((element, index) => {
                        const arrayElementBar = document.createElement("div");
                        arrayElementBar.innerHTML = `<p style="text-align: center; font-size: 15px"> ${intArray[index]} </p>`;
                        arrayElementBar.classList.add("array-element");
                        arrayElementBar.style.height = `${(element / maxElementVal) * 65}vh`;
                        arrayElementBar.style.width = `${55 / intArray.length}vw`;
                        arrayElementBar.style.left = `${(65 / intArray.length) * index}vw`;
                        arrayElementBar.style.top = `${65 - (element / maxElementVal) * 65}vh`;
                        
                        visualizationDiv.appendChild(arrayElementBar);
    
    
    
    
                    });
    
                };
    
                const swapElements = (index1, index2) => {
                    // console.log("inside swap elements");

                    const temp = intArray[index1];
                    intArray[index1] = intArray[index2];
                    intArray[index2] = temp;
    
                    // Swap bars visually with a delay
                    const bars = document.querySelectorAll(".array-element");
                    const bar1 = bars[index1];
                    const bar2 = bars[index2];
                    // console.log(bar1);
                    // console.log(bar2);
    
                    const tempLeft = bar1.style.left;
                    bar1.style.left = bar2.style.left;
                    bar2.style.left = tempLeft;
    
                    
    
                };
    
                const addstyle = (start, current) => {
                    // console.log("inside addstyle");

                    const bars = document.querySelectorAll(".array-element");
    
                    const bar1 = bars[start];
                    const bar2 = bars[current];
    
                    bar1.classList.add("highlight-bar");
                    bar2.classList.add("highlight-bar");
                };
    
                const removestyle = (start, current) => {
                    // console.log(" inside remove style");

                    const bars = document.querySelectorAll(".array-element");
    
                    const bar1 = bars[start];
                    const bar2 = bars[current];
    
                    bar1.classList.remove("highlight-bar");
                    bar2.classList.remove("highlight-bar");
                };
    
                
            
                const desc_box = document.querySelector(".real-time-description-section");
            

                const selectionSort = () =>{

                    // console.log("selection sort");

                    let start = 0;
                    let current = start+1;

                    
                    let n = intArray.length;
                    
                    let minimum_val_index = start;
                    
                    const sort_step_for_selection_sort = () =>
                    {
                        // console.log("inside sort_step_for_selection_sort");

                        // console.log(start, " , ", current);
                          
                        if(start < n-1)
                        {    
                            
                            if(current < n)
                            {
                                desc_box.innerHTML = `<h3 style="text-align: center;">
                                    Description Box
                                </h3><br><br><br><br><p>consider index ${start} and ${minimum_val_index} </p>`;

                                    addstyle(start, current);

                                    addstyle(start, current);

                                    if (intArray[current] < intArray[minimum_val_index]) 
                                    {
                                            
                                            desc_box.innerHTML += `<br> <p> got ${current} th value (${intArray[current]}) less than ${minimum_val_index} th value (${intArray[minimum_val_index]}) so minimum value is updated to  (${intArray[current]})`;
            
                                            minimum_val_index = current;

                                    }
                                    else
                                    {
                                            desc_box.innerHTML += `<br> <p> compared ${current} th value (${intArray[current]}) with ${minimum_val_index} th value (${intArray[minimum_val_index]})`;
                                    }
                                    current++;

                            }
                            else
                            {
                                swapElements(start, minimum_val_index);
                                // console.log(intArray[start], " and ", intArray[minimum_val_index]);
                                start++;
                                minimum_val_index = start;
                                current = start + 1;
                            }
                        
                            setTimeout(() => {
    
                                // console.log("inside settimeout");
    
                                visualizeArray();
                                
                                removestyle(start, current);
                                removestyle(start, current);
    
                            }, `${speed}`); // Adjust the delay as needed
    
                            setTimeout(sort_step_for_selection_sort, `${speed}`); // Adjust the delay as needed
                        }

                    }

                    
                    sort_step_for_selection_sort();
                };

            
            
            }
    

});