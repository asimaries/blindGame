let codeEditor = ace.edit("editorCode");

let editorLib ={
    init(){
        codeEditor.setTheme("ace/theme/monokai")
        codeEditor.setOptions({
            // fontFamily:"tahoma",
            fontSize:"14pt"
        })
    }
}
editorLib.init();
