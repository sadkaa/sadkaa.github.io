const data = {
    hasan: {
        name: "الحاج/ حسن إبراهيم محمد"
    },
    mohammed: {
        name: "الحاج/ محمد إبراهيم محمد"
    }
}


let path = new URLSearchParams(window.location.search).toString()
if (path.endsWith("="))
    path = params.substring(0, path.toString().length - 1)

let name = data[path].name
