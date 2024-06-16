cn="v1";
cf=['/ASDFG.html', 
    "/Asp.jpg"
];
self.addEventListener("install",function(ev){
    ev.waitUntil(caches.open(cn).then((cz)=>{
        console.log("installing");
        return cz.addAll(cf);
    }))
})
self.addEventListener("activate",(vb)=>{
    console.log("offline");
})