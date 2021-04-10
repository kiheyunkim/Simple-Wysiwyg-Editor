class SimpleEditor {
    constructor(contents, options) {
        this._editorArea = document.querySelector('#simple_editor');
        this._contents = contents;
        //option에 대한 처리

        this._addEditorEvent();
    }

    getContents = () => {
        return this._contents;
    }

    _addEditorEvent = () => {
        let sizeButton = this._editorArea.querySelector('#size_button');
        sizeButton.addEventListener('click',(event)=>{
            console.log(event);
            /*event.currentTarget.addEventListener('drag', (event) => {
                console.log(event);
            });*/
        });


    }

}

let editorTemplate = "";