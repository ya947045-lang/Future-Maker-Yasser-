
const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting){e.target.style.animation='fadeUp 1s ease forwards';}
 });
});
document.querySelectorAll('.card,.section').forEach(el=>observer.observe(el));
