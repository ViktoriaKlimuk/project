const e=document.querySelector("form");e.addEventListener("submit",(function(t){t.preventDefault(),t.target;const l=e.elements.email.value,s=e.elements.password.value;if(""!==l&&""!==s){{const{email:e,password:l}=t.currentTarget.elements,s={email:e.value,password:l.value};console.log(s)}e.reset()}else alert("You don`t fill all the fields.")}));
//# sourceMappingURL=07-form.8c08266c.js.map
