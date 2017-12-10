var txtName = document.getElementById('txtName');
console.log(txtName);
txtName.addEventListener('keypress', function(event){
    console.log('Đã nhấn nút'); 
});