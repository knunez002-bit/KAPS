document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link=>link.addEventListener("click",()=>{
    const nav=document.querySelector("#nav"); if(nav?.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(nav).hide();
  }));

  const search=document.querySelector("#searchVacantes");
  if(search){
    const cards=document.querySelectorAll(".vacancy"), empty=document.querySelector("#emptyVacantes");
    search.addEventListener("input",()=>{
      const q=search.value.toLowerCase().trim(); let count=0;
      cards.forEach(card=>{const show=(card.dataset.text+" "+card.innerText).toLowerCase().includes(q);card.classList.toggle("d-none",!show);if(show)count++});
      empty.classList.toggle("d-none",count>0);
    });
  }

  document.querySelectorAll(".details-btn").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelector("#modalTitle").textContent=btn.dataset.title;
    document.querySelector("#modalPrice").textContent=btn.dataset.price;
    bootstrap.Modal.getOrCreateInstance(document.querySelector("#vacancyModal")).show();
  }));

  function validate(formId,messageId){
    const form=document.querySelector(formId); if(!form)return;
    form.addEventListener("submit",e=>{
      e.preventDefault();
      if(!form.checkValidity()){form.classList.add("was-validated");return}
      form.classList.add("was-validated");
      document.querySelector(messageId)?.classList.remove("d-none");
    });
  }
  validate("#registroForm","#registroOk");
  validate("#commentForm","#commentOk");
});
