$(document).ready(function () {
    const themeValue = document.cookie.split("; ").find((row) => row.startsWith("theme="))?.split("=")[1];
    if(themeValue == 'dark'){
        document.cookie = "theme=dark;path=/";
        document.documentElement.style.setProperty('--color4', '#d0d058');
        document.documentElement.style.setProperty('--color3', '#a0a840');
        document.documentElement.style.setProperty('--color2', '#708028');
        document.documentElement.style.setProperty('--color1', '#405010');
        document.getElementById('themeToggle').src  = './images/light.png';
        document.getElementById('logo').src  = './images/logodark.png';
    }
    else{
        document.cookie = "theme=light;path=/";
        document.documentElement.style.setProperty('--color1', '#d0d058');
        document.documentElement.style.setProperty('--color2', '#a0a840');
        document.documentElement.style.setProperty('--color3', '#708028');
        document.documentElement.style.setProperty('--color4', '#405010');
        document.getElementById('themeToggle').src  = './images/dark.png';
        document.getElementById('logo').src  = './images/logolight.png';
    }

    $('#themeToggle').click(function () {
        const themeValue = document.cookie.split("; ").find((row) => row.startsWith("theme="))?.split("=")[1];
        if(themeValue == 'dark'){
            document.cookie = "theme=light;path=/";
            document.documentElement.style.setProperty('--color1', '#d0d058');
            document.documentElement.style.setProperty('--color2', '#a0a840');
            document.documentElement.style.setProperty('--color3', '#708028');
            document.documentElement.style.setProperty('--color4', '#405010');
            document.getElementById('themeToggle').src  = './images/dark.png';
            document.getElementById('logo').src  = './images/logolight.png';
        }
        else{
            document.cookie = "theme=dark;path=/";
            document.documentElement.style.setProperty('--color4', '#d0d058');
            document.documentElement.style.setProperty('--color3', '#a0a840');
            document.documentElement.style.setProperty('--color2', '#708028');
            document.documentElement.style.setProperty('--color1', '#405010');
            document.getElementById('themeToggle').src  = './images/light.png';
            document.getElementById('logo').src  = './images/logodark.png';
        }
        document.getElementById('projectIframe').contentWindow.location.reload();
        console.log(document.cookie);
        return false;
    });
});