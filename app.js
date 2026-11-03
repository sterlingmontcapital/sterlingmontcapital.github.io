const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu()});
matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
const header=document.querySelector('header');function updateHeader(){header.classList.toggle('is-scrolled',scrollY>40)}addEventListener('scroll',updateHeader,{passive:true});updateHeader();
document.querySelectorAll('.steps details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)document.querySelectorAll('.steps details').forEach(other=>{if(other!==item)other.open=false})}));
const form=document.querySelector('#enquiry-form');const dialog=document.querySelector('#enquiry-preview');
if(form){const requested=new URLSearchParams(location.search).get('enquiry');if(['capital','business','adviser','general'].includes(requested))form.elements.enquiry.value=requested;
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const list=document.querySelector('#preview-fields');list.replaceChildren();const data=new FormData(form);for(const [key,label] of [['name','Name'],['email','Email'],['organisation','Organisation'],['enquiry','Enquiry type'],['message','Message']]){const dt=document.createElement('dt');dt.textContent=label;const dd=document.createElement('dd');dd.textContent=key==='enquiry'?form.elements.enquiry.selectedOptions[0].textContent:(data.get(key)||'Not provided');list.append(dt,dd)}dialog.showModal()});
dialog.querySelectorAll('.dialog-close,.dialog-done').forEach(b=>b.addEventListener('click',()=>dialog.close()));}
