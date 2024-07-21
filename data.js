const data = {
    hasan: {
        name: "الحاج/ حسن إبراهيم محمد"
    },
    mohammed: {
        name: "الحاج/ محمد إبراهيم محمد"
    },
    see1: {
        name: "الحاج/ محمد إبراهيم محمد"
    },
    see2: {
        name: "الحاج/ محمد إبراهيم محمد"
    },
    see3: {
        name: "الحاج/ محمد إبراهيم محمد"
    },
    see4: {
        name: "الحاج/ محمد إبراهيم محمد"
    },
    see5: {
        name: "الحاج/ محمد إبراهيم محمد"
    },
    ssee6: {
        name: "الحاج/ محمد إبراهيم محمد"
    }
}


let path = new URLSearchParams(window.location.search).toString()
if (path.endsWith("="))
    path = path.substring(0, path.toString().length - 1)

let name = data[path].name
