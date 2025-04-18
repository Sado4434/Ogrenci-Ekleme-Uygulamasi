let array=[]
document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();
    const ad=document.getElementById("ad").value;
    const soyad=document.getElementById("soyad").value;
    let not=document.getElementById("not").value;
    
    let json={
        ad:ad,
        soyad:soyad,
        not:not
    }
    array.push(json);
    array.forEach(element => {
        console.log("Adı: " + element["ad"] + " Soyadı: " + element["soyad"] + " Notu: " +element["not"]);
        console.log("**************");
    });
    const div=document.getElementById("ogrenci_listesi");
    let html=""
    array.forEach(element=>{
        html+=`<p>Adı: ${element["ad"]} Soyadı: ${element["soyad"]} Notu: ${element["not"]}</p>`;    
    })
    
    div.innerHTML=html;
    
})
const bulunan_ogrenci_listesi=document.getElementById("bulunan_ogrenci_listesi");

const ogrenci_ara_form=document.getElementById("ogrenci_ara_form");
ogrenci_ara_form.addEventListener("submit",function(event){
    event.preventDefault();
    let ogrenci_ara=document.getElementById("ogrenci_ara").value;
    const ogrenci_ara_button=document.getElementById("ogrenci_ara_button");
    let sayac=0;
    for(let i=0;i<array.length;i++){
        if(array[i].ad.toLowerCase()===ogrenci_ara.toLowerCase()){
            bulunan_ogrenci_listesi.innerHTML=array[i].ad + " " + array[i].soyad + " " + array[i].not;
            sayac=1;
            break;  
        }
    }
    if(sayac==0){
        bulunan_ogrenci_listesi.innerHTML="Listede böyle bir öğrenci yok";
    }
})
const hesapla_button=document.getElementById("hesapla_button");
let hesapla_display=document.getElementById("hesapla_display");;
hesapla_button.addEventListener("click",function(){
    let top=0;
    array.forEach(element=>{
        let intNot=parseInt(element.not);
        top+=intNot;
    })
    let ortalama=top/array.length;
    hesapla_display.innerHTML=ortalama;
    console.log(top);
})


