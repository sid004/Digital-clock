setInterval (showTime, 1000)

        function showTime(){
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            let h = document.getElementById("hour");
            let m = document.getElementById("min");
            let s = document.getElementById("sec");
            let ap = document.getElementById("ap")
            var ampm = hour >= 12 ? 'PM' : 'AM';

            h.innerHTML = hour;
            m.innerHTML = min;
            s.innerHTML = sec;
            ap.innerHTML = ampm;

        }