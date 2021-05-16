 var a = []
        
        function add() {
            a.push(document.getElementById("todo").value)
            localStorage.setItem("key", JSON.stringify(a))
            console.log(localStorage);
            disp()
        }
        window.onload = function() {
            if(JSON.parse(localStorage.getItem("key"))!= null){
                a=JSON.parse(localStorage.getItem('key'))
                disp()
            }
        }
        function del(i) {
            a.splice(i,1);
            localStorage.setItem("key", JSON.stringify(a))
            disp()
        }
        function done(i) {
            a[i] = "<s>" + a[i] + "</s>"
            localStorage.setItem("key", JSON.stringify(a));
            disp()
        }