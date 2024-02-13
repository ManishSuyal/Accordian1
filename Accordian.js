const data = [
    {
      id: "1",
      question: "What are accordion components ?",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      id: "2",
      question: "What are they used for ?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      id: "3",
      question: "Accordion as a musical instrument ?",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      id: "4",
      question: "Can I create an accordion component with a different framework ?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];


  const accordionWrapper = document.querySelector(".Accordian")
   
 function createAccordian() {
    accordionWrapper.innerHTML = data.map(dataITEM=>
        `<div class="accordian_item">
        <div class="accordian_title">
        <h3>${dataITEM.question}</h3>
         </div>
         <div class="accordian_content">
        <p> ${dataITEM.answer}</p>
         </div>
    
        </div>`).join(" ")
 }
 createAccordian();


 const accordian_title = document.querySelectorAll(".accordian_title") ; 

 accordian_title.forEach((elem_title) =>{
    elem_title.addEventListener("click",(event)=>{
        if(elem_title.classList.contains("active")){
            elem_title.classList.remove("active")
        }
        else{
            let all_element = document.querySelectorAll(".active")
            all_element.forEach((elem_class)=>{
                elem_class.classList.remove("active")
            })
            elem_title.classList.add("active"); 
         }

    } )

 })